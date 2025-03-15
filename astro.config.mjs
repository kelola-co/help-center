import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import cloudflare from '@astrojs/cloudflare'

export default defineConfig({
  integrations: [
    tailwind(), 
    alpinejs(),
  ],
  vite: {
    ssr: {
      noExternal: ['instantsearch.js', '@docsearch/css']
    },
    optimizeDeps: {
      include: ['algoliasearch', 'instantsearch.js']
    }
  },
  site: 'https://help.kelola.co',
  output: 'server',
  adapter: cloudflare()
});