# Saubh.Tech — Project Index
> Last updated: February 16, 2026 (i18n type-safety + stable React keys + direct dynamic imports)

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
| **Container Runtime** | Docker + Docker Compose |
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
- **Logo**: `public/logo.jpg`
- **Status**: ✅ Live

---

## 🌐 i18n System — Architecture

### Translation Loading (Direct Dynamic Imports)
```
Page loads → useEffect detects ?lang=hi (or cookie)
           → LANG_LOADERS['hi']() = import('./strings/hi')
           → Webpack chunk loads (code-split, no API)
           → Merge with English fallback: { ...enBase, ...hiStrings }
           → All components re-render via React Context t() function
```

**No API dependency.** Translations are bundled as webpack chunks.

### Type Safety (3-Layer Protection)
| Layer | Mechanism | What it catches |
|-------|-----------|-----------------|
| **TypeScript** | `TranslationStrings` type from `en.ts` | `pnpm build` FAILS if any key missing |
| **CLI Script** | `scripts/validate-i18n.ts` | Batch check all files, list exact missing keys |
| **Runtime API** | `GET /api/lang/validate` | Live coverage % per deployed language |

### React Keys Rule (Critical!)
All `.map()` in components MUST use **stable non-translated keys** (`id`, `index`, or i18n key string). Never `key={t('...')}` — causes invisible sections when language switches due to `anim-up` animation conflict.

### How to Add a New Language
```
1. Create: src/lib/i18n/strings/xx.ts
   - Import type: import type { TranslationStrings } from './en';
   - Use type: const xx: TranslationStrings = { ...212 keys... };
   - TypeScript will ERROR if any key is missing

2. Register loader in TranslationProvider.tsx:
   const LANG_LOADERS: Record<string, LangLoader> = {
     hi: () => import('./strings/hi'),
     xx: () => import('./strings/xx'),  // ← add this line
   };

3. Deploy:
   cd /data/projects/saubh-gig && git pull origin main && pnpm build && pm2 restart saubh-gig

4. Test:
   https://saubh.tech/?lang=xx
```

---

## 📁 Key Files (Must-Read for New Sessions)

### ⭐ Files Opus Must Read Before Any i18n Task
| Priority | File | Purpose | How to Read |
|----------|------|---------|-------------|
| 1 | `PROJECT-INDEX.md` | This file — full project context | `github:get_file_contents owner=saubhtech repo=saubh-tech path=PROJECT-INDEX.md` |
| 2 | `src/lib/i18n/strings/en.ts` | Master English strings (212 keys, source of truth) | `github:get_file_contents ...path=src/lib/i18n/strings/en.ts` |
| 3 | `src/lib/i18n/TranslationProvider.tsx` | Translation loading + LANG_LOADERS map | `github:get_file_contents ...path=src/lib/i18n/TranslationProvider.tsx` |
| 4 | `src/lib/i18n/strings/hi.ts` | Reference translation file (Hindi) — use as template | `github:get_file_contents ...path=src/lib/i18n/strings/hi.ts` |
| 5 | `src/lib/i18n/languages.ts` | All 37 language definitions | `github:get_file_contents ...path=src/lib/i18n/languages.ts` |

### Component Files (src/components/)
| Component | File | React Key |
|-----------|------|-----------|
| Navbar | `Navbar.tsx` | N/A (static) |
| Hero | `Hero.tsx` | N/A (static) |
| Phygital | `Phygital.tsx` | `key={card.id}` ✅ |
| Steps | `Steps.tsx` | `key={step.num}` ✅ |
| RealPeople | `RealPeople.tsx` | `key={card.id}` ✅ |
| Sectors | `Sectors.tsx` | `key={i}` ✅ |
| Branding | `Branding.tsx` | `key={card.id}` ✅ |
| ProvenResults | `ProvenResults.tsx` | `key={stat.num}` ✅ |
| SaubhOS | `SaubhOS.tsx` | `key={card.id}` ✅ |
| Learning | `Learning.tsx` | `key={feat.id}` ✅ |
| Blog | `Blog.tsx` | `key={i}` ✅ |
| FAQ | `FAQ.tsx` | `key={i}` ✅ |
| Community | `Community.tsx` | `key={voice.id}` ✅ |
| Pricing | `Pricing.tsx` | `key={plan.id}` ✅ |
| Newsletter | `Newsletter.tsx` | N/A (static) |
| Footer | `Footer.tsx` | `key={i18nKey}` ✅ |
| ScrollAnimations | `ScrollAnimations.tsx` | N/A (no text) |

### Other Key Files
| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Main page — wraps all components in `<TranslationProvider>` |
| `src/app/layout.tsx` | Root layout, dynamic `<html lang>` from cookie, SEO metadata |
| `src/app/globals.css` | All custom CSS (~1550 lines) |
| `src/app/api/lang/page/route.ts` | API route for translations (kept for external tools) |
| `src/app/api/lang/validate/route.ts` | Runtime i18n validation endpoint |
| `scripts/validate-i18n.ts` | CLI i18n validator |
| `src/lib/constants.ts` | Shared constants (logo path) |
| `next.config.ts` | Next.js config |

---

## 🌍 i18n Translation Status

### Completed Languages
| # | Code | Language | Status | File |
|---|------|----------|--------|------|
| 1 | en | English | ✅ Master (212 keys) | `strings/en.ts` |
| 2 | hi | Hindi | ✅ Complete (212 keys) | `strings/hi.ts` |

### Pending — Indian Languages (22 total, prioritized by speaker count)
| # | Code | Language | Speakers | Batch | Status |
|---|------|----------|----------|-------|--------|
| 3 | bn | Bengali | 230M | Batch 1 | ⏳ Pending |
| 4 | te | Telugu | 83M | Batch 1 | ⏳ Pending |
| 5 | mr | Marathi | 83M | Batch 1 | ⏳ Pending |
| 6 | ta | Tamil | 78M | Batch 1 | ⏳ Pending |
| 7 | gu | Gujarati | 56M | Batch 1 | ⏳ Pending |
| 8 | kn | Kannada | 44M | Batch 2 | ⏳ Pending |
| 9 | ml | Malayalam | 38M | Batch 2 | ⏳ Pending |
| 10 | pa | Punjabi | 33M | Batch 2 | ⏳ Pending |
| 11 | or | Odia | 35M | Batch 2 | ⏳ Pending |
| 12 | as | Assamese | 15M | Batch 2 | ⏳ Pending |
| 13 | ur | Urdu (RTL) | 70M | Batch 3 | ⏳ Pending |
| 14 | ne | Nepali | 16M | Batch 3 | ⏳ Pending |
| 15-23 | sa,mai,kok,doi,sd,ks,brx,sat,mni | Remaining | — | Batch 4 | ⏳ Pending |

### Pending — International Languages (14 total)
| # | Code | Language | Batch | Status |
|---|------|----------|-------|--------|
| 24 | es | Spanish | Batch 5 | ⏳ Pending |
| 25 | fr | French | Batch 5 | ⏳ Pending |
| 26 | ar | Arabic (RTL) | Batch 5 | ⏳ Pending |
| 27 | zh | Chinese | Batch 5 | ⏳ Pending |
| 28 | pt | Portuguese | Batch 6 | ⏳ Pending |
| 29 | ru | Russian | Batch 6 | ⏳ Pending |
| 30 | de | German | Batch 6 | ⏳ Pending |
| 31 | ja | Japanese | Batch 6 | ⏳ Pending |
| 32 | ko | Korean | Batch 7 | ⏳ Pending |
| 33 | tr | Turkish | Batch 7 | ⏳ Pending |
| 34 | th | Thai | Batch 7 | ⏳ Pending |
| 35 | vi | Vietnamese | Batch 7 | ⏳ Pending |
| 36 | id | Indonesian | Batch 7 | ⏳ Pending |
| 37 | ms | Malay | Batch 7 | ⏳ Pending |

---

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

## 📋 Server Deploy Commands

```bash
# SSH into server
ssh -p 5104 admin1@103.67.236.186

# Deploy saubh-tech
cd /data/projects/saubh-gig
git pull origin main
pnpm build
pm2 restart saubh-gig

# Check status
pm2 status
pm2 logs saubh-gig --lines 20
```

## ⚠️ Lessons Learned

1. **Always commit ALL project files to GitHub** — including `src/app/`, not just `app/`
2. **Never edit live server directly** — always push to GitHub, pull on server
3. **Tag before major changes**: `git tag before-change-description`
4. **Smart quotes break JS** — curly apostrophes in strings cause parse errors
5. **i18n: Extract ALL strings to en.ts** — never hardcode text in components
6. **i18n: Use cookie for language persistence** — URL params alone don't survive navigation
7. **i18n: Always fall back to English** — `{ ...enBase, ...langStrings }` merge
8. **i18n: Use TranslationStrings type** — TypeScript enforces complete translations at build time
9. **i18n: NEVER use translated text as React key** — causes invisible sections due to anim-up/ScrollAnimations conflict. Always use stable `id` or `index`
10. **i18n: Use explicit LANG_LOADERS map** — not template literal `import(\`./strings/${code}\`)` which Turbopack can't resolve
11. **i18n: en.ts uses `as const`** — need `const enBase: Record<string, string> = en` for dynamic key lookups in TranslationProvider
12. **i18n: API route imports must match existing files** — never import a language file that hasn't been pushed yet
