# Saubh.Tech — Project Index
> Last updated: February 15, 2026 (night — backup system implemented)

## 🏗️ Infrastructure

| Item | Detail |
|------|--------|
| **Server** | Microsoft FXT6600 Bare Metal |
| **IP** | 103.67.236.186 |
| **OS** | Ubuntu 24 |
| **SSH Port** | 5104 (key-only, user: admin1) |
| **Web Server** | Caddy (auto HTTPS) |
| **Domain** | saubh.tech |
| **Database** | PostgreSQL |
| **Cache** | Redis |
| **Process Manager** | PM2 |
| **Firewall** | UFW + fail2ban |
| **Ports Open** | 80/443 (web), 5104 (SSH), 3000 (Next.js) |

## 📂 Active Projects

### 1. saubh-tech (Main Website)
- **Local Path**: `C:\Projects\saubh-tech\`
- **Server Path**: `/data/projects/saubh-gig/`
- **GitHub**: https://github.com/saubhtech/saubh-tech (public)
- **Stack**: Next.js 16 + TypeScript + Custom CSS (no Tailwind PostCSS)
- **Package Manager**: pnpm
- **Port**: 3000
- **Domain**: https://saubh.tech
- **Logo**: `public/logo.jpg` (source: `C:\Projects\saubh-logo.jpg`)
- **Status**: ✅ Live (Feb 15, 2026)

#### Component Architecture (src/components/)
| Component | File | Interactive |
|-----------|------|------------|
| Navbar | `Navbar.tsx` | ✅ Mobile menu, lang dropdown, scroll effect |
| Hero | `Hero.tsx` | Video background (`public/saubhtech.mp4`) |
| Phygital | `Phygital.tsx` | Scroll animations |
| Steps | `Steps.tsx` | Scroll animations |
| RealPeople | `RealPeople.tsx` | Scroll animations |
| Sectors | `Sectors.tsx` | 16 sector chips |
| Branding | `Branding.tsx` | — |
| ProvenResults | `ProvenResults.tsx` | — |
| SaubhOS | `SaubhOS.tsx` | — |
| Learning | `Learning.tsx` | — |
| Blog | `Blog.tsx` | 6 article cards |
| FAQ | `FAQ.tsx` | ✅ Accordion toggle |
| Community | `Community.tsx` | 6 voice cards |
| Pricing | `Pricing.tsx` | ✅ Tab switching (Q/H/A) |
| Newsletter | `Newsletter.tsx` | ✅ Form handling |
| Footer | `Footer.tsx` | — |
| ScrollAnimations | `ScrollAnimations.tsx` | IntersectionObserver hook |

#### Key Files
| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Main page — imports all components |
| `src/app/layout.tsx` | Root layout, SEO metadata, fonts, Font Awesome |
| `src/app/globals.css` | All custom CSS (1550 lines, extracted from HTML) |
| `src/lib/constants.ts` | Shared constants (logo path) |
| `postcss.config.mjs` | Empty — Tailwind PostCSS disabled to preserve custom CSS |
| `public/logo.jpg` | Saubh.Tech logo (used in Navbar + Footer) |
| `src/app/login/page.tsx` | Login/Register page (`/login` route) |

## 📂 GitHub Repositories (saubhtech)

| Repo | Type | Description | Status |
|------|------|-------------|--------|
| **saubh-tech** | Public | Main website (Next.js) | ✅ Live |
| **saubh-opus** | Private | Monorepo (website, CRM, APIs) | Archived |
| **chatgpt** | Private | ChatGPT related | Recent |
| **whatsapp-crm-frontend** | Private | WhatsApp CRM UI | Paused |
| **whatsapp-crm-frontend1** | Private | WhatsApp CRM UI v2 | Paused |
| **learn-saubh-cms** | Public | Learning CMS | Paused |
| **temp-assets** | Public | Temporary image assets | Utility |
| **tata-webhook** | Public | Tata webhook | Utility |
| **Zugnuu** | Public | Zugnuu project | Inactive |
| **zuugnu-production** | Public | Zugnuu production | Inactive |

## 🔄 Development Workflow

```
Local PC (C:\Projects\saubh-tech)
    ↓ git push
GitHub (saubhtech/saubh-tech)
    ↓ git pull (on server)
Server (/data/projects/saubh-gig)
    ↓ pnpm build → pm2 restart
Live (https://saubh.tech)
```

## 🛡️ Backup Strategy (3-Copy Rule)

Every piece of code exists in **3 places** at all times: Local PC, GitHub, Google Drive.

### Copy 1: Local PC (Real-time)
| Item | Detail |
|------|--------|
| **Location** | `C:\Projects\saubh-tech\` |
| **Method** | Git commits (version history) |
| **Frequency** | Every code change |
| **Dated Backups** | `C:\Backups\SaubhTech\YYYY-MM-DD\` |
| **Script** | `C:\Projects\saubh-tech\backup-local.ps1` |
| **Retention** | 30 days of date-stamped zips |
| **Run** | `powershell -ExecutionPolicy Bypass -File backup-local.ps1` |

### Copy 2: GitHub (Every Push)
| Item | Detail |
|------|--------|
| **Repo** | https://github.com/saubhtech/saubh-tech |
| **Method** | `git push origin main` |
| **Frequency** | Every change |
| **Version Tags** | `git tag v1.0-description` before major changes |

### Copy 3: Google Drive (Daily Automated)
| Item | Detail |
|------|--------|
| **Location** | `gdrive:SaubhTech-Backups/YYYY-MM-DD/` |
| **Method** | rclone (server cron) |
| **Script** | `/home/admin1/scripts/backup-server.sh` |
| **Cron** | `30 18 * * *` (midnight IST = 18:30 UTC) |
| **Retention** | 15 days on server, unlimited on Drive |
| **Contents** | Source tar.gz + server configs + DB dump |

### Backup Contents per Run

| File | Contents |
|------|----------|
| `saubh-tech_src_DATE_TIME.tar.gz` | Source code (no node_modules/.next/.git) |
| `server-configs_DATE.tar.gz` | Caddy, SSH, UFW, fail2ban configs |
| `saubh-db_DATE.sql.gz` | PostgreSQL full dump (if data exists) |

### Backup Scripts Location

| Script | Location | Purpose |
|--------|----------|---------|
| `backup-local.ps1` | `C:\Projects\saubh-tech\` | Local PC → C:\Backups\SaubhTech\ |
| `backup-server.sh` | `/home/admin1/scripts/` | Server → Google Drive |
| `setup-gdrive.sh` | `/home/admin1/scripts/` | One-time rclone setup guide |

### How to Run Backups

```powershell
# --- LOCAL BACKUP (Windows PowerShell) ---
cd C:\Projects\saubh-tech
powershell -ExecutionPolicy Bypass -File backup-local.ps1
# Creates: C:\Backups\SaubhTech\2026-02-15\saubh-tech_2026-02-15_1430.zip
```

```bash
# --- SERVER BACKUP (SSH into server) ---
/home/admin1/scripts/backup-server.sh
# Creates: /home/admin1/backups/2026-02-15/ + uploads to Google Drive
```

```bash
# --- CHECK BACKUP LOG ---
cat /home/admin1/backups/backup-log.txt
```

### Google Drive Setup (One-Time)

```bash
# 1. Install rclone
curl https://rclone.org/install.sh | sudo bash

# 2. Configure (follow prompts, use headless auth)
rclone config
# name: gdrive → type: Google Drive → scope: full → auto config: n
# Open URL in local browser → authorize → paste code

# 3. Test
rclone mkdir gdrive:SaubhTech-Backups

# 4. Setup cron
crontab -e
# Add: 30 18 * * * /home/admin1/scripts/backup-server.sh >> /home/admin1/backups/cron.log 2>&1
```

## 📋 Server Commands Cheatsheet

```bash
# SSH into server
ssh -p 5104 admin1@103.67.236.186

# Deploy latest from GitHub
cd /data/projects/saubh-gig
git pull origin main
pnpm install
pnpm build
pm2 restart saubh-gig

# Check status
pm2 status
pm2 logs saubh-gig

# Manual restart
fuser -k 3000/tcp
pm2 start ecosystem.config.js
```

## 📋 Local Dev Commands

```powershell
# Start local development
cd C:\Projects\saubh-tech
pnpm dev
# Opens http://localhost:3000

# Push changes to GitHub
git add .
git commit -m "description of change"
git push origin main

# Deploy to server (from local)
ssh -p 5104 admin1@103.67.236.186 "cd /data/projects/saubh-gig && git pull && pnpm install && pnpm build && pm2 restart saubh-gig"
```

## 📁 Backups Archive

| File | Date | Size | Contents | Location |
|------|------|------|----------|----------|
| full-projects-backup-feb15.tar.gz | Feb 15, 2026 | 673MB | All /data/projects/ | `C:\Backups\SaubhTech\Feb15\` |
| server-configs-backup-feb15.tar.gz | Feb 15, 2026 | 2KB | Caddy, SSH, UFW, fail2ban | `C:\Backups\SaubhTech\Feb15\` |
| *Daily automated* | Daily | ~5-10MB | Source + configs + DB | `gdrive:SaubhTech-Backups/YYYY-MM-DD/` |
| *Local snapshots* | On demand | ~50MB | Full project zip | `C:\Backups\SaubhTech\YYYY-MM-DD\` |

## ⚠️ Lessons Learned

1. **Always commit ALL project files to GitHub** — including `src/app/`, not just `app/`
2. **Server backups must include `/data/projects/`** — not just `/home/admin1/`
3. **Never edit live server directly** — always develop locally, test, then push
4. **Tag before major changes**: `git tag before-change-description`
5. **Next.js directory priority**: `app/` overrides `src/app/` when both exist — never have both
6. **Tailwind PostCSS strips custom CSS** — if using custom CSS, remove `@tailwindcss/postcss` from postcss.config.mjs
7. **Smart quotes break JS** — curly apostrophes (`'`) in strings cause parse errors; use double quotes for strings containing apostrophes
8. **Split HTML into React components** — avoid `dangerouslySetInnerHTML`; use proper components with data arrays for maintainability
