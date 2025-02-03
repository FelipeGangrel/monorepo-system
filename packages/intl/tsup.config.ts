import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
  sourcemap: true,
  treeshake: true,
  external: ['react'],
  ...options,
}));
