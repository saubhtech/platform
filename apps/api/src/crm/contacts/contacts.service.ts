import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ContactsService {
  constructor(private readonly prisma: PrismaService) {}

  // ─── List contacts (paginated, filterable) ─────────────────────────────────
  async list(opts: {
    channelId?: string;
    search?: string;
    page?: number;
    limit?: number;
  }) {
    const { channelId, search, page = 1, limit = 25 } = opts;
    const where: any = {};

    // Filter by channel: contacts who have conversations on this channel
    if (channelId) {
      where.conversations = { some: { channelId } };
    }

    // Search by name or whatsapp number
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { whatsapp: { contains: search } },
      ];
    }

    const [data, total] = await Promise.all([
      this.prisma.waContact.findMany({
        where,
        include: {
          conversations: {
            orderBy: { updatedAt: 'desc' },
            take: 1,
            include: {
              channel: true,
              messages: { orderBy: { sentAt: 'desc' }, take: 1 },
            },
          },
        },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.waContact.count({ where }),
    ]);

    return { data, total, page, limit, pages: Math.ceil(total / limit) };
  }

  // ─── Get single contact ────────────────────────────────────────────────────
  async get(id: string) {
    const contact = await this.prisma.waContact.findUnique({
      where: { id },
      include: {
        conversations: {
          orderBy: { updatedAt: 'desc' },
          include: {
            channel: true,
            messages: { orderBy: { sentAt: 'desc' }, take: 10 },
          },
        },
      },
    });
    if (!contact) throw new NotFoundException(`Contact ${id} not found`);
    return contact;
  }

  // ─── Create contact ────────────────────────────────────────────────────────
  async create(data: { whatsapp: string; name?: string }) {
    // Check if user exists in public.user with this whatsapp
    const existingUser = await this.prisma.user.findUnique({
      where: { whatsapp: data.whatsapp },
    });

    return this.prisma.waContact.create({
      data: {
        whatsapp: data.whatsapp,
        name: data.name || existingUser?.fname || null,
        userId: existingUser?.userid || null,
      },
    });
  }

  // ─── Update contact ────────────────────────────────────────────────────────
  async update(id: string, data: { name?: string; isBlocked?: boolean; optedOut?: boolean }) {
    await this.get(id); // verify exists
    return this.prisma.waContact.update({
      where: { id },
      data,
    });
  }

  // ─── Find or create contact by whatsapp number ─────────────────────────────
  async findOrCreate(whatsapp: string, name?: string) {
    let contact = await this.prisma.waContact.findUnique({
      where: { whatsapp },
    });

    if (!contact) {
      contact = await this.create({ whatsapp, name });
    }

    return contact;
  }
}
