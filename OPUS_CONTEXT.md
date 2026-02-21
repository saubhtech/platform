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
| **CRM WhatsApp** | saubh.tech/crmwhats |
| **Package Manager** | pnpm (never npm) |

## Server Layout (Current)

| Item | Details |
|------|---------| 
| **Filesystem** | ~41G used / 379G total (11%) |
| **Docker containers** | saubh-keycloak (8080), saubh-postgres (5432), saubh-redis (6379), saubh-evolution (8081) |
| **PM2 apps** | web (3000), api (3001), realtime (3002), admin (3003), crmwhats (3004) |
| **Projects** | `/data/projects/platform` — only project remaining |
| **Redis password** | `Red1sSecure2026` |

## What's Been Built

### Apps in Monorepo (PM2)
| App | Path | Stack | Port | Status |
|-----|------|-------|------|--------|
| web | `apps/web` | Next.js 16, Tailwind v4, i18n (13 active languages) | 3000 | ✅ Live |
| api | `apps/api` | NestJS, Prisma, PostgreSQL, Keycloak + WhatsApp OTP auth + CRM + Bot | 3001 | ✅ Live |
| admin | `apps/admin` | Next.js, Tailwind, Keycloak SSO, CRM UI with channel switcher | 3003 | ✅ Live |
| realtime | `apps/realtime` | WebSocket server | 3002 | ✅ Live |
| crmwhats | `apps/crmwhats` | Next.js 16, dark glassmorphism UI, JWT auth (BO/GW only) | 3004 | ✅ Live |

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
- Webhook: `https://api.saubh.tech/api/crm/webhooks/evolution` (must use public URL — Docker can't reach localhost)
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
| channels | `channel.service.ts`, `channels.controller.ts` | `GET /crm/channels`, dual-provider routing (Evolution + WABA) |
| inbox | `inbox.controller.ts`, `inbox.service.ts` | `GET/POST /crm/conversations`, messages, assign, resolve, toggle-bot |
| contacts | `contacts.controller.ts`, `contacts.service.ts` | `GET/POST/PATCH /crm/contacts`, findOrCreate, auto-link to user |
| broadcast | `broadcast.controller.ts`, `broadcast.service.ts`, `broadcast.processor.ts` | `GET/POST /crm/broadcasts`, BullMQ queue `crm-broadcast`, 1msg/sec throttle |
| webhooks | `evolution-webhook.controller.ts`, `waba-webhook.controller.ts`, `webhook.service.ts` | Inbound message processing, auto-create contacts + conversations |

**CRM API Endpoints** (all under `/api/crm/`):
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/crm/channels` | GET | List all channels |
| `/api/crm/conversations` | GET | List conversations (filter: channelId, status) |
| `/api/crm/conversations/:id/messages` | GET | Message thread (paginated) |
| `/api/crm/conversations/:id/messages` | POST | Send message via channel |
| `/api/crm/conversations/:id/assign` | PATCH | Assign to agent |
| `/api/crm/conversations/:id/resolve` | PATCH | Mark resolved |
| `/api/crm/conversations/:id/toggle-bot` | PATCH | Toggle bot on/off |
| `/api/crm/contacts` | GET | List contacts (search, channelId filter) |
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
| Inbox | `/crm/inbox` | **Channel switcher tabs**, conversation list, filter by status, chat thread, send messages, resolve, toggle bot, 5s auto-refresh |
| Contacts | `/crm/contacts` | **Channel switcher tabs**, contact list, search, add contact, block/unblock |
| Broadcasts | `/crm/broadcasts` | Broadcast list with status badges |

**Verified**: Outbound + inbound messages working on both Evolution and WABA ✅

---

### Completed: P7 — WABA Activation + AI Bot ✅ (Feb 21, 2026)

**WABA (WhatsApp Business Cloud API)**:
- +918130960040 activated via Meta Graph API
- Webhook registered: `https://api.saubh.tech/api/crm/webhooks/waba`
- Meta webhook verified with `hub.challenge` ✅
- Subscribed to: `messages` field
- Outbound test: message delivered via Graph API ✅
- Inbound test: webhook received, contact + conversation auto-created ✅
- HMAC SHA256 signature verification implemented (skipped if `WABA_APP_SECRET` not set)

**WABA Env Vars** (apps/api/.env):
- `WABA_PHONE_NUMBER_ID=135600659640001`
- `WABA_BUSINESS_ACCOUNT_ID=124563407414910`
- `WABA_ACCESS_TOKEN=EAAImsV1nxWk...` (long-lived token)
- `WABA_VERIFY_TOKEN=a7f3c9e1b2d4068f5a9c7e3b1d204f68`

**AI Bot Module** (`apps/api/src/crm/bot/`):
- `bot.service.ts` — Claude Haiku auto-responder (model: `claude-haiku-4-5-20251001`)
- `bot.module.ts` — imports PrismaModule + ChannelModule
- System prompt: Saubh assistant, reply in user's language, under 100 words
- `[HANDOFF]` detection for human agent transfer
- Graceful fallback when `ANTHROPIC_API_KEY` not set
- Wired into `webhook.service.ts` — auto-replies on inbound if `conversation.isBot === true`
- **Status: Code ready, awaiting `ANTHROPIC_API_KEY`**

**Channel Switcher**:
- `GET /api/crm/channels` endpoint added
- Inbox + Contacts pages now have channel tabs (SIM vs WABA)
- Conversations and contacts filtered by selected channel
- Purple tabs for Evolution/SIM, green tabs for WABA

**Dependencies Added** (apps/api):
- `@anthropic-ai/sdk ^0.78.0`

---

### Completed: P8 — CRM WhatsApp App (crmwhats) ✅ (Feb 21, 2026)

**Standalone Next.js app** for Business Owners + Gig Workers (not admins).
- URL: `saubh.tech/crmwhats/[locale]/inbox|contacts|broadcast|settings`
- Auth: WhatsApp JWT (`saubh_token` cookie from P3), only BO/GW usertypes allowed
- Port: 3004 (Caddy reverse proxy via `handle /crmwhats*`)
- Design: Dark glassmorphism Gen-Z/Alpha UI

**Design System**:
- Background: #0A0A0F, #13131A, #1C1C27
- Primary: #7C3AED (violet), Secondary: #EC4899 (pink), Accent: #F97316 (orange)
- Glass cards: `rgba(255,255,255,0.05)` + `backdrop-filter: blur(12px)`
- Gradient buttons: `linear-gradient(135deg, #7C3AED, #EC4899)`

**App Structure** (`apps/crmwhats/src/`):
| Component | Description |
|-----------|-------------|
| `middleware.ts` | Locale detection (`saubh_locale` cookie), JWT auth, BO/GW gate, expiry check |
| `components/Sidebar.tsx` | Desktop collapsible sidebar + mobile bottom nav, channel switcher pills, user footer |
| `context/UserContext.tsx` | Decodes JWT, provides userid/fname/usertype/whatsapp + logout |
| `context/ChannelContext.tsx` | ALL/EVOLUTION/WABA filter, persists to localStorage |
| `components/ui/*` | GlassCard, GradientButton, Avatar, ChannelBadge, StatusDot, UnreadBadge, SkeletonLoader |

**Pages**:
| Page | Route | Features |
|------|-------|----------|
| Inbox | `/[locale]/inbox` | Two-panel (list + thread), search, status filters, channel filter, gradient chat bubbles, bot banner + take over, auto-scroll, 5s refresh |
| Contacts | `/[locale]/contacts` | Grid/list toggle, search, add contact, detail panel (hero, info, recent conversations), block/unblock |
| Broadcast | `/[locale]/broadcast` | List with status pills (DRAFT/SCHEDULED/SENDING/DONE/FAILED), detail panel with recipients |
| Broadcast Create | `/[locale]/broadcast/create` | 4-step wizard: Channel → Message (live preview) → Recipients (checkbox list) → Confirm (send now/schedule) |
| Settings | `/[locale]/settings` | Profile, channel status cards, notification toggles, default channel filter, sign out |
| Health | `/api/healthz` | `{ status: ok, app: crmwhats }` |

**Infrastructure**:
- Caddy: `handle /crmwhats*` → localhost:3004 (added inside saubh.tech block)
- PM2: `crmwhats` process, cwd `apps/crmwhats`, Next.js start --port 3004
- basePath: `/crmwhats` in next.config.ts

---

## What's Next: P9 — Bot Activation + CRM Polish

- Add `ANTHROPIC_API_KEY` to server `.env` to activate bot
- Bot settings page (system prompt customization, handoff keywords)
- `BotConfig` table + `defaultBotEnabled` on WaChannel
- Bot greeting on new conversations
- Template studio for WABA-approved templates
- Media message support (images, documents)
- Real-time inbox updates via WebSocket (rt.saubh.tech)

**Future phases**: P10 (CRM Pipeline/Deals) → P11 (Analytics Dashboard)

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

## CRM WhatsApp UI Pattern (Permanent)

- **Route**: `saubh.tech/crmwhats/[locale]/inbox|contacts|broadcast|settings`
- **Auth**: WhatsApp JWT (`saubh_token` cookie), BO/GW usertypes only
- **Design**: Dark glassmorphism, violet/pink gradient accents
- **API base**: `api.saubh.tech/api/crm/`

## Session Rules

- **WRONG PATH** (never use): `Desktop\15.02.2026\project\saubh-tech`
- **Correct local path**: `C:\Users\Rishutosh Kumar\Documents\platform`
- One task at a time. Print ✓ DONE. Wait for NEXT.
- Files under 20KB → GitHub API
- Files over 20KB → give PowerShell command
- SSH commands → give one block, wait for output
- Never paste prompts into SSH terminal
