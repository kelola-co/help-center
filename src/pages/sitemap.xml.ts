import type { APIRoute } from 'astro';
import { siteConfig } from '../utils/seo';

export const GET: APIRoute = async () => {
  try {
    const siteUrl = siteConfig.url;
    const formattedDate = new Date().toISOString().split('T')[0];

    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteUrl}/sitemap-en.xml</loc>
    <lastmod>${formattedDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${siteUrl}/sitemap-id.xml</loc>
    <lastmod>${formattedDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${siteUrl}/sitemap-th.xml</loc>
    <lastmod>${formattedDate}</lastmod>
  </sitemap>
</sitemapindex>`;

    return new Response(sitemapIndex, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'max-age=3600'
      }
    });
  } catch (error) {
    console.error('Error generating sitemap index:', error);
    return new Response('Error generating sitemap', {
      status: 500
    });
  }
};
