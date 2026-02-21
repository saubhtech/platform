import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { PrismaModule } from '../../prisma/prisma.module';
import { ChannelModule } from '../channels/channel.module';

@Module({
  imports: [PrismaModule, ChannelModule],
  providers: [BotService],
  exports: [BotService],
})
export class BotModule {}
