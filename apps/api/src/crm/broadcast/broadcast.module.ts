import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { BroadcastController } from './broadcast.controller';
import { BroadcastService } from './broadcast.service';
import { BroadcastProcessor } from './broadcast.processor';
import { PrismaModule } from '../../prisma/prisma.module';
import { ChannelModule } from '../channels/channel.module';

@Module({
  imports: [
    PrismaModule,
    ChannelModule,
    BullModule.registerQueue({ name: 'crm-broadcast' }),
  ],
  controllers: [BroadcastController],
  providers: [BroadcastService, BroadcastProcessor],
  exports: [BroadcastService],
})
export class BroadcastModule {}
