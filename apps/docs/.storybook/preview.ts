import '@felipegangrel/core-ui/styles.css';
import './main.css';

import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

import { DocsContainer } from './docs-container';

const preview: Preview = {
  parameters: {
    darkMode: {
      dark: { ...themes.dark },
      light: { ...themes.light },
      stylePreview: true,
      darkClass: 'dark',
      lightClass: 'light',
    },
    docs: {
      container: DocsContainer,
    },
  },
};

export default preview;
