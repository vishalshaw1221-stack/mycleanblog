// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mycleanblog.vercel.app/', // 🧭 change to your real domain when deployed
  integrations: [
    sitemap(), // generates sitemap.xml automatically for SEO
  ],
});