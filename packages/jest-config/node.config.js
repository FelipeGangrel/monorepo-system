/** @type {import('jest').Config} */
const config = {
  roots: ['<rootDir>/src'],
  modulePaths: ['<rootDir>/src'],
  testEnvironment: 'node',
  resetMocks: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/*.mock.{ts,tsx}',
  ],
  coverageReporters: ['json-summary', 'text'],
  coveragePathIgnorePatterns: [],
  transform: {
    '^.+\\.(ts|tsx)$': '@swc/jest',
  },
  moduleNameMapper: {
    '^#/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
