import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ChannelService } from './channel.service';
import { ChannelsController } from './channels.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [HttpModule, PrismaModule],
  controllers: [ChannelsController],
  providers: [ChannelService],
  exports: [ChannelService],
})
export class ChannelModule {}
