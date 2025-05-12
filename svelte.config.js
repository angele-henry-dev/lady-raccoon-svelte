import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: path.resolve('./src/layouts/markdownLayout.svelte')
		})
	],

	kit: {
		alias: {
			$components: path.resolve('./src/components'),
			$content: path.resolve('./src/content')
		},
		adapter: adapter({
			images: {
				sizes: [640, 828, 1200, 1920],
				formats: ['image/avif', 'image/webp'],
				minimumCacheTTL: 300,
				domains: ['lady-raccoon-svelte.vercel.app'],
			}
		})
	},
	vitePlugin: {
		inspector: true
	}
};

export default config;
