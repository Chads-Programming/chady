import { type Options, defineConfig } from 'tsup'

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ['src/globals.css', 'src/**/*.tsx', 'src/**/*.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  minify: true,
  clean: true,
  external: ['react'],
  banner: {
    js: '"use client";',
  },
  ...options,
}))
