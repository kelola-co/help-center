import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import cloudflare from '@astrojs/cloudflare'

export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  vite: {
    ssr: {
      noExternal: ['instantsearch.js', '@docsearch/css'],
      external: ['@astrojs/image'] // Add this
    },
    optimizeDeps: {
      include: ['algoliasearch', 'instantsearch.js']
    }
  },
  output: 'server',
  adapter: cloudflare(),
  // Add this
  image: {
    domains: [],
    remotePatterns: [{ protocol: "https" }]
  }
});