import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import addClasses from './add-classes.mjs';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	markdown: {
		shikiConfig: {
			theme: 'github-dark',
			wrap: true,
		},
		rehypePlugins: [
			[addClasses, { a: 'md-ancher' }],
			[addClasses, { 'h2,h3,h4,h5,h6': 'md-headings' }],
			[addClasses, { img: 'md-img' }],
			[addClasses, { p: 'md-p' }],
			[addClasses, { h1: 'md-h1' }],
			[addClasses, { li: 'md-li' }],
			[addClasses, { article: 'article' }],
		],
	},
	integrations: [
		solidJs(),
		mdx({
			rehypePlugins: [
				[addClasses, { a: 'md-ancher' }],
				[addClasses, { 'h2,h3,h4,h5,h6': 'md-headings' }],
				[addClasses, { img: 'md-img' }],
				[addClasses, { p: 'md-p' }],
				[addClasses, { h1: 'md-h1' }],
				[addClasses, { li: 'md-li' }],
				[addClasses, { article: 'article' }],
			],
		}),
	],
});
