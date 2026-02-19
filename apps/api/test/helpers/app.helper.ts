import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { execSync } from 'child_process';
import { AppModule } from '../../src/app.module';
import { PrismaService } from '../../src/prisma/prisma.service';

let app: INestApplication;
let prisma: PrismaService;

/**
 * Boot the full NestJS app against postgres_test (port 5433).
 *
 * - Runs prisma migrate deploy to sync schema
 * - Configures global prefix + validation (mirrors main.ts)
 * - Returns the app instance for supertest
 */
export async function getApp(): Promise<INestApplication> {
  if (app) return app;

  // Run migrations on test DB before booting
  try {
    execSync('npx prisma migrate deploy', {
      cwd: __dirname + '/../..',
      env: { ...process.env },
      stdio: 'pipe',
    });
  } catch (err: any) {
    const stderr = err?.stderr?.toString() || '';
    console.error('prisma migrate deploy failed:', stderr);
    throw new Error(
      `prisma migrate deploy failed. Is postgres_test running on port 5433?\n` +
        `Run: make dev-up (or docker compose up postgres_test)\n` +
        stderr,
    );
  }

  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  app = moduleFixture.createNestApplication();

  // Mirror main.ts setup
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.init();

  prisma = app.get(PrismaService);

  return app;
}

/**
 * Get PrismaService for direct DB operations in tests (seeding, cleanup).
 */
export function getPrisma(): PrismaService {
  return prisma;
}

/**
 * Tear down the app and disconnect Prisma.
 * Call in afterAll() of your top-level describe.
 * Safe to call even if app never booted.
 */
export async function closeApp(): Promise<void> {
  try {
    if (prisma) {
      await prisma.$disconnect();
    }
  } catch {
    // ignore disconnect errors during cleanup
  }
  try {
    if (app) {
      await app.close();
    }
  } catch {
    // ignore close errors during cleanup
  }
  app = undefined as any;
  prisma = undefined as any;
}
