// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://biesal.com',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      // Exclude Zoho verification from sitemap
      filter: (page) => !page.includes('/zohoverify/'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});