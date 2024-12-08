import { defineMiddleware } from 'astro:middleware';

const SUPPORTED_LANGS = {
  id: 'id',
  en: 'en',
  // Add more languages here
};

export const onRequest = defineMiddleware(async (context, next) => {
  // Skip redirect for assets and API routes
  if (
    context.url.pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js|json)$/) ||
    context.url.pathname.startsWith('/api/')
  ) {
    return next();
  }

  // Skip if already on a language route
  if (Object.values(SUPPORTED_LANGS).some(lang => context.url.pathname.startsWith(`/${lang}/`))) {
    return next();
  }

  // Get browser language
  const browserLang = context.request.headers.get('accept-language')?.split(',')[0].split('-')[0];
  console.log('Browser Language:', browserLang);
  console.log('Supported Languages:', SUPPORTED_LANGS);
  console.log('Has language?', browserLang in SUPPORTED_LANGS);
  
  const targetLang = SUPPORTED_LANGS[browserLang as keyof typeof SUPPORTED_LANGS] || 'en';
  console.log('Target Language:', targetLang);

  return context.redirect(`/${targetLang}${context.url.pathname}`);
}); 