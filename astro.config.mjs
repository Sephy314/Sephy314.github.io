import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages *user site* → deployed at the root of https://sephy314.github.io
const site = 'https://sephy314.github.io';
const base = '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [mdx(), sitemap()],
  vite: {
    // @tailwindcss/vite returns a plugin array in v4.
    plugins: tailwindcss(),
  },
  markdown: {
    shikiConfig: {
      // Match the engineering-doc aesthetic of the site.
      theme: 'github-dark',
      wrap: true,
    },
  },
});
