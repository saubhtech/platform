import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AuthModule } from '../auth';

@Module({
  imports: [AuthModule],
  controllers: [AdminController],
})
export class AdminModule {}
