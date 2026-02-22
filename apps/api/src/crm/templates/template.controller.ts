import { Controller, Get, Post, Patch, Delete, Param, Body, Query } from '@nestjs/common';
import { TemplateService } from './template.service';

@Controller('crm/templates')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @Get(':channelId')
  async list(
    @Param('channelId') channelId: string,
    @Query('status') status?: string,
  ) {
    return this.templateService.list(channelId, status);
  }

  @Get('detail/:id')
  async get(@Param('id') id: string) {
    return this.templateService.get(id);
  }

  @Post()
  async create(@Body() body: {
    channelId: string;
    name: string;
    category: string;
    language?: string;
    body: string;
    header?: string;
    footer?: string;
    variables?: string[];
  }) {
    return this.templateService.create(body);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: {
      body?: string;
      header?: string;
      footer?: string;
      variables?: string[];
      isActive?: boolean;
    },
  ) {
    return this.templateService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.templateService.delete(id);
  }

  @Post('sync/:channelId')
  async sync(@Param('channelId') channelId: string) {
    return this.templateService.syncFromMeta(channelId);
  }
}
