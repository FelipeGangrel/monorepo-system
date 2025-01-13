import sharedConfig from 'tailwind-config';
import type { Config } from 'tailwindcss';

const config: Pick<Config, 'presets' | 'content'> = {
  content: ['./.storybook/*.tsx', './src/**/*.tsx'],
  presets: [sharedConfig],
};

export default config;
