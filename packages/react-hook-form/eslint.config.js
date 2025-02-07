import { reactConfig } from 'eslint-config/react.js';
import tseslint from 'typescript-eslint';

export default tseslint.config([
  ...reactConfig,
  {
    rules: {
      ...reactConfig.rules,
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    },
  },
]);
