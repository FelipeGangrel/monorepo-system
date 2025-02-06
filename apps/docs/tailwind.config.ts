import sharedConfig from 'tailwind-config';
import type { Config } from 'tailwindcss';

const config: Pick<Config, 'prefix' | 'darkMode' | 'presets' | 'content'> = {
  prefix: 'docs-',
  darkMode: ['class', 'meta'],
  content: ['./.storybook/*.tsx', './src/**/*.tsx'],
  presets: [sharedConfig],
};

export default config;
