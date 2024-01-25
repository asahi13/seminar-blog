import { defineConfig } from 'astro/config';
import { fileURLToPath } from "url";
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';
import path, { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	vite: {
		resolve: {
		  alias: {
			"@/": `${path.resolve(__dirname, "src")}/`,
		  },
		},
	  },
});
