import { Controller, Get } from '@nestjs/common';
import { ChannelService } from './channel.service';

@Controller('crm/channels')
export class ChannelsController {
  constructor(private readonly channelService: ChannelService) {}

  @Get()
  async list() {
    return this.channelService.getChannels();
  }
}
