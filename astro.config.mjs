import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import node from '@astrojs/node'

export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  vite: {
    ssr: {
      noExternal: ['instantsearch.js', '@docsearch/css']
    },
    optimizeDeps: {
      include: ['algoliasearch', 'instantsearch.js']
    }
  },
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});