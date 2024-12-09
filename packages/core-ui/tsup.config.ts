import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/tsup/index.ts"],
  format: ["cjs", "esm"],
  clean: true,
  dts: true,
  sourcemap: true,
  external: ["react"],
  ...options,
}));
