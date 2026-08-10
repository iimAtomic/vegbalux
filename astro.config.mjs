// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	server: {
		port: process.env.PORT ? Number(process.env.PORT) : 4321,
		strictPort: false,
	},
});
