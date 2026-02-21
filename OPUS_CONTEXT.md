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
| **Filesystem** | ~41G used / 379G total (11%) |
| **Docker containers** | saubh-keycloak (8080), saubh-postgres (5432), saubh-redis (6379), saubh-evolution (8081) |
| **PM2 apps** | web (3000), api (3001), realtime (3002), admin (3003) |
| **Projects** | `/data/projects/platform` — only project remaining |
| **Redis password** | `Red1sSecure2026` |

## What's Been Built

### Apps in Monorepo (PM2)
| App | Path | Stack | Port | Status |
|-----|------|-------|------|--------|
| web | `apps/web` | Next.js 16, Tailwind v4, i18n (13 active languages) | 3000 | ✅ Live |
| api | `apps/api` | NestJS, Prisma, PostgreSQL, Keycloak + WhatsApp OTP auth + CRM | 3001 | ✅ Live |
| admin | `apps/admin` | Next.js, Tailwind, Keycloak SSO, CRM UI | 3003 | ✅ Live |
| realtime | `apps/realtime` | WebSocket server | 3002 | ✅ Live |

### Docker Services
| Container | Image | Port | Role |
|-----------|-------|------|------|
| saubh-keycloak | keycloak/keycloak | 8080 | SSO/Auth |
| saubh-postgres | postgres:16 | 5432 | Main DB (`saubhtech` + `evolution`) |
| saubh-redis | redis:7 | 6379 | Cache + BullMQ queues |
| saubh-evolution | atendai/evolution-api:v2.2.0 | 8081 | WhatsApp API (v2.3.7) |

---

### Completed: P3 — WhatsApp OTP Login ✅ (Feb 21, 2026)

**Users Table** (`public.user`):
- Unified table for all user types (BO/CL/GW/SA/AD)
- Key fields: `userid` (BigInt PK), `whatsapp` (unique), `passcode`, `passcodeExpiry`, `fname`, `lname`, `usertype`, `email`, `status`

**WhatsApp Auth Endpoints** (all under `/api/` prefix):
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/whatsapp/register` | POST | Register user (whatsapp, fname, usertype) |
| `/api/auth/whatsapp/request-otp` | POST | Send 4-digit OTP via WhatsApp (rate limited: 3/hr) |
| `/api/auth/whatsapp/verify-otp` | POST | Verify OTP, return JWT (24hr expiry) |
| `/api/auth/whatsapp/logout` | POST | Client-side cookie clear |
| `/api/webhooks/whatsapp` | POST | Evolution API webhook (Register/Login commands) |

---

### Completed: P4 — WhatsApp CRM Audit ✅ (Feb 21, 2026)

Audited old WhatsApp CRM at `/opt/whatsapp-ai-platform/` (now removed in P5):
- Was: 8 Docker containers, 81 DB tables, 19 API modules, 12 frontend pages
- Integration plan created: `docs/crm-integration-plan.md`

---

### Completed: P5 — Remove Old WhatsApp Platform + Free Disk Space ✅ (Feb 21, 2026)

Old CRM removed entirely (architecturally incompatible). Disk freed: 52G.

---

### Completed: P6 — Fresh CRM WhatsApp Inside Monorepo ✅ (Feb 21, 2026)

**Evolution API Setup**:
- Container `saubh-evolution` running v2.3.7 on port 8081
- Instance `saubh-sim` connected to +918800607598 via QR
- Separate `evolution` database on saubh-postgres
- API Key: `eec4e150ae057851d1f1d690d371d3844373fa963191e01a09064dc105c35540`
- Webhook configured: `http://localhost:3001/crm/webhooks/evolution` (MESSAGES_UPSERT)
- Docker config: `infra/compose/evolution/docker-compose.yml`

**CRM Database** (`crm` schema in `saubhtech` DB — 6 tables):
| Model | Purpose |
|-------|---------|
| `WaChannel` | Phone numbers + provider type (EVOLUTION/WABA) |
| `WaContact` | WhatsApp contacts, links to `public.user` |
| `WaConversation` | Threads (OPEN/ASSIGNED/RESOLVED), bot toggle |
| `WaMessage` | Messages (IN/OUT), media, delivery status |
| `WaBroadcast` | Bulk message campaigns |
| `WaBroadcastRecipient` | Per-recipient delivery tracking |

**Seeded Channels**:
- Saubh SIM (+918800607598) → EVOLUTION, instance: `saubh-sim`
- Saubh Business (+918130960040) → WABA, instance: null

**CRM Backend Modules** (`apps/api/src/crm/`):
| Module | Key Files | Endpoints |
|--------|-----------|-----------|
| channels | `channel.service.ts` | Dual-provider routing (Evolution + WABA) |
| inbox | `inbox.controller.ts`, `inbox.service.ts` | `GET/POST /crm/conversations`, messages, assign, resolve, toggle-bot |
| contacts | `contacts.controller.ts`, `contacts.service.ts` | `GET/POST/PATCH /crm/contacts`, findOrCreate, auto-link to user |
| broadcast | `broadcast.controller.ts`, `broadcast.service.ts`, `broadcast.processor.ts` | `GET/POST /crm/broadcasts`, BullMQ queue `crm-broadcast`, 1msg/sec throttle |
| webhooks | `evolution-webhook.controller.ts`, `waba-webhook.controller.ts`, `webhook.service.ts` | Inbound message processing, auto-create contacts + conversations |

**CRM API Endpoints** (all under `/api/crm/`):
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/crm/conversations` | GET | List conversations (filter: channelId, status) |
| `/api/crm/conversations/:id/messages` | GET | Message thread (paginated) |
| `/api/crm/conversations/:id/messages` | POST | Send message via channel |
| `/api/crm/conversations/:id/assign` | PATCH | Assign to agent |
| `/api/crm/conversations/:id/resolve` | PATCH | Mark resolved |
| `/api/crm/conversations/:id/toggle-bot` | PATCH | Toggle bot on/off |
| `/api/crm/contacts` | GET | List contacts (search, filter) |
| `/api/crm/contacts` | POST | Create contact |
| `/api/crm/contacts/:id` | GET | Contact detail + conversations |
| `/api/crm/contacts/:id` | PATCH | Update contact |
| `/api/crm/broadcasts` | GET | List broadcasts |
| `/api/crm/broadcasts/:id` | GET | Broadcast detail + recipients |
| `/api/crm/broadcasts` | POST | Create broadcast (immediate or scheduled) |
| `/api/crm/webhooks/evolution` | POST | Evolution inbound webhook |
| `/api/crm/webhooks/waba` | GET/POST | WABA verification + inbound webhook |

**CRM Frontend** (admin app at `apps/admin/src/app/[locale]/crm/`):
| Page | Route | Features |
|------|-------|----------|
| Inbox | `/crm/inbox` | Conversation list, filter by status, chat thread, send messages, resolve, toggle bot, 5s auto-refresh |
| Contacts | `/crm/contacts` | Contact list, search, add contact, block/unblock |
| Broadcasts | `/crm/broadcasts` | Broadcast list with status badges |

**Sidebar**: CRM section added with Inbox, Contacts, Broadcasts links.

**Dependencies Added** (apps/api):
- `@nestjs/config`, `@nestjs/axios`, `@nestjs/bullmq`, `bullmq`
- `@nestjs/passport`, `passport-jwt`, `jwks-rsa`, `jsonwebtoken`, `@types/express`

**Caddy Routes**:
- `saubh.tech/whats/*` → Evolution API (QR reconnection, instance management)
- `api.saubh.tech/api/crm/webhooks/waba` → WABA webhook (for Meta console)

**Env Vars** (apps/api/.env):
- `EVOLUTION_API_URL=http://localhost:8081`
- `EVOLUTION_API_KEY=eec4e150ae057851d1f1d690d371d3844373fa963191e01a09064dc105c35540`
- `EVOLUTION_INSTANCE=saubh-sim`
- `REDIS_HOST=127.0.0.1`, `REDIS_PORT=6379`, `REDIS_PASSWORD=Red1sSecure2026`
- WABA credentials (phone number ID, business account ID, access token, verify token) — configured but not active yet

**Verified**: Outbound message sent via Evolution API → WhatsApp delivered ✅

---

## What's Next: P7 — AI Bot + WABA Integration

- Connect WABA (WhatsApp Business Cloud API) for +918130960040
- Build AI auto-responder bot (toggle per conversation)
- Template studio for WABA-approved templates
- Media message support (images, documents)
- Real-time inbox updates via WebSocket (rt.saubh.tech)

**Future phases**: P8 (CRM Pipeline/Deals) → P9 (Analytics Dashboard) → P10 (n8n Automation)

---

## DB Policy (Permanent — apply every session)

- **Master tables**: schema `master`, no businessId
- **Tenant tables**: always include businessId
- **CRM tables**: schema `crm`
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
- **crm schema**: WaChannel, WaContact, WaConversation, WaMessage, WaBroadcast, WaBroadcastRecipient

### Evolution DB (`evolution`)
- Managed by Evolution API internally

## Admin UI Pattern (Permanent)

- **Route**: `admin.saubh.tech/[locale]/master/[table]`
- **CRM Route**: `admin.saubh.tech/[locale]/crm/inbox|contacts|broadcasts`
- **All routes**: Keycloak protected (ADMIN or SUPER_ADMIN)
- **All tables**: paginated list + create + edit + soft delete
- **Existing generic viewer**: `apps/admin/src/app/[locale]/master/[table]/page.tsx`
- **API base**: `api.saubh.tech/api/`

## Session Rules

- **WRONG PATH** (never use): `Desktop\15.02.2026\project\saubh-tech`
- **Correct local path**: `C:\Users\Rishutosh Kumar\Documents\platform`
- One task at a time. Print ✓ DONE. Wait for NEXT.
- Files under 20KB → GitHub API
- Files over 20KB → give PowerShell command
- SSH commands → give one block, wait for output
- Never paste prompts into SSH terminal
