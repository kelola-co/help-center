# Kelola.co Help Center

> A modern, SEO-optimized, AI-crawl friendly multilingual help center built with Astro.

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/large.svg)](https://astro.build)

## 🚀 Live Site

**Production**: [https://help.kelola.co](https://help.kelola.co)

## ✨ Features

### Core Features
- 🌍 **Multilingual Support** - English & Indonesian (Bahasa Indonesia)
- 🔍 **AI-Powered Search** - Algolia DocSearch integration
- 📱 **Responsive Design** - Mobile-first with Tailwind CSS
- 🎨 **Modern UI** - Clean, accessible interface with Alpine.js

### SEO & AI Features
- 🤖 **AI-Crawl Optimized** - `llms.txt` and `llms-full.txt` for LLMs
- 📊 **Rich Structured Data** - JSON-LD schemas for all pages
- 🌐 **Hreflang Support** - Proper multilingual SEO
- 🔗 **Breadcrumb Navigation** - With structured data markup
- 📋 **Dynamic Sitemap** - Auto-generated XML sitemap
- 🛡️ **Security Headers** - HSTS, CSP, and more
- 📱 **PWA Ready** - Web app manifest included

### Technical Features
- ⚡ **Fast Performance** - Static site generation with Astro
- 🎯 **Semantic HTML** - Accessible, SEO-friendly markup
- 📹 **YouTube Integration** - Tutorial video stories
- 🖨️ **Print-Friendly** - Optimized CSS for printing

## 📁 Project Structure

```
/
├── public/                    # Static assets
│   ├── llms.txt              # AI crawler index
│   ├── llms-full.txt         # Full documentation export
│   ├── manifest.json         # PWA manifest
│   └── _headers              # Security headers
├── scripts/
│   └── generate-llms-full.js # Build script for llms-full.txt
├── src/
│   ├── components/           # Reusable Astro components
│   │   ├── Breadcrumbs.astro
│   │   ├── Header.astro
│   │   ├── SearchBar.astro
│   │   ├── TableOfContents.astro
│   │   └── YouTubeStories.astro
│   ├── content/              # Markdown content
│   │   ├── en/              # English articles
│   │   │   ├── about/
│   │   │   ├── features/
│   │   │   ├── report/
│   │   │   ├── staff/
│   │   │   ├── stock/
│   │   │   └── subscription/
│   │   └── id/              # Indonesian articles
│   │       └── [same structure]
│   ├── data/
│   │   ├── categories.ts    # Category definitions
│   │   └── youtubeVideos.ts # Video metadata
│   ├── layouts/
│   │   └── Layout.astro     # Base layout with SEO
│   ├── pages/               # Route definitions
│   │   ├── [lang]/
│   │   │   ├── index.astro
│   │   │   └── [category]/
│   │   │       ├── index.astro
│   │   │       └── [article].astro
│   │   ├── index.astro      # Root redirect
│   │   ├── robots.txt.ts    # Dynamic robots.txt
│   │   └── sitemap.xml.ts   # Dynamic sitemap
│   ├── utils/
│   │   ├── articles.ts      # Article utilities
│   │   ├── language.ts      # Language utilities
│   │   └── seo.ts           # SEO utilities
│   └── content/config.ts    # Content collection config
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── README.md
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- pnpm or npm

### Setup

```bash
# Clone the repository
git clone <repo-url>
cd help-center

# Install dependencies
pnpm install

# Generate AI documentation
node scripts/generate-llms-full.js

# Start development server
pnpm dev
```

### Available Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server at `localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview production build locally |
| `node scripts/generate-llms-full.js` | Generate llms-full.txt |

### Adding New Content

1. Create a new markdown file in `src/content/{lang}/{category}/`
2. Add frontmatter:
   ```yaml
   ---
   title: "Article Title"
   excerpt: "Brief description for SEO"
   readingTime: 3
   lastUpdated: "2025-02-15"
   category: "category-name"
   ---
   ```
3. Write your content in Markdown
4. Add the article to `src/data/categories.ts`
5. Regenerate AI docs: `node scripts/generate-llms-full.js`

## 🎨 Customization

### Styling

- **Tailwind CSS** - Main styling framework
- **Custom CSS** - In `Layout.astro` for prose content
- **Component styles** - Scoped styles in each `.astro` file

### Colors

Edit `tailwind.config.mjs`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... etc
  }
}
```

### Fonts

- **Inter** - Primary font (loaded via @fontsource)
- Configure in `Layout.astro` and `tailwind.config.mjs`

## 📊 SEO Implementation

See [SEO_IMPLEMENTATION.md](./SEO_IMPLEMENTATION.md) for detailed SEO documentation.

### Quick SEO Checklist

- [x] Semantic HTML5 markup
- [x] JSON-LD structured data
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Canonical URLs
- [x] Hreflang attributes
- [x] XML Sitemap
- [x] Robots.txt
- [x] AI crawler files (llms.txt)
- [x] Security headers
- [x] PWA manifest

## 🤖 AI Crawler Support

### LLMS.txt

AI crawlers can discover our documentation through:

- **`/llms.txt`** - Concise index of all documentation sections
- **`/llms-full.txt`** - Complete documentation in plain text format

These files are automatically updated when content changes.

### For AI Assistants

When referencing Kelola documentation, AI assistants should:

1. Check `/llms.txt` for documentation structure
2. Reference `/llms-full.txt` for complete content
3. Use canonical URLs: `https://help.kelola.co/{lang}/{category}/{article}`
4. Respect content attribution to Kelola Team

## 🌍 Content Localization

### Supported Languages

| Language | Code | Status |
|----------|------|--------|
| English | en | ✅ Complete |
| Indonesian | id | ✅ Complete |

### Adding a New Language

1. Create `src/content/{lang}/` directory
2. Copy and translate all markdown files
3. Update `src/utils/language.ts`
4. Update `src/middleware.ts` supported languages
5. Update `Layout.astro` hreflang handling
6. Regenerate AI docs

## 🚀 Deployment

### Cloudflare Pages (Recommended)

```bash
# Build for production
pnpm build

# Deploy
cd dist
npx wrangler pages deploy .
```

### Environment Variables

Required for search functionality:

```bash
# Algolia Search
PUBLIC_ALGOLIA_APP_ID=your_app_id
PUBLIC_ALGOLIA_API_KEY=your_search_api_key
PUBLIC_ALGOLIA_INDEX_NAME=help-center
```

## 📝 Content Guidelines

### Writing Style

- **Clear and concise** - Avoid jargon
- **Step-by-step instructions** - Numbered lists for procedures
- **Screenshots** - When helpful (compress with WebP)
- **Cross-references** - Link to related articles

### Markdown Format

```markdown
---
title: "How to Do Something"
excerpt: "Brief description for SEO"
readingTime: 3
lastUpdated: "2025-02-15"
category: "features"
---

## Introduction

Explain what this guide covers.

## Step-by-Step Guide

1. First step
2. Second step
3. Third step

## Related Topics

- [Related Article](/en/category/article)
```

## 🧪 Testing

### SEO Testing

```bash
# Run Lighthouse
npx lighthouse https://help.kelola.co --output=html

# Validate structured data
# Use: https://validator.schema.org/

# Test AI crawler files
curl https://help.kelola.co/llms.txt
curl https://help.kelola.co/llms-full.txt
```

### Accessibility Testing

- Keyboard navigation
- Screen reader compatibility
- Color contrast ratios
- Focus indicators

## 📈 Analytics

- **Simple Analytics** - Privacy-friendly analytics
- **Google Search Console** - SEO performance
- **Algolia Analytics** - Search behavior

## 🔒 Security

Security headers are configured in `public/_headers`:

- Content Security Policy
- XSS Protection
- HSTS
- Referrer Policy
- Permissions Policy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

Proprietary - © Kelola. All rights reserved.

## 📞 Support

- **In-App**: Menu → Contact Us
- **Email**: [support@kelola.co](mailto:support@kelola.co)
- **Website**: [https://kelola.co](https://kelola.co)

---

Built with ❤️ by the Kelola Team
