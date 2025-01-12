import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/core-ui': path.resolve(__dirname, '../../packages/core-ui/src'),
    },
  },
});
