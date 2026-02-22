// ─── Prisma 7 Config ────────────────────────────────────────────────────────
// datasource URL moved here from schema.prisma (Prisma 7 requirement)
// ─────────────────────────────────────────────────────────────────────────────
import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  earlyAccess: true,
  schema: 'prisma/schema.prisma',
  migrate: {
    schema: 'prisma/schema.prisma',
  },
  datasource: {
    url: process.env.DATABASE_URL!,
  },
});
