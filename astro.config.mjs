import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  vite: {
    ssr: {
      noExternal: ['instantsearch.js', '@docsearch/css']
    },
    optimizeDeps: {
      include: ['algoliasearch', 'instantsearch.js']
    }
  }
});