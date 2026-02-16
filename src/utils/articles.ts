import type { CollectionEntry } from 'astro:content';
import { getArticleRankInLearningPath } from '../data/learningPath';

type DocsCollection = 'en' | 'id' | 'th';

function getArticleIdFromSlug(slug: string): string {
  return slug.split('/')[1] ?? '';
}

export function getRelatedArticles(
  entries: CollectionEntry<DocsCollection>[],
  category: string,
  currentArticle: string,
  limit: number = 3
) {
  const relatedEntries = entries.filter(entry => {
      const [entryCategory, entrySlug] = entry.slug.split('/');
      return entryCategory === category && entrySlug !== currentArticle;
    });

  const currentRank = getArticleRankInLearningPath(category, currentArticle);

  return relatedEntries
    .sort((a, b) => {
      const aArticleId = getArticleIdFromSlug(a.slug);
      const bArticleId = getArticleIdFromSlug(b.slug);
      const aRank = getArticleRankInLearningPath(category, aArticleId);
      const bRank = getArticleRankInLearningPath(category, bArticleId);

      if (currentRank !== undefined) {
        if (aRank !== undefined && bRank !== undefined) {
          const aGroup = aRank > currentRank ? 0 : 1;
          const bGroup = bRank > currentRank ? 0 : 1;

          if (aGroup !== bGroup) return aGroup - bGroup;
          if (aGroup === 0) return aRank - bRank;
          return bRank - aRank;
        }

        if (aRank !== undefined) return -1;
        if (bRank !== undefined) return 1;
        return a.data.title.localeCompare(b.data.title);
      }

      if (aRank !== undefined && bRank !== undefined) return aRank - bRank;
      if (aRank !== undefined) return -1;
      if (bRank !== undefined) return 1;

      return a.data.title.localeCompare(b.data.title);
    })
    .slice(0, limit);
} 