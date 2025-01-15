import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import { baseConfig } from './base.js';

export const nodeConfig = [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ...js.configs.recommended.languageOptions,
      globals: {
        ...globals.node, // Node.js-specific globals
      },
    },
  },
  {
    rules: {
      'no-console': 'off', // Allowing usage of `console` in Node.js
      'no-process-exit': 'warn', // Warn about `process.exit()` usage
      'global-require': 'error', // Enforcing `require` to be at the top-level
      'callback-return': 'off', // Can be enabled depending on callback handling requirements
    },
  },
];
