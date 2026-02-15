import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { siteConfig } from '../../utils/seo';

export const GET: APIRoute = async ({ params }) => {
  try {
    const { lang } = params;
    const locales = ['en', 'id', 'th'];
    
    if (!lang || !locales.includes(lang)) {
      return new Response('Not Found', { status: 404 });
    }
    
    const targetContent = await getCollection(lang);
    const otherLocales = locales.filter(l => l !== lang);
    const otherContent: Record<string, any[]> = {};
    
    for (const l of otherLocales) {
      otherContent[l] = await getCollection(l);
    }
    
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
    <loc>${siteUrl}/${lang}/</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/en/" />
    <xhtml:link rel="alternate" hreflang="id" href="${siteUrl}/id/" />
    <xhtml:link rel="alternate" hreflang="th" href="${siteUrl}/th/" />
    <lastmod>${formattedDate.split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- ${lang} content -->
  ${targetContent.map(entry => {
    const fullPath = entry.slug;
    const enMatch = lang === 'en' ? entry : findMatch(entry, otherContent['en']);
    const idMatch = lang === 'id' ? entry : findMatch(entry, otherContent['id']);
    const thMatch = lang === 'th' ? entry : findMatch(entry, otherContent['th']);
    
    const lastmod = entry.data.lastUpdated ? new Date(entry.data.lastUpdated).toISOString() : formattedDate;
    
    return `<url>
    <loc>${siteUrl}/${lang}/${fullPath}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/en/${enMatch?.slug || ''}" />
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
