import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    excerpt: z.string().optional(),
    readingTime: z.number().optional(),
    lastUpdated: z.string().optional(),
  })
});

export const collections = {
  'en': docs,
  'id': docs,
}; 