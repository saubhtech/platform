import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { MediaController } from './media.controller';

@Module({
  imports: [
    MulterModule.register({ dest: '/data/uploads/crm' }),
  ],
  controllers: [MediaController],
})
export class MediaModule {}
