import '@felipegangrel/core-ui/styles.css';
import '@felipegangrel/example-ui/styles.css';
import '@felipegangrel/forms-ui/styles.css';
import './docs.css';

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
    backgrounds: {
      options: {
        // Default options
        dark: { name: 'Dark', value: '#333' },
        light: { name: 'Light', value: '#F7F9F2' },
        // Add your own
        lightBlue: { name: 'Light Blue', value: '#EBF5FF' },
        darkBlue: { name: 'Dark Blue', value: '#001529' },
      },
    },
    docs: {
      container: DocsContainer,
    },
  },
};

export default preview;
