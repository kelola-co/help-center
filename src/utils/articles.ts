import type { CollectionEntry } from 'astro:content';

export function getRelatedArticles(
  entries: CollectionEntry<'en' | 'id'>[],
  category: string,
  currentArticle: string,
  limit: number = 3
) {
  return entries
    .filter(entry => {
      const [entryCategory, entrySlug] = entry.slug.split('/');
      return entryCategory === category && entrySlug !== currentArticle;
    })
    .slice(0, limit);
} 