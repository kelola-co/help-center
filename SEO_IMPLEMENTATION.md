# SEO & AI-Crawl Implementation Guide

> Comprehensive documentation of SEO and AI-crawl optimizations for Kelola Help Center

## Overview

This document outlines the **advanced SEO and AI-crawl friendly implementation** for the Kelola Help Center. The implementation focuses on:

1. **Search Engine Optimization (SEO)** - Google, Bing, Yahoo
2. **AI Crawler Optimization** - ChatGPT, Claude, Perplexity, and other LLMs
3. **Semantic Web Standards** - Structured data, semantic HTML, accessibility
4. **Performance & Security** - Core Web Vitals, security headers

---

## 📊 SEO Features Implemented

### 1. Meta Tags & Basic SEO

```astro
<!-- Primary Meta Tags -->
<meta name="title" content="...">
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta name="author" content="Kelola Team">
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">

<!-- Canonical & Hreflang -->
<link rel="canonical" href="...">
<link rel="alternate" hreflang="en" href="...">
<link rel="alternate" hreflang="id" href="...">
<link rel="alternate" hreflang="x-default" href="...">
```

### 2. Open Graph & Social Media

```astro
<meta property="og:type" content="article">
<meta property="og:url" content="...">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:site_name" content="Kelola Help Center">
<meta property="og:locale" content="en_US">
<meta property="og:image" content="...">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

### 3. Twitter Cards

```astro
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:title" content="...">
<meta property="twitter:description" content="...">
<meta property="twitter:image" content="...">
<meta name="twitter:creator" content="@kelola_co">
<meta name="twitter:site" content="@kelola_co">
```

### 4. Structured Data (JSON-LD)

#### Website Schema
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Kelola Help Center",
  "url": "https://help.kelola.co",
  "description": "...",
  "inLanguage": [...],
  "publisher": {...},
  "potentialAction": {
    "@type": "SearchAction",
    "target": {"@type": "EntryPoint", "urlTemplate": "..."}
  }
}
```

#### Article Schema (TechArticle)
```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "...",
  "description": "...",
  "author": {"@type": "Organization", ...},
  "publisher": {"@type": "Organization", ...},
  "datePublished": "...",
  "dateModified": "...",
  "mainEntityOfPage": {...},
  "inLanguage": "en-US",
  "articleSection": "...",
  "keywords": "..."
}
```

#### BreadcrumbList Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://help.kelola.co/en/"
    }
  ]
}
```

#### FAQPage Schema (when applicable)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer text"
      }
    }
  ]
}
```

---

## 🤖 AI-Crawl Optimization

### 1. LLMS.txt Files

Two files specifically designed for AI crawlers:

#### `/llms.txt` - Documentation Index
- Concise overview of all documentation
- Quick links to major sections
- Format optimized for AI parsing

#### `/llms-full.txt` - Complete Documentation
- All help articles in plain text
- Organized by language and category
- Generated automatically from content files

### 2. AI Meta Tags

```astro
<!-- AI/LLM Discovery -->
<link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-Friendly Documentation Index">
<link rel="alternate" type="text/plain" href="/llms-full.txt" title="Complete LLM Documentation">
<meta name="ai-content-type" content="documentation">
<meta name="ai-purpose" content="help-center, customer-support, product-documentation">
<meta name="ai-target-audience" content="business-owners, sme-operators, inventory-managers">

<!-- Content Attribution for AI -->
<meta name="content-source" content="kelola-help-center">
<meta name="content-version" content="2025.02">
<meta name="content-last-verified" content="2026-02-15T00:00:00Z">
```

### 3. Content Markers

```astro
<!-- AI-friendly content markers in articles -->
<article data-content-type="help-article" data-category="stock" data-language="en">
  <div data-llm-content="article-body">
    <!-- Main content here -->
  </div>
</article>
```

### 4. Semantic HTML5

- `<article>` for main content
- `<header>` for article headers
- `<nav>` for navigation
- `<aside>` for sidebars
- `<main>` for primary content
- `<footer>` for page footers
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels for accessibility

---

## 🔧 Technical SEO

### 1. Sitemap.xml

Dynamic sitemap generation with:
- All pages in all languages
- Last modified dates
- Priority and change frequency
- Hreflang annotations

### 2. Robots.txt

```
User-agent: *
Allow: /

Sitemap: https://help.kelola.co/sitemap.xml
```

### 3. Security Headers

```
Content-Security-Policy: default-src 'self'; ...
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

### 4. PWA Support

- `manifest.json` for app-like experience
- Service worker ready
- App shortcuts
- Related applications (App Store, Play Store)

---

## 🌐 Multilingual SEO

### Language Support

| Language | Code | Locale | URL Pattern |
|----------|------|--------|-------------|
| English | en | en-US | `/en/...` |
| Indonesian | id | id-ID | `/id/...` |

### Implementation

1. **Hreflang Tags**: Every page includes alternate language links
2. **Language-Specific URLs**: `/en/article` and `/id/artikel`
3. **Translated Content**: Full content translation in Markdown files
4. **Localized Keywords**: Language-specific keyword optimization

---

## 📈 Performance Optimization

### Core Web Vitals

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Optimizations Applied

1. **Font Loading**: Preconnect + preload critical fonts
2. **Image Optimization**: WebP format, proper sizing
3. **Code Splitting**: Component-level lazy loading
4. **Caching Strategy**: Static assets cached for 1 year
5. **Minification**: CSS, JS, HTML minified in production

---

## 📋 SEO Checklist by Page Type

### Homepage (`/[lang]/`)

- [x] Unique title and description per language
- [x] WebSite schema
- [x] Organization schema
- [x] SearchAction schema (site search)
- [x] Canonical URL
- [x] Hreflang tags

### Category Page (`/[lang]/[category]/`)

- [x] Category-specific title and description
- [x] Breadcrumb structured data
- [x] WebPage schema
- [x] Article list with structured markup
- [x] Canonical URL
- [x] Hreflang tags

### Article Page (`/[lang]/[category]/[article]`)

- [x] Article-specific title and description
- [x] TechArticle schema
- [x] Breadcrumb structured data
- [x] Author and publisher markup
- [x] Published/modified dates
- [x] Reading time
- [x] Related articles
- [x] FAQ schema (when applicable)
- [x] Table of contents
- [x] Canonical URL
- [x] Hreflang tags
- [x] Content markers for AI

---

## 🔍 Testing & Validation

### Tools to Use

1. **Google Search Console**
   - Submit sitemap
   - Monitor indexing status
   - Check for errors

2. **Google Rich Results Test**
   - Validate structured data
   - Preview search appearance

3. **Lighthouse SEO Audit**
   - Run in Chrome DevTools
   - Target score: 95+

4. **Schema.org Validator**
   - https://validator.schema.org/

5. **AI Crawler Testing**
   - Check `llms.txt` accessibility
   - Verify `llms-full.txt` content

---

## 📝 Content Guidelines for SEO

### Title Optimization
- Length: 50-60 characters
- Include primary keyword
- Brand name at end (for articles)

Example: `How to Record Stock In | Stock Management - Kelola Help`

### Description Optimization
- Length: 150-160 characters
- Include primary and secondary keywords
- Call-to-action when appropriate
- Unique for every page

### URL Structure
- Lowercase with hyphens
- Include keywords
- Avoid unnecessary parameters
- Pattern: `/{lang}/{category}/{article}`

Example: `/en/stock/record-stock-in`

---

## 🔄 Maintenance

### Regular Tasks

1. **Weekly**: Check Google Search Console for errors
2. **Monthly**: Review and update keywords based on performance
3. **Quarterly**: Audit structured data validity
4. **As needed**: Update `llms-full.txt` when content changes

### Content Updates

When adding new content:
1. Add proper frontmatter with title, excerpt, category
2. Include keywords in content naturally
3. Use proper heading hierarchy
4. Add internal links to related articles
5. Update `lastUpdated` date

---

## 📚 Resources

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Schema.org Documentation](https://schema.org/)
- [Astro SEO Best Practices](https://docs.astro.build/en/guides/markdown-content/)
- [LLMS.txt Specification](https://llmstxt.org/)

---

*Last updated: February 2025*
*Maintained by: Kelola Engineering Team*
