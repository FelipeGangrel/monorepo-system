import type { Config } from 'jest';

const config: Config = {
  roots: ['<rootDir>/src'],
  modulePaths: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  resetMocks: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/*.mock.{ts,tsx}',
  ],
  coveragePathIgnorePatterns: [],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': '@swc/jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
