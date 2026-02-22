import {
  Controller,
  Post,
  Get,
  Param,
  Res,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Response } from 'express';
import { extname, join } from 'path';
import { existsSync } from 'fs';
import { randomUUID } from 'crypto';

const UPLOAD_DIR = '/data/uploads/crm';

const MIME_TO_TYPE: Record<string, string> = {
  'image/jpeg': 'image',
  'image/png': 'image',
  'image/webp': 'image',
  'image/gif': 'image',
  'video/mp4': 'video',
  'video/3gpp': 'video',
  'audio/ogg': 'audio',
  'audio/mpeg': 'audio',
  'audio/mp4': 'audio',
  'application/pdf': 'document',
  'application/msword': 'document',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'document',
  'application/vnd.ms-excel': 'document',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'document',
};

@Controller('crm/media')
export class MediaController {
  // POST /crm/media/upload — multipart file upload
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
        filename: (_req, file, cb) => {
          const id = randomUUID();
          const ext = extname(file.originalname) || '.bin';
          cb(null, `${id}${ext}`);
        },
      }),
      limits: { fileSize: 16 * 1024 * 1024 }, // 16 MB
      fileFilter: (_req, file, cb) => {
        if (MIME_TO_TYPE[file.mimetype]) {
          cb(null, true);
        } else {
          cb(new BadRequestException(`Unsupported file type: ${file.mimetype}`), false);
        }
      },
    }),
  )
  upload(@UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException('No file uploaded');

    const mediaType = MIME_TO_TYPE[file.mimetype] || 'document';
    const mediaUrl = `${process.env.API_BASE_URL || 'https://api.saubh.tech'}/api/crm/media/${file.filename}`;

    return {
      filename: file.filename,
      originalName: file.originalname,
      mimeType: file.mimetype,
      size: file.size,
      mediaType,
      mediaUrl,
    };
  }

  // GET /crm/media/:filename — serve uploaded file
  @Get(':filename')
  serve(@Param('filename') filename: string, @Res() res: Response) {
    // Sanitize filename
    const safe = filename.replace(/[^a-zA-Z0-9._-]/g, '');
    const filepath = join(UPLOAD_DIR, safe);

    if (!existsSync(filepath)) {
      return res.status(404).json({ error: 'File not found' });
    }

    return res.sendFile(filepath);
  }
}
