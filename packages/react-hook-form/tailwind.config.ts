import sharedConfig from 'tailwind-config';
import type { Config } from 'tailwindcss';

const config: Pick<Config, 'prefix' | 'presets' | 'content'> = {
  prefix: 'rhf-',
  content: ['./src/**/*.tsx'],
  presets: [sharedConfig],
};

export default config;
