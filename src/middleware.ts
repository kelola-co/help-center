import { defineMiddleware } from 'astro:middleware';

const SUPPORTED_LANGS = {
  id: 'id',
  en: 'en',
  // Add more languages here
};

// List of paths that should be excluded from language redirection
const EXCLUDED_PATHS = [
  '/sitemap.xml',
  '/robots.txt'
];

export const onRequest = defineMiddleware(async (context, next) => {
  // Skip redirect for assets, API routes, and excluded paths
  if (
    context.url.pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js|json)$/) ||
    context.url.pathname.startsWith('/api/') ||
    EXCLUDED_PATHS.includes(context.url.pathname)
  ) {
    return next();
  }

  // Skip if already on a language route
  if (Object.values(SUPPORTED_LANGS).some(lang => context.url.pathname.startsWith(`/${lang}/`))) {
    return next();
  }

  // Get browser language
  const browserLang = context.request.headers.get('accept-language')?.split(',')[0].split('-')[0];
  
  const targetLang = SUPPORTED_LANGS[browserLang as keyof typeof SUPPORTED_LANGS] || 'en';

  return context.redirect(`/${targetLang}${context.url.pathname}`);
}); 