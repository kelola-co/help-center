import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { siteConfig } from '../utils/seo';

export const GET: APIRoute = async ({ site }) => {
  try {
    // Get all content from all languages
    const enContent = await getCollection('en');
    const idContent = await getCollection('id');
    const thContent = await getCollection('th');
    
    // Base URL from your config
    const siteUrl = siteConfig.url;
    
    // Format the current date for lastmod
    const formattedDate = new Date().toISOString();
    
    // Helper function to find matching content across languages
    function findMatch(entry: any, collection: any[]) {
      const entryPath = entry.id.substring(entry.id.indexOf('/') + 1);
      return collection.find(e => {
        const ePath = e.id.substring(e.id.indexOf('/') + 1);
        return entryPath === ePath;
      });
    }
    
    // Create the sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- Home pages -->
  <url>
    <loc>${siteUrl}/en/</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/en/" />
    <xhtml:link rel="alternate" hreflang="id" href="${siteUrl}/id/" />
    <xhtml:link rel="alternate" hreflang="th" href="${siteUrl}/th/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/en/" />
    <lastmod>${formattedDate.split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${siteUrl}/id/</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/en/" />
    <xhtml:link rel="alternate" hreflang="id" href="${siteUrl}/id/" />
    <xhtml:link rel="alternate" hreflang="th" href="${siteUrl}/th/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/en/" />
    <lastmod>${formattedDate.split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${siteUrl}/th/</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/en/" />
    <xhtml:link rel="alternate" hreflang="id" href="${siteUrl}/id/" />
    <xhtml:link rel="alternate" hreflang="th" href="${siteUrl}/th/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/en/" />
    <lastmod>${formattedDate.split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- English content -->
  ${enContent.map(entry => {
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
    ${idMatch ? `<xhtml:link rel="alternate" hreflang="id" href="${siteUrl}/id/${idMatch.slug}" />` : ''}
    ${thMatch ? `<xhtml:link rel="alternate" hreflang="th" href="${siteUrl}/th/${thMatch.slug}" />` : ''}
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/en/${fullPath}" />
  </url>`;
  }).join('\n  ')}
  
  <!-- Indonesian content (only non-duplicates) -->
  ${idContent.map(entry => {
    const fullPath = entry.slug;
    const enMatch = findMatch(entry, enContent);
    const thMatch = findMatch(entry, thContent);
    
    // Skip if already included as alternate in English section
    if (enMatch) return '';
    
    const lastmod = entry.data.lastUpdated ? new Date(entry.data.lastUpdated).toISOString() : formattedDate;
    
    return `<url>
    <loc>${siteUrl}/id/${fullPath}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="id" href="${siteUrl}/id/${fullPath}" />
    ${enMatch ? `<xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/en/${enMatch.slug}" />` : ''}
    ${thMatch ? `<xhtml:link rel="alternate" hreflang="th" href="${siteUrl}/th/${thMatch.slug}" />` : ''}
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/id/${fullPath}" />
  </url>`;
  }).filter(Boolean).join('\n  ')}
  
  <!-- Thai content (only non-duplicates) -->
  ${thContent.map(entry => {
    const fullPath = entry.slug;
    const enMatch = findMatch(entry, enContent);
    const idMatch = findMatch(entry, idContent);
    
    // Skip if already included as alternate in English or Indonesian section
    if (enMatch || idMatch) return '';
    
    const lastmod = entry.data.lastUpdated ? new Date(entry.data.lastUpdated).toISOString() : formattedDate;
    
    return `<url>
    <loc>${siteUrl}/th/${fullPath}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="th" href="${siteUrl}/th/${fullPath}" />
    ${enMatch ? `<xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/en/${enMatch.slug}" />` : ''}
    ${idMatch ? `<xhtml:link rel="alternate" hreflang="id" href="${siteUrl}/id/${idMatch.slug}" />` : ''}
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/th/${fullPath}" />
  </url>`;
  }).filter(Boolean).join('\n  ')}
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
