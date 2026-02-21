import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';
import { BroadcastService } from './broadcast.service';

@Controller('crm/broadcasts')
export class BroadcastController {

  constructor(private readonly broadcastService: BroadcastService) {}

  // GET /crm/broadcasts?channelId=xxx&page=1&limit=25
  @Get()
  list(
    @Query('channelId') channelId?: string,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page?: number,
    @Query('limit', new DefaultValuePipe(25), ParseIntPipe) limit?: number,
  ) {
    return this.broadcastService.list({ channelId, page, limit });
  }

  // GET /crm/broadcasts/:id
  @Get(':id')
  get(@Param('id') id: string) {
    return this.broadcastService.get(id);
  }

  // POST /crm/broadcasts
  @Post()
  create(
    @Body() body: {
      name: string;
      channelId: string;
      body: string;
      contactIds: string[];
      scheduledAt?: string;
    },
  ) {
    return this.broadcastService.create(body);
  }
}
