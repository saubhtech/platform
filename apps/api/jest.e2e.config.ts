import type { Config } from 'jest';

// Set TEST_DATABASE_URL for all test processes
// Uses postgres_test (port 5433) — NEVER the main DB
process.env.DATABASE_URL =
  process.env.TEST_DATABASE_URL ||
  'postgresql://saubhtech_test:change_me_postgres_test@127.0.0.1:5433/saubhtech_test?schema=public';

const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testMatch: ['**/*.e2e-spec.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testEnvironment: 'node',
};

export default config;
