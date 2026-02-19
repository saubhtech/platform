import type { Config } from 'jest';

const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testMatch: ['**/*.e2e-spec.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testEnvironment: 'node',
  // Use postgres_test (port 5433) — NEVER the main DB
  globals: {},
};

// Set TEST_DATABASE_URL for all test processes
process.env.DATABASE_URL =
  process.env.TEST_DATABASE_URL ||
  'postgresql://saubhtech:change_me_postgres_dev@127.0.0.1:5433/saubhtech_test?schema=public';

export default config;
