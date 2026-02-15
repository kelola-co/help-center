# Upstash Search Implementation

This document explains how search is implemented in this project and how to keep Upstash data up to date when content changes.

## Overview

Search uses Upstash Search with a server-side API route and locale filtering.

Flow:

1. User types into `SearchBar.astro`
2. Frontend calls `GET /api/search?q=...&lang=...`
3. API route queries Upstash index `help-center`
4. Results are filtered by locale (`@metadata.lang = 'en' | 'id' | 'th'`)
5. Result list is rendered in the dropdown

## Files Involved

- `src/components/SearchBar.astro`
  - Search UI and dropdown rendering
  - Debounced requests to `/api/search`
- `src/pages/api/search.ts`
  - Server endpoint that queries Upstash
  - Validates locale and applies metadata filter
- `scripts/upstash-index.ts`
  - Reads markdown content from `src/content/{en,id,th}/`
  - Builds documents and upserts to Upstash
- `.env` / runtime secrets
  - Stores Upstash credentials used by indexing and API

## Environment Variables

Required:

```bash
UPSTASH_SEARCH_REST_URL="https://<your-upstash-endpoint>"
UPSTASH_SEARCH_REST_TOKEN="<your-upstash-token>"
```

Notes:

- Do not commit `.env`
- `.env.example` is included for reference
- In production, set the same variables in your deployment platform secrets

## Index Schema

Index name: `help-center`

Each document is one article per language.

- `id`: `"{lang}/{category}/{article}"`
- `content`:
  - `title`
  - `excerpt`
  - `body` (markdown stripped + truncated)
- `metadata`:
  - `lang` (`en`, `id`, `th`)
  - `categoryId`
  - `categoryTitle`
  - `url`

Example:

```json
{
  "id": "id/stock/understanding-stock-flow",
  "content": {
    "title": "Memahami Alur Stok",
    "excerpt": "Pahami bagaimana stok bergerak...",
    "body": "Memahami Alur Stok Ikhtisar..."
  },
  "metadata": {
    "lang": "id",
    "categoryId": "stock",
    "categoryTitle": "Manajemen Stok",
    "url": "https://help.kelola.co/id/stock/understanding-stock-flow"
  }
}
```

## How To Update Search Data After Content Changes

Whenever markdown content changes (`src/content/**`) or category titles are updated (`src/data/categories.ts`), reindex.

### 1) Make sure env vars are available

If local:

```bash
cat .env
```

Must include:

- `UPSTASH_SEARCH_REST_URL`
- `UPSTASH_SEARCH_REST_TOKEN`

### 2) Run reindex command

```bash
pnpm run index:search
```

Expected output:

- `Upserted ... / ... documents`
- `Search indexing finished successfully.`

### 3) Verify search quickly

Run app:

```bash
pnpm dev
```

Then:

- Open `/en/`, `/id/`, `/th/`
- Search a known term from each locale
- Confirm relevant results appear

## Important Filtering Detail

Locale filtering in Upstash must use metadata path:

- Correct: `@metadata.lang = 'id'`
- Incorrect: `lang = 'id'`

If results exist in dashboard but UI shows empty results, check this first in `src/pages/api/search.ts`.

## Troubleshooting

### No results in UI, but data exists in Upstash

Check:

1. API route uses `@metadata.lang` filter
2. Current URL locale matches indexed language
3. Env vars are loaded in runtime (dev/prod)
4. Index name is `help-center`

### Indexing fails with content length error

The indexer already truncates content fields (`title`, `excerpt`, `body`) to fit Upstash limits. If limits change, update constants in:

- `scripts/upstash-index.ts`

### New article not searchable

Check:

1. File exists under `src/content/{lang}/{category}/{slug}.md`
2. Reindex command has been run
3. Article URL and category are valid

## Recommended Team Workflow

When publishing help content updates:

1. Update markdown content
2. Run `pnpm run index:search`
3. Smoke-test search in all locales
4. Deploy

For CI/CD, you can automate step 2 in your deploy pipeline after content changes.
