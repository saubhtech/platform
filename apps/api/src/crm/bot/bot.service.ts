import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { ChannelService } from '../channels/channel.service';
import Anthropic from '@anthropic-ai/sdk';

const DEFAULT_SYSTEM_PROMPT = `You are a helpful assistant for Saubh, an Indian phygital gig marketplace platform that connects people for physical and digital services.

Rules:
- Reply in the same language as the user.
- Keep responses short (under 100 words).
- Be friendly, helpful, and professional.
- Common questions: about services, pricing, how to register, how to find gig workers.
- Platform website: saubh.tech`;

const DEFAULT_GREETING = '👋 Namaste! I\'m Saubh Assistant.\nHow can I help you today?\n(Type \'agent\' to talk to our team)';

const DEFAULT_HANDOFF_KEYWORDS = ['agent', 'human', 'help', 'support', 'talk'];

@Injectable()
export class BotService {
  private readonly logger = new Logger(BotService.name);
  private client: Anthropic | null = null;

  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
    private readonly channelService: ChannelService,
  ) {
    const apiKey = this.config.get<string>('ANTHROPIC_API_KEY', '');
    if (apiKey) {
      this.client = new Anthropic({ apiKey });
      this.logger.log('Anthropic client initialized');
    } else {
      this.logger.warn('ANTHROPIC_API_KEY not set — bot disabled');
    }
  }

  // ─── Get bot config for a channel ───────────────────────────────────────
  async getBotConfig(channelId: string) {
    return this.prisma.botConfig.findUnique({
      where: { channelId },
    });
  }

  // ─── Create or update bot config ────────────────────────────────────────
  async upsertBotConfig(channelId: string, data: {
    isEnabled?: boolean;
    systemPrompt?: string | null;
    handoffKeywords?: string[];
    greetingMessage?: string | null;
  }) {
    return this.prisma.botConfig.upsert({
      where: { channelId },
      create: {
        channelId,
        isEnabled: data.isEnabled ?? false,
        systemPrompt: data.systemPrompt ?? null,
        handoffKeywords: data.handoffKeywords ?? DEFAULT_HANDOFF_KEYWORDS,
        greetingMessage: data.greetingMessage ?? null,
      },
      update: {
        ...(data.isEnabled !== undefined && { isEnabled: data.isEnabled }),
        ...(data.systemPrompt !== undefined && { systemPrompt: data.systemPrompt }),
        ...(data.handoffKeywords !== undefined && { handoffKeywords: data.handoffKeywords }),
        ...(data.greetingMessage !== undefined && { greetingMessage: data.greetingMessage }),
      },
    });
  }

  // ─── Get system prompt (DB or default) ──────────────────────────────────
  async getSystemPrompt(channelId: string): Promise<string> {
    const config = await this.getBotConfig(channelId);
    const keywords = config?.handoffKeywords?.length
      ? config.handoffKeywords
      : DEFAULT_HANDOFF_KEYWORDS;

    const basePrompt = config?.systemPrompt || DEFAULT_SYSTEM_PROMPT;

    return `${basePrompt}

If the user types any of these words: ${keywords.join(', ')}
respond with EXACTLY the text "[HANDOFF]" at the start of your message, followed by a polite handoff message.`;
  }

  // ─── Send greeting on new conversation ──────────────────────────────────
  async sendGreeting(conversationId: string): Promise<void> {
    const conversation = await this.prisma.waConversation.findUnique({
      where: { id: conversationId },
      include: { channel: { include: { botConfig: true } }, contact: true },
    });

    if (!conversation) return;

    const greeting = conversation.channel.botConfig?.greetingMessage || DEFAULT_GREETING;

    // Send via channel
    const sendResult = await this.channelService.sendMessage(conversation.channelId, {
      to: conversation.contact.whatsapp,
      body: greeting,
    });

    // Save outbound message
    await this.prisma.waMessage.create({
      data: {
        conversationId,
        direction: 'OUT',
        body: greeting,
        status: sendResult.success ? 'SENT' : 'FAILED',
        externalId: sendResult.externalId || null,
      },
    });

    await this.prisma.waConversation.update({
      where: { id: conversationId },
      data: { updatedAt: new Date() },
    });

    this.logger.log(`Greeting sent for conversation ${conversationId}`);
  }

  // ─── Check if bot should respond ────────────────────────────────────────
  shouldRespond(conversation: { isBot: boolean; status: string }): boolean {
    return conversation.isBot === true && conversation.status !== 'RESOLVED';
  }

  // ─── Generate AI response ───────────────────────────────────────────────
  async generateResponse(
    conversationId: string,
    incomingMessage: string,
    channelId: string,
  ): Promise<{ text: string; handoff: boolean }> {
    if (!this.client) {
      return { text: 'Our team will get back to you shortly.', handoff: true };
    }

    try {
      // Fetch last 10 messages for context
      const recentMessages = await this.prisma.waMessage.findMany({
        where: { conversationId },
        orderBy: { sentAt: 'asc' },
        take: 10,
        select: { direction: true, body: true },
      });

      // Build message history
      const history: { role: 'user' | 'assistant'; content: string }[] = recentMessages
        .filter(m => m.body)
        .map(m => ({
          role: m.direction === 'IN' ? 'user' as const : 'assistant' as const,
          content: m.body!,
        }));

      const systemPrompt = await this.getSystemPrompt(channelId);

      const response = await this.client.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 256,
        system: systemPrompt,
        messages: history.length > 0 ? history : [{ role: 'user', content: incomingMessage }],
      });

      const text = response.content
        .filter(block => block.type === 'text')
        .map(block => (block as { type: 'text'; text: string }).text)
        .join('');

      const handoff = text.startsWith('[HANDOFF]');
      const cleanText = handoff ? text.replace('[HANDOFF]', '').trim() : text;

      this.logger.log(`Bot response for ${conversationId}: ${cleanText.substring(0, 50)}...`);
      return { text: cleanText, handoff };
    } catch (err: any) {
      this.logger.error(`Bot generation failed: ${err.message}`);
      return { text: 'Sorry, I am having trouble right now. Let me connect you with our team.', handoff: true };
    }
  }

  // ─── Handle bot handoff to human ────────────────────────────────────────
  async handleHandoff(conversationId: string): Promise<void> {
    await this.prisma.waConversation.update({
      where: { id: conversationId },
      data: { isBot: false, status: 'OPEN' },
    });
    this.logger.log(`Handoff: conversation ${conversationId} transferred to human`);
  }

  // ─── Full auto-reply flow (called after inbound message saved) ──────────
  async autoReply(conversationId: string, incomingMessage: string): Promise<void> {
    const conversation = await this.prisma.waConversation.findUnique({
      where: { id: conversationId },
      include: { channel: true },
    });

    if (!conversation || !this.shouldRespond(conversation)) return;

    const { text, handoff } = await this.generateResponse(
      conversationId,
      incomingMessage,
      conversation.channelId,
    );

    // Send reply via channel
    const contact = await this.prisma.waContact.findFirst({
      where: { conversations: { some: { id: conversationId } } },
    });

    if (!contact) return;

    const sendResult = await this.channelService.sendMessage(conversation.channelId, {
      to: contact.whatsapp,
      body: text,
    });

    // Save outbound message
    await this.prisma.waMessage.create({
      data: {
        conversationId,
        direction: 'OUT',
        body: text,
        status: sendResult.success ? 'SENT' : 'FAILED',
        externalId: sendResult.externalId || null,
      },
    });

    await this.prisma.waConversation.update({
      where: { id: conversationId },
      data: { updatedAt: new Date() },
    });

    // Handle handoff if triggered
    if (handoff) {
      await this.handleHandoff(conversationId);
    }
  }
}
