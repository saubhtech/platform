# Saubh.Tech — Dev Infrastructure

Local development stack managed via Docker Compose. One command to start everything.

## Prerequisites

- [Docker Desktop](https://docs.docker.com/get-docker/) (or Docker Engine + Compose plugin)
- [GNU Make](https://www.gnu.org/software/make/) (pre-installed on macOS/Linux; on Windows use `make` via Git Bash, WSL, or [GnuWin32](http://gnuwin32.sourceforge.net/packages/make.htm))

Verify both are available:

```bash
docker --version        # 24.x+
docker compose version  # 2.20+
make --version
```

## Quick Start

```bash
# 1. Copy the example env file and edit secrets
cp infra/compose/dev/.env.dev.example infra/compose/dev/.env.dev

# 2. Edit .env.dev — replace all "change_me_*" values
#    (any text editor works, just don't commit this file)

# 3. Start everything
make dev-up
```

That's it. Five services will start in the background.

## Services

| Service        | URL / Port              | Description                  |
| -------------- | ----------------------- | ---------------------------- |
| PostgreSQL     | `localhost:5432`        | Main database                |
| PostgreSQL Test| `localhost:5433`        | Isolated test database       |
| Redis          | `localhost:6379`        | Cache / queues (BSD-3, v7.2) |
| MinIO API      | `localhost:9000`        | S3-compatible object storage |
| MinIO Console  | `http://localhost:9001` | MinIO web UI                 |
| Keycloak       | `http://localhost:8080` | Identity & access management |

## Common Commands

```bash
make dev-up      # Start all services
make dev-down    # Stop all services
make dev-ps      # Show service status + health
make dev-logs    # Tail logs (Ctrl+C to exit)
```

## Checking Health

After `make dev-up`, run:

```bash
make dev-ps
```

All services should show `healthy` in the Status column. Keycloak takes the longest (~30–60s) since it waits for Postgres first.

You can also verify individual services:

```bash
# Postgres
docker exec saubhtech-postgres pg_isready

# Redis
docker exec saubhtech-redis redis-cli -a YOUR_REDIS_PASSWORD ping

# MinIO — open console
open http://localhost:9001

# Keycloak — open admin console
open http://localhost:8080
```

## Resetting Data

To wipe all data and start fresh:

```bash
make dev-down
docker volume rm saubhtech_postgres_data saubhtech_postgres_test_data saubhtech_redis_data saubhtech_minio_data saubhtech_keycloak_data
make dev-up
```

## Troubleshooting

**Port conflict:** If a port is already in use, change it in `.env.dev` (e.g. `POSTGRES_PORT=5442`) and re-run `make dev-up`.

**Missing `.env.dev`:** `make dev-up` will error with instructions if the file doesn't exist.

**Keycloak won't start:** It depends on Postgres being healthy first. Check `make dev-logs` for connection errors — usually means Postgres credentials in `.env.dev` are mismatched.
