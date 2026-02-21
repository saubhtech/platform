import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { ChannelService } from '../channels/channel.service';
import Anthropic from '@anthropic-ai/sdk';

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

  // ─── Check if bot should respond ────────────────────────────────────────
  shouldRespond(conversation: { isBot: boolean; status: string }): boolean {
    return conversation.isBot === true && conversation.status !== 'RESOLVED';
  }

  // ─── Generate AI response ───────────────────────────────────────────────
  async generateResponse(
    conversationId: string,
    incomingMessage: string,
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

      const systemPrompt = `You are a helpful assistant for Saubh, an Indian phygital gig marketplace platform that connects people for physical and digital services.

Rules:
- Reply in the same language as the user.
- Keep responses short (under 100 words).
- Be friendly, helpful, and professional.
- If you cannot help or the user asks for a human agent, respond with EXACTLY the text "[HANDOFF]" at the start of your message, followed by a polite handoff message.
- Common questions: about services, pricing, how to register, how to find gig workers.
- Platform website: saubh.tech`;

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

    const { text, handoff } = await this.generateResponse(conversationId, incomingMessage);

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
