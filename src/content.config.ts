import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    titleEmphasis: z.string().optional(),
    kicker: z.string(),
    description: z.string(),
    excerpt: z.string().optional(),
    date: z.coerce.date(),
    readTime: z.string().optional(),
    image: z.string(),
    imageAlt: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
