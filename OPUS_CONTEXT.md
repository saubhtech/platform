# OPUS_CONTEXT.md — Session Context for Claude/Opus
> Last updated: February 21, 2026

## Quick Reference

| Item | Value |
|------|-------|
| **Repo** | github.com/saubhtech/platform (public, branch: main) |
| **Local Path** | `C:\Users\Rishutosh Kumar\Documents\platform` |
| **Server Path** | `/data/projects/platform` (only project folder on server) |
| **SSH** | `ssh -p 5104 admin1@103.67.236.186` |
| **API Domain** | api.saubh.tech |
| **Admin Domain** | admin.saubh.tech |
| **Web Domain** | saubh.tech |
| **Package Manager** | pnpm (never npm) |

## Server Layout (Current)

| Item | Details |
|------|---------|
| **Filesystem** | 40G used / 379G total (11%) |
| **Docker containers** | saubh-keycloak (8080), saubh-postgres (5432), saubh-redis (6379) |
| **PM2 apps** | web (3000), api (3001), realtime (3002), admin (3003) |
| **Projects** | `/data/projects/platform` — only project remaining |

## What's Been Built

### Apps in Monorepo (PM2)
| App | Path | Stack | Port | Status |
|-----|------|-------|------|--------|
| web | `apps/web` | Next.js 16, Tailwind v4, i18n (13 active languages) | 3000 | ✅ Live |
| api | `apps/api` | NestJS, Prisma, PostgreSQL, Keycloak + WhatsApp OTP auth | 3001 | ✅ Live |
| admin | `apps/admin` | Next.js, Tailwind, Keycloak SSO | 3003 | ✅ Live |
| realtime | `apps/realtime` | WebSocket server | 3002 | ✅ Live |

---

### Completed: P3 — WhatsApp OTP Login ✅ (Feb 21, 2026)

**Users Table** (`public.user`):
- Unified table for all user types (BO/CL/GW/SA/AD)
- Key fields: `userid` (BigInt PK), `whatsapp` (unique), `passcode`, `passcodeExpiry`, `fname`, `lname`, `usertype`, `email`, `status`
- Enums preserved: Gender, VerifiedType, UserStatus
- New fields added: `lname`, `passcodeExpiry` (mapped `passcode_expiry`), `usertype` (default "GW")

**WhatsApp Auth Endpoints** (all under `/api/` prefix):
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/whatsapp/register` | POST | Register user (whatsapp, fname, usertype) |
| `/api/auth/whatsapp/request-otp` | POST | Send 4-digit OTP via WhatsApp (rate limited: 3/hr) |
| `/api/auth/whatsapp/verify-otp` | POST | Verify OTP, return JWT (24hr expiry) |
| `/api/auth/whatsapp/logout` | POST | Client-side cookie clear |
| `/api/webhooks/whatsapp` | POST | Evolution API webhook (Register/Login commands) |

**Backend Files**:
- `apps/api/src/auth/otp.service.ts` — OTP generation/verification
- `apps/api/src/auth/whatsapp-auth.service.ts` — register, requestOTP, loginWithOTP
- `apps/api/src/auth/whatsapp-auth.controller.ts` — 4 auth endpoints
- `apps/api/src/auth/whatsapp-auth.module.ts` — module wiring
- `apps/api/src/whatsapp/whatsapp-sender.service.ts` — Evolution API sender (sendOTP, sendWelcome)
- `apps/api/src/whatsapp/whatsapp-webhook.controller.ts` — webhook handler
- `apps/api/src/whatsapp/whatsapp.module.ts` — module wiring

**Frontend Files**:
- `apps/web/src/app/[locale]/login/page.tsx` — Register tab (WhatsApp deep link) + Sign In tab (OTP flow)
- `apps/web/src/app/[locale]/dashboard/page.tsx` — Protected stub (JWT check, user info, logout)
- `apps/web/src/proxy.ts` — Updated with dashboard auth guard (saubh_token cookie check)

**Note**: Evolution API not running. OTP messages silently skipped. OTP readable from DB for testing.

---

### Completed: P4 — WhatsApp CRM Audit ✅ (Feb 21, 2026)

Audited old WhatsApp CRM at `/opt/whatsapp-ai-platform/` (now removed in P5):
- Was: 8 Docker containers, 81 DB tables, 19 API modules, 12 frontend pages
- Stack: NestJS + Drizzle ORM, separate DB (`whatsapp_platform`), BullMQ workers, MinIO, n8n
- Features found: multi-tenant, channels, inbox, contacts, messages, WABA, Evolution, AI bot, human handoff, broadcast, templates, CRM pipeline, analytics, n8n, attachments, consent
- Integration plan created: `docs/crm-integration-plan.md`

---

### Completed: P5 — Remove Old WhatsApp Platform + Free Disk Space ✅ (Feb 21, 2026)

**Decision**: Old CRM was architecturally incompatible (separate DB, separate ORM, separate auth). Removed entirely. Will build fresh CRM inside monorepo.

**Removed**:
- `/opt/whatsapp-ai-platform/` — entire folder
- 8 Docker containers (whats-backend, whats-frontend, whats-worker, whats-media, whats-postgres, whats-redis, whats-minio, whats-n8n)
- 4 Docker volumes + whats-network
- `/data/projects/saubh-gig/` (45MB) — old pre-monorepo project
- `/data/projects/saubh-gig-backup-20260219/` (394MB) — old backup
- Stopped `saubh-evolution` container (was crashed 42hrs)
- Docker prune: unused images, build cache

**Disk freed**: 52G (92G → 40G used), Docker images 126GB → 1.3GB

**Saved for P6** (Evolution API credentials):
- `EVOLUTION_API_URL=https://evo.saubh.tech`
- `AUTHENTICATION_API_KEY=20bc14ff5e5ce0b98d2ec7d9ed51046d78fc1ba4ce8e3540ba25e1d3e5cbb458`
- `DATABASE_CONNECTION_URI=postgresql://saubh_admin:PgSecure2026Saubh@postgres:5432/saubh_gig`
- Evolution image: `evoapicloud/evolution-api:v2.3.7`
- Instance data was at: `/data/evolution` (may still exist)

---

## What's Next: P6 — Build Fresh CRM WhatsApp Inside Monorepo

Build a new WhatsApp CRM app inside the monorepo at `apps/crmwhats/`:
- Use same stack as main platform (NestJS + Prisma + PostgreSQL)
- Share `saubhtech` DB (add CRM tables to existing schema)
- Share JWT auth from P3
- Start with: contacts, conversations, messages, inbox UI
- Evolution API: start fresh container, connect to platform API for OTP + CRM
- Route: `saubh.tech/crmwhats`

**Future phases**: P7 (WABA) → P8 (AI agent) → P9 (Broadcast) → P10 (Analytics)

---

## DB Policy (Permanent — apply every session)

- **Master tables**: schema `master`, no businessId
- **Tenant tables**: always include businessId
- **Every table must have**: id, createdAt, updatedAt (except legacy tables being modified in-place)
- **i18n split pattern** for all translatable master data:
  - Base table: code (UPPERCASE, unique), sortOrder, isActive
  - i18n table: parentId, locale, name, description, isFallback
  - `@@unique([parentId, locale])` on i18n tables
  - `@@index` on all foreign keys
- **Enums**: UPPERCASE codes only
- **Never delete columns** in migrations — only add or deprecate
- **Never force migrations**: always use `prisma migrate dev --name descriptive_name`
- **Soft delete only**: set `isActive=false`, never hard delete
- **All migrations must be reversible**

## Database Schema (Current)

### Main Platform DB (`saubhtech`)
- **public schema**: Business, Client, User (with WhatsApp OTP fields), UserMembership, Conversation, Message, Telephony
- **master schema**: Geographic hierarchy (Country → State → District → Postal → Place), Organizational hierarchy (Locality → Area → Division → Region → Zone), Industry classification (Sector → Field → Market), Language (basic — langid + language only)

## Master Tables Status

| Table | Current State | Target State | Status |
|-------|--------------|--------------|--------|
| Language | Basic (langid, language) | Add locale, isActive, isRtl, sortOrder | 🔜 NEXT |
| Sector | Basic (sectorid, sector) | Add code, sortOrder, isActive, createdAt, updatedAt + SectorI18n | ⏳ PENDING |
| Field | Basic (fieldid, field, sectorid) | Add code, sortOrder, isActive, createdAt, updatedAt + FieldI18n | ⏳ PENDING |
| Market → Item | Basic (marketid, sectorid, fieldid, p_s_ps, item) | Evolve into Item with i18n, or create ItemI18n alongside | ⏳ PENDING |
| DeliveryMode enum | Does not exist | `PHYSICAL, DIGITAL, PHYGITAL` | ⏳ PENDING |
| SectorI18n | Does not exist | New table | ⏳ PENDING |
| FieldI18n | Does not exist | New table | ⏳ PENDING |
| ItemI18n | Does not exist | New table | ⏳ PENDING |

## Admin UI Pattern (Permanent)

- **Route**: `admin.saubh.tech/[locale]/master/[table]`
- **All routes**: Keycloak protected (ADMIN or SUPER_ADMIN)
- **All tables**: paginated list + create + edit + soft delete
- **Existing generic viewer**: `apps/admin/src/app/[locale]/master/[table]/page.tsx`
- **API base**: `api.saubh.tech/master/`

## Session Rules

- **WRONG PATH** (never use): `Desktop\15.02.2026\project\saubh-tech`
- **Correct local path**: `C:\Users\Rishutosh Kumar\Documents\platform`
- One task at a time. Print ✓ DONE. Wait for NEXT.
- Files under 20KB → GitHub API
- Files over 20KB → give PowerShell command
- SSH commands → give one block, wait for output
- Never paste prompts into SSH terminal
