import sharedConfig from 'tailwind-config';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[class*="dark"]'],
  content: ['./.storybook/*.tsx', './src/**/*.tsx'],
  presets: [sharedConfig],
};

export default config;
