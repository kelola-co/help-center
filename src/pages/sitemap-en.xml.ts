import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { siteConfig } from '../utils/seo';

const lang = 'en';

export const GET: APIRoute = async () => {
  try {
    const targetContent = await getCollection(lang);
    const idContent = await getCollection('id');
    const thContent = await getCollection('th');
    
    const siteUrl = siteConfig.url;
    const formattedDate = new Date().toISOString();
    
    function findMatch(entry: any, collection: any[]) {
      const entryPath = entry.id.substring(entry.id.indexOf('/') + 1);
      return collection.find(e => {
        const ePath = e.id.substring(e.id.indexOf('/') + 1);
        return entryPath === ePath;
      });
    }
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- Home page -->
  <url>
    <loc>${siteUrl}/en/</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/en/" />
    <xhtml:link rel="alternate" hreflang="id" href="${siteUrl}/id/" />
    <xhtml:link rel="alternate" hreflang="th" href="${siteUrl}/th/" />
    <lastmod>${formattedDate.split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- English content -->
  ${targetContent.map(entry => {
    const fullPath = entry.slug;
    const idMatch = findMatch(entry, idContent);
    const thMatch = findMatch(entry, thContent);
    
    const lastmod = entry.data.lastUpdated ? new Date(entry.data.lastUpdated).toISOString() : formattedDate;
    
    return `<url>
    <loc>${siteUrl}/en/${fullPath}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/en/${fullPath}" />
    <xhtml:link rel="alternate" hreflang="id" href="${siteUrl}/id/${idMatch?.slug || ''}" />
    <xhtml:link rel="alternate" hreflang="th" href="${siteUrl}/th/${thMatch?.slug || ''}" />
  </url>`;
  }).join('\n  ')}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'max-age=3600'
      }
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response('Error generating sitemap', {
      status: 500
    });
  }
};
