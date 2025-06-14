import type { Language } from './language';

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogType?: string;
}

export interface MultilingualSEO {
  en: SEOData;
  id: SEOData;
}

// Base site configuration
export const siteConfig = {
  name: "Kelola Help Center",
  url: "https://help.kelola.co",
  author: "Kelola Team",
  twitterHandle: "@kelola_co"
};

// Homepage SEO data
export const homepageSEO: MultilingualSEO = {
  en: {
    title: "Kelola.co Help Center",
    description: "Get help with Kelola inventory & sales app. Find comprehensive guides for invoicing, inventory management, POS system, customer management, and business reports for small businesses in Indonesia.",
    keywords: "Kelola help, inventory & sales app, small business software, invoice app, inventory management, POS system, customer management, business reports, Indonesia business app, small business tools",
    ogType: "website"
  },
  id: {
    title: "Pusat Bantuan Kelola.co",
    description: "Dapatkan bantuan untuk aplikasi Kelola. Temukan panduan lengkap untuk invoice, manajemen inventori, sistem POS, manajemen pelanggan, dan laporan bisnis untuk usaha kecil di Indonesia.",
    keywords: "bantuan Kelola, aplikasi Kelola, software usaha kecil, aplikasi invoice, manajemen inventori, sistem POS, manajemen pelanggan, laporan bisnis, aplikasi bisnis Indonesia, tools usaha kecil",
    ogType: "website"
  }
};

// Utility function to generate alternate URLs
export function generateAlternateUrls(path: string = ""): { [key: string]: string } {
  const basePath = path.startsWith('/') ? path.slice(1) : path;
  return {
    en: `${siteConfig.url}/en/${basePath}`,
    id: `${siteConfig.url}/id/${basePath}`
  };
}

// Utility function to get current URL
export function getCurrentUrl(lang: Language, path: string = ""): string {
  const basePath = path.startsWith('/') ? path.slice(1) : path;
  return `${siteConfig.url}/${lang}/${basePath}`;
}

// Utility function to get SEO data for a specific language
export function getSEOData(seoConfig: MultilingualSEO, lang: Language): SEOData {
  return seoConfig[lang];
} 