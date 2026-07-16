import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    filename: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    linkText: z.string(),
    linkUrl: z.string(),
    badge: z.string().optional(),
    order: z.number(),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    readingTime: z.number(),
    url: z.string(),
    order: z.number(),
  }),
});

export const collections = { projects, writing };
