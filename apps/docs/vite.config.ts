import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

function resolvePackage(packageName: string, hasStyles = false) {
  const basePath = `../../packages/${packageName}`;
  const codePath = `@felipegangrel/${packageName}`;
  const cssPath = `${codePath}/styles.css`;

  return {
    ...(hasStyles && {
      [cssPath]: path.resolve(__dirname, basePath, 'dist/index.css'),
    }),
    [codePath]: path.resolve(__dirname, basePath, 'src'),
  };
}

const packages = {
  ...resolvePackage('core-ui', true),
  ...resolvePackage('react-hook-form', true),
  ...resolvePackage('intl'),
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      ...packages,
    },
  },
  server: {
    watch: {
      ignored: ['!**/node_modules/@felipegangrel/**'],
    },
  },
  optimizeDeps: {
    exclude: [
      '@felipegangrel/core-ui',
      '@felipegangrel/react-hook-form',
      '@felipegangrel/intl',
    ],
  },
});
