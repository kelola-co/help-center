import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { siteConfig } from '../utils/seo';

export const GET: APIRoute = async ({ site }) => {
  try {
    // Get all content from both languages
    const enContent = await getCollection('en');
    const idContent = await getCollection('id');
    
    // Base URL from your config
    const siteUrl = siteConfig.url;
    
    // Format the current date for lastmod
    const formattedDate = new Date().toISOString();
    
    // Create the sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- Home page -->
  <url>
    <loc>${siteUrl}/en/</loc>
    <xhtml:link rel="alternate" hreflang="id" href="${siteUrl}/id/" />
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/en/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/en/" />
    <lastmod>${formattedDate.split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${siteUrl}/id/</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/en/" />
    <xhtml:link rel="alternate" hreflang="id" href="${siteUrl}/id/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/en/" />
    <lastmod>${formattedDate.split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- English content -->
  ${enContent.map(entry => {
    // Get the full slug path from the entry ID
    // Format: 'en/category/subcategory/filename.md'
    const fullPath = entry.slug;
    
    // Get the corresponding ID content if it exists
    const idMatch = idContent.find(idEntry => {
      // Compare everything after the language code
      const enPathAfterLang = entry.id.substring(entry.id.indexOf('/') + 1);
      const idPathAfterLang = idEntry.id.substring(idEntry.id.indexOf('/') + 1);
      return enPathAfterLang === idPathAfterLang;
    });
    
    const lastmod = entry.data.lastUpdated ? new Date(entry.data.lastUpdated).toISOString() : formattedDate;
    
    return `<url>
    <loc>${siteUrl}/en/${fullPath}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/en/${fullPath}" />
    ${idMatch ? `<xhtml:link rel="alternate" hreflang="id" href="${siteUrl}/id/${idMatch.slug}" />` : ''}
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/en/${fullPath}" />
  </url>`;
  }).join('\n  ')}
  
  <!-- Indonesian content -->
  ${idContent.map(entry => {
    // Get the full slug path from the entry ID
    // Format: 'id/category/subcategory/filename.md'
    const fullPath = entry.slug;
    
    // Get the corresponding EN content if it exists
    const enMatch = enContent.find(enEntry => {
      // Compare everything after the language code
      const idPathAfterLang = entry.id.substring(entry.id.indexOf('/') + 1);
      const enPathAfterLang = enEntry.id.substring(enEntry.id.indexOf('/') + 1);
      return idPathAfterLang === enPathAfterLang;
    });
    
    const lastmod = entry.data.lastUpdated ? new Date(entry.data.lastUpdated).toISOString() : formattedDate;
    
    // Skip if we already included this as an alternate in the English section
    if (enMatch) return '';
    
    return `<url>
    <loc>${siteUrl}/id/${fullPath}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="id" href="${siteUrl}/id/${fullPath}" />
    ${enMatch ? `<xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/en/${enMatch.slug}" />` : ''}
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/${enMatch ? 'en' : 'id'}/${enMatch ? enMatch.slug : fullPath}" />
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