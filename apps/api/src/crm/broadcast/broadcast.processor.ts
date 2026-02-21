import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { PrismaService } from '../../prisma/prisma.service';
import { ChannelService } from '../channels/channel.service';

@Processor('crm-broadcast')
export class BroadcastProcessor extends WorkerHost {
  private readonly logger = new Logger(BroadcastProcessor.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly channelService: ChannelService,
  ) {
    super();
  }

  async process(job: Job<{ broadcastId: string }>) {
    const { broadcastId } = job.data;
    this.logger.log(`Processing broadcast ${broadcastId}`);

    const broadcast = await this.prisma.waBroadcast.findUnique({
      where: { id: broadcastId },
      include: {
        recipients: { include: { contact: true } },
      },
    });

    if (!broadcast) {
      this.logger.error(`Broadcast ${broadcastId} not found`);
      return;
    }

    // Update status to SENDING
    await this.prisma.waBroadcast.update({
      where: { id: broadcastId },
      data: { status: 'SENDING' },
    });

    let sentCount = 0;
    let failCount = 0;

    for (const recipient of broadcast.recipients) {
      if (recipient.contact.optedOut || recipient.contact.isBlocked) {
        await this.prisma.waBroadcastRecipient.update({
          where: { id: recipient.id },
          data: { status: 'FAILED' },
        });
        failCount++;
        continue;
      }

      try {
        const result = await this.channelService.sendMessage(broadcast.channelId, {
          to: recipient.contact.whatsapp,
          body: broadcast.body,
        });

        await this.prisma.waBroadcastRecipient.update({
          where: { id: recipient.id },
          data: {
            status: result.success ? 'SENT' : 'FAILED',
            sentAt: result.success ? new Date() : null,
          },
        });

        if (result.success) sentCount++;
        else failCount++;
      } catch (err: any) {
        this.logger.error(`Failed to send to ${recipient.contact.whatsapp}: ${err.message}`);
        await this.prisma.waBroadcastRecipient.update({
          where: { id: recipient.id },
          data: { status: 'FAILED' },
        });
        failCount++;
      }

      // Throttle: 1 message per second per channel
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    // Update broadcast status
    await this.prisma.waBroadcast.update({
      where: { id: broadcastId },
      data: {
        status: failCount === broadcast.recipients.length ? 'FAILED' : 'DONE',
        sentAt: new Date(),
      },
    });

    this.logger.log(
      `Broadcast ${broadcastId} complete: ${sentCount} sent, ${failCount} failed`,
    );
  }
}
