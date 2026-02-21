# OPUS_CONTEXT.md — Session Context for Claude/Opus
> Last updated: February 21, 2026

## Quick Reference

| Item | Value |
|------|-------|
| **Repo** | github.com/saubhtech/platform (public, branch: main) |
| **Local Path** | `C:\Users\Rishutosh Kumar\Documents\platform` |
| **Server Path** | `/data/projects/platform` (also symlinked from `/data/projects/saubh-gig`) |
| **CRM Path** | `/opt/whatsapp-ai-platform/` |
| **SSH** | `ssh -p 5104 admin1@103.67.236.186` |
| **API Domain** | api.saubh.tech |
| **Admin Domain** | admin.saubh.tech |
| **Web Domain** | saubh.tech |
| **CRM URL** | saubh.tech/crmwhats (changed from /whats in P4) |
| **Package Manager** | pnpm (never npm) |

## What's Been Built

### Apps in Monorepo (PM2)
| App | Path | Stack | Port | Status |
|-----|------|-------|------|--------|
| web | `apps/web` | Next.js 16, Tailwind v4, i18n (13 active languages) | 3000 | ✅ Live |
| api | `apps/api` | NestJS, Prisma, PostgreSQL, Keycloak + WhatsApp OTP auth | 3001 | ✅ Live |
| admin | `apps/admin` | Next.js, Tailwind, Keycloak SSO | 3003 | ✅ Live |
| realtime | `apps/realtime` | WebSocket server | 3002 | ✅ Live |

### WhatsApp CRM (Docker — 8 containers)
| Container | Image | Port | Role |
|-----------|-------|------|------|
| whats-backend | Custom NestJS + Drizzle ORM | 4000 | CRM API |
| whats-frontend | Custom Next.js (basePath: /whats) | 3100 | CRM UI |
| whats-worker | Custom BullMQ | — | Background jobs |
| whats-media | nginx:alpine | 4001 | Media server |
| whats-postgres | postgres:16-alpine | 5432 (internal) | DB: whatsapp_platform |
| whats-redis | redis:7-alpine | 6379 (internal) | Queue + cache |
| whats-minio | minio/minio:latest | 9000/9001 | S3 storage |
| whats-n8n | n8nio/n8n:latest | 5678 (internal) | Workflow automation |

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

---

### Completed: P4 — WhatsApp CRM Audit + URL Migration ✅ (Feb 21, 2026)

**Audit Findings**:
- Full-featured WhatsApp CRM at `/opt/whatsapp-ai-platform/`
- 8 Docker containers, 81 DB tables, 19 API modules, 12 frontend pages
- NestJS + Drizzle ORM (different from main platform's Prisma)
- Separate DB (`whatsapp_platform`) from main platform (`saubhtech`)
- Dual connector: Evolution API + WABA (WhatsApp Business Cloud API)
- n8n automation built in

**Gap Analysis Summary** (17 EXISTS, 1 PARTIAL, 1 MISSING):
- ✅ EXISTS: Multi-tenant, channels, inbox, contacts, messages, WABA, Evolution, AI bot, human handoff, broadcast, templates, CRM pipeline, analytics, n8n, attachments, consent
- ⚠️ PARTIAL: Multilingual (backend hook exists, no i18n tables)
- ❌ MISSING: SIM-based WhatsApp connector
- ⚠️ NOT RUNNING: Evolution API container

**Top 5 Integration Gaps** (platform ↔ CRM):
1. Auth not connected — CRM has own JWT, not linked to P3 auth
2. User tables separate — CRM `users` vs main `public.user`
3. Databases separate — `whatsapp_platform` vs `saubhtech`
4. Evolution API down — OTP sender can't deliver messages
5. No shared session/SSO between platforms

**URL Migration**: `/whats` → `/crmwhats` in Caddy config (done)

**Integration Plan**: `docs/crm-integration-plan.md` — auth SSO, user mapping, shared services, API boundaries, phase plan P5–P10

---

## What's Next: P5 — Connect CRM Auth to Main Platform JWT

- Share `JWT_SECRET` between main platform API and CRM backend
- Add JWT validation middleware in CRM that accepts main platform tokens
- Add `platform_user_id BIGINT UNIQUE` to CRM `users` table
- Auto-provision CRM user on first valid JWT access (lazy provisioning)
- Start Evolution API container for OTP delivery + CRM webhooks
- See `docs/crm-integration-plan.md` for full details

**Future phases**: P6 (WABA) → P7 (AI agent) → P8 (CRM pipeline) → P9 (Broadcast) → P10 (Analytics)

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

### CRM DB (`whatsapp_platform`) — 81 tables
- **CRM Core**: tenants, users, user, contacts, contact_notes, contact_lists, conversations, messages, attachments, labels, whatsapp_channels, quick_replies, templates
- **Pipeline**: crm_deals, crm_pipelines, crm_tasks
- **Broadcast**: broadcasts, broadcast_recipients
- **Chat Hub**: chat_hub_agents, chat_hub_messages, chat_hub_sessions
- **AI + Consent**: ai_bot_config, consent_records
- **Analytics**: analytics_events, insights_by_period, insights_metadata, insights_raw
- **n8n**: ~30 workflow/execution/credential tables (shared DB)

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
