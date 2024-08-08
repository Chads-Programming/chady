import { defineConfig } from 'tsup';

export default defineConfig({
	treeshake: true,
	target: 'es2020',
	format: ['cjs', 'esm'],
	entry: ['src/**/*.ts'],
	splitting: true,
	sourcemap: true,
	clean: true,
	dts: true,
});
