import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Query,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('crm/contacts')
export class ContactsController {

  constructor(private readonly contactsService: ContactsService) {}

  // GET /crm/contacts?channelId=xxx&search=john&page=1&limit=25
  @Get()
  list(
    @Query('channelId') channelId?: string,
    @Query('search') search?: string,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page?: number,
    @Query('limit', new DefaultValuePipe(25), ParseIntPipe) limit?: number,
  ) {
    return this.contactsService.list({ channelId, search, page, limit });
  }

  // GET /crm/contacts/:id
  @Get(':id')
  get(@Param('id') id: string) {
    return this.contactsService.get(id);
  }

  // POST /crm/contacts
  @Post()
  create(@Body() body: { whatsapp: string; name?: string }) {
    return this.contactsService.create(body);
  }

  // PATCH /crm/contacts/:id
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() body: { name?: string; isBlocked?: boolean; optedOut?: boolean },
  ) {
    return this.contactsService.update(id, body);
  }
}
