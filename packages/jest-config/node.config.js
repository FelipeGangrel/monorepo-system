/** @type {import('jest').Config} */
const config = {
  roots: ['<rootDir>/src'],
  modulePaths: ['<rootDir>/src'],
  testEnvironment: 'node',
  resetMocks: true,
  collectCoverageFrom: [
    'src/**/*.{ts}',
    '!src/**/*.d.ts',
    '!src/**/*.mock.{ts}',
  ],
  coverageReporters: ['json-summary', 'text'],
  coveragePathIgnorePatterns: [],
  transform: {
    '^.+\\.ts$': '@swc/jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
