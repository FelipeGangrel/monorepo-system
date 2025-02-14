import sharedConfig from 'tailwind-config';
import type { Config } from 'tailwindcss';

const config: Config = {
  prefix: 'core-',
  darkMode: ['class', 'html[class~="dark"]'],
  content: ['./src/**/*.tsx'],
  presets: [sharedConfig],
};

export default config;
