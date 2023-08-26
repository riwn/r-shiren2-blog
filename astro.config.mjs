import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// site: 'https://shiren2-speedrun.com',
	site: 'https://riwn.github.io',
	base: '/r-shiren2-blog',
	integrations: [mdx(), sitemap()],
});
