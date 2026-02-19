# ─── Saubh.Tech Platform — Makefile ───
# Usage: make <target>

.PHONY: help install dev build start clean lint typecheck deploy validate-i18n translate

# ─── Default ─────────────────────────────────────────────────────────────────

help: ## Show available commands
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

# ─── Setup ───────────────────────────────────────────────────────────────────

install: ## Install all dependencies
	pnpm install

# ─── Development ─────────────────────────────────────────────────────────────

dev: ## Start web app in dev mode (Turbopack)
	pnpm --filter @saubhtech/web dev

build: ## Build web app for production
	pnpm --filter @saubhtech/web build

start: ## Start production server
	pnpm --filter @saubhtech/web start

# ─── Quality ─────────────────────────────────────────────────────────────────

lint: ## Lint all packages
	pnpm -r lint

typecheck: ## Type-check shared package
	pnpm --filter @saubhtech/shared typecheck

# ─── i18n ────────────────────────────────────────────────────────────────────

validate-i18n: ## Validate all translation files against en.ts
	npx ts-node scripts/validate-i18n.ts

translate: ## Run auto-translation engine (requires server)
	python3 scripts/auto-translate.py --status

translate-run: ## Run auto-translation for all pending languages
	python3 scripts/auto-translate.py

translate-dry: ## Preview translation changes without writing
	python3 scripts/auto-translate.py --dry-run

# ─── Cleanup ─────────────────────────────────────────────────────────────────

clean: ## Remove build artifacts and node_modules
	pnpm -r exec rm -rf .next node_modules dist
	rm -rf node_modules

# ─── Deploy ──────────────────────────────────────────────────────────────────

deploy: ## Deploy to production server (SSH required)
	ssh -p 5104 admin1@103.67.236.186 \
		'cd /data/projects/saubh-gig && git pull origin main && pnpm install && pnpm build && pm2 restart saubh-gig'
