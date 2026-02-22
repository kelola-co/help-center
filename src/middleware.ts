import { defineMiddleware } from 'astro:middleware';

const SUPPORTED_LANGS = {
  id: 'id',
  en: 'en',
  th: 'th'
};

const LEGACY_REDIRECTS: Record<string, string> = {
  '/features/print-invoice': '/sales/print-invoice',
  '/features/barcode-scanner': '/barcode/scanning-barcodes',
  '/stock/difference-stock-in-out-audit': '/stock/understanding-stock-flow'
};

// List of paths that should be excluded from language redirection
const EXCLUDED_PATHS = [
  '/404',
  '/404/',
  '/sitemap.xml',
  '/sitemap-en.xml',
  '/sitemap-id.xml',
  '/sitemap-th.xml',
  '/robots.txt'
];

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname.replace(/\/+$/, '') || '/';
  const pathSegments = pathname.split('/').filter(Boolean);
  const firstSegment = pathSegments[0];
  const hasLangPrefix = Object.values(SUPPORTED_LANGS).includes(firstSegment as keyof typeof SUPPORTED_LANGS);
  const langFromPath = hasLangPrefix ? firstSegment : undefined;
  const unprefixedPath = hasLangPrefix ? `/${pathSegments.slice(1).join('/')}` : pathname;

  const legacyTarget = LEGACY_REDIRECTS[unprefixedPath];
  if (legacyTarget) {
    const browserLang = context.request.headers.get('accept-language')?.split(',')[0].split('-')[0];
    const targetLang = langFromPath || SUPPORTED_LANGS[browserLang as keyof typeof SUPPORTED_LANGS] || 'en';
    return context.redirect(`/${targetLang}${legacyTarget}`, 301);
  }

  // Skip redirect for assets, API routes, and excluded paths
  if (
    pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js|json)$/) ||
    pathname.startsWith('/api/') ||
    EXCLUDED_PATHS.includes(pathname)
  ) {
    return next();
  }

  // Skip if already on a language route
  if (Object.values(SUPPORTED_LANGS).some(lang => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`))) {
    return next();
  }

  // Get browser language
  const browserLang = context.request.headers.get('accept-language')?.split(',')[0].split('-')[0];
  
  const targetLang = SUPPORTED_LANGS[browserLang as keyof typeof SUPPORTED_LANGS] || 'en';

  return context.redirect(`/${targetLang}${pathname}`);
}); 