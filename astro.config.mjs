import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	markdown: {
		shikiConfig: {
			theme: 'github-dark',
			wrap: true,
		},
	},
	integrations: [solidJs(), mdx()],
});
