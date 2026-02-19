# Saubh.Tech Platform

Phygital gig marketplace — monorepo powering [saubh.tech](https://saubh.tech).

## Architecture

| App | Path | Port | Stack |
|---|---|---|---|
| **Web** | `apps/web` | 3000 | Next.js 15 |
| **API** | `apps/api` | 3001 | NestJS 11, Prisma |
| **Realtime** | `apps/realtime` | 3002 | NestJS, WebSocket |
| **Admin** | `apps/admin` | 3003 | Next.js 15 |
| **Shared** | `packages/shared` | — | TypeScript library |

## Tech Stack

- **Runtime**: Node.js 24 LTS
- **Package Manager**: pnpm 10 (monorepo workspaces)
- **Database**: PostgreSQL 18
- **Cache**: Redis 7.2
- **Auth**: Keycloak 26.5
- **Storage**: MinIO (S3-compatible)
- **Reverse Proxy**: Caddy
- **Process Manager**: PM2
- **CI/CD**: GitHub Actions
- **i18n**: 37 languages (IndicTrans2 + NLLB)

## Prerequisites

- [Node.js 24 LTS](https://nodejs.org/)
- [pnpm 10](https://pnpm.io/) (`corepack enable && corepack prepare pnpm@latest --activate`)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (for dev services)

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/saubhtech/platform.git
cd platform

# 2. Copy environment files
cp .env.example .env
cp infra/compose/dev/.env.dev.example infra/compose/dev/.env.dev
# Edit .env.dev with your local secrets

# 3. Start dev infrastructure (Postgres, Redis, MinIO, Keycloak)
make dev-up

# 4. Install dependencies
pnpm install

# 5. Run database migrations
make migrate

# 6. Start all apps in dev mode
pnpm -r dev

# 7. Open in browser
#    Web:      http://localhost:3000
#    API:      http://localhost:3001/api/healthz
#    Admin:    http://localhost:3003
```

## Testing

```bash
# Run E2E tests (requires postgres_test on port 5433)
make test-e2e
```

## Useful Commands

```bash
make help            # Show all available commands
make dev-up          # Start Docker dev services
make dev-down        # Stop Docker dev services
make dev-ps          # Show service status
make migrate         # Run Prisma migrations (dev)
make migrate-prod    # Run Prisma migrations (deploy only)
make seed            # Seed the database
make studio          # Open Prisma Studio
make validate-i18n   # Validate translation files
make translate-dry   # Preview translations without writing
make clean           # Remove build artifacts
```

## Deployment

See [infra/ops/deploy-runbook.md](infra/ops/deploy-runbook.md) for full production deployment guide.

Automated via GitHub Actions — push to `main` triggers CI checks + deploy.

## Project Structure

```
platform/
├── apps/
│   ├── web/              # Public-facing website
│   ├── api/              # REST API + WebSocket gateway
│   ├── admin/            # Internal admin dashboard
│   └── realtime/         # Real-time event server
├── packages/
│   └── shared/           # Shared types, constants, utils
├── infra/
│   ├── caddy/            # Caddyfile (prod + dev)
│   ├── compose/dev/      # Docker Compose for dev services
│   └── ops/              # PM2 config, deploy runbook
├── scripts/              # i18n validation, auto-translate
├── .github/workflows/    # CI + Deploy pipelines
└── Makefile              # Developer command shortcuts
```

## License

Private — © Saubh.Tech
