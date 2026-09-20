import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    filename: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    link: z.string(),
    linkLabel: z.string(),
    demo: z.string().optional(),
    repo: z.string().optional(),
    badge: z.string().nullish(),
    image: image().optional(),
    imageFit: z.enum(['cover', 'contain']).default('cover'),
    imageBg: z.string().optional(),
    imagePosition: z.string().optional(),
    order: z.number(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    readingTime: z.string(),
    date: z.coerce.date(),
    link: z.string(),
    featured: z.boolean(),
    order: z.number(),
  }),
});

export const collections = { projects, articles };
