import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BroadcastService {
  private readonly logger = new Logger(BroadcastService.name);

  constructor(
    private readonly prisma: PrismaService,
    @InjectQueue('crm-broadcast') private readonly broadcastQueue: Queue,
  ) {}

  // ─── List broadcasts ──────────────────────────────────────────────────────
  async list(opts: { channelId?: string; page?: number; limit?: number }) {
    const { channelId, page = 1, limit = 25 } = opts;
    const where: any = {};
    if (channelId) where.channelId = channelId;

    const [data, total] = await Promise.all([
      this.prisma.waBroadcast.findMany({
        where,
        include: {
          channel: true,
          _count: { select: { recipients: true } },
        },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.waBroadcast.count({ where }),
    ]);

    return { data, total, page, limit, pages: Math.ceil(total / limit) };
  }

  // ─── Get single broadcast ─────────────────────────────────────────────────
  async get(id: string) {
    const broadcast = await this.prisma.waBroadcast.findUnique({
      where: { id },
      include: {
        channel: true,
        recipients: { include: { contact: true } },
      },
    });
    if (!broadcast) throw new NotFoundException(`Broadcast ${id} not found`);
    return broadcast;
  }

  // ─── Create broadcast + queue for sending ─────────────────────────────────
  async create(data: {
    name: string;
    channelId: string;
    body: string;
    contactIds: string[];
    scheduledAt?: string;
  }) {
    // Verify channel exists
    const channel = await this.prisma.waChannel.findUnique({
      where: { id: data.channelId },
    });
    if (!channel) throw new NotFoundException(`Channel ${data.channelId} not found`);

    // Create broadcast + recipients in a transaction
    const broadcast = await this.prisma.$transaction(async (tx) => {
      const bc = await tx.waBroadcast.create({
        data: {
          name: data.name,
          channelId: data.channelId,
          body: data.body,
          scheduledAt: data.scheduledAt ? new Date(data.scheduledAt) : null,
          status: data.scheduledAt ? 'SCHEDULED' : 'SENDING',
        },
      });

      // Create recipient records
      await tx.waBroadcastRecipient.createMany({
        data: data.contactIds.map((contactId) => ({
          broadcastId: bc.id,
          contactId,
          status: 'PENDING',
        })),
      });

      return bc;
    });

    // Queue the broadcast job
    const delay = data.scheduledAt
      ? Math.max(0, new Date(data.scheduledAt).getTime() - Date.now())
      : 0;

    await this.broadcastQueue.add(
      'send-broadcast',
      { broadcastId: broadcast.id },
      {
        delay,
        attempts: 3,
        backoff: { type: 'exponential', delay: 5000 },
      },
    );

    this.logger.log(
      `Broadcast ${broadcast.id} created: ${data.contactIds.length} recipients, ` +
      `${delay > 0 ? `scheduled in ${Math.round(delay / 60000)}min` : 'sending now'}`,
    );

    return broadcast;
  }
}
