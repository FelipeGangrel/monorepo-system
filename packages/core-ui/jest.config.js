import reactConfig from 'jest-config/react';

/** @type {import('jest').Config} */
const config = {
  ...reactConfig,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
