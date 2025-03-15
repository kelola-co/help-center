import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: https://help.kelola.co/sitemap.xml
`;

  return new Response(robotsTxt.trim(), {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'max-age=3600'
    }
  });
}; 