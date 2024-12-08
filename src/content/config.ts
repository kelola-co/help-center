import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    readingTime: z.number(),
    lastUpdated: z.string(),
    category: z.string()
  })
});

export const collections = {
  'en': articles,
  'id': articles
}; 