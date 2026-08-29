// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://amberuncut.com',
  integrations: [sitemap()],
  redirects: {
    '/archive.html': '/archive/',
    '/starting-somewhere.html': '/posts/starting-somewhere/',
    '/ideal-client.html': '/posts/ideal-client/',
  },
});
