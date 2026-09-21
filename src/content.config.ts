import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Cok dilli metin alani: { tr: "...", en: "..." }.
 *
 * Ayri tr/en dosyalari yerine tek dosyada cift alan tutuluyor; gorsel, link,
 * stack ve order gibi dilden bagimsiz alanlar boylece tek yerde kalir ve iki
 * dosyanin birbirinden kaymasi imkansiz olur. Sayfada pick(alan, lang) ile
 * o anki dilin degeri secilir.
 */
const localized = <T extends z.ZodTypeAny>(inner: T) =>
  z.object({ tr: inner, en: inner });

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: localized(z.string()),
    filename: z.string(),
    description: localized(z.string()),
    stack: z.array(z.string()),
    link: z.string(),
    linkLabel: localized(z.string()),
    demo: z.string().optional(),
    repo: z.string().optional(),
    badge: localized(z.string()).nullish(),
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
    title: localized(z.string()),
    excerpt: localized(z.string()),
    readingTime: localized(z.string()),
    date: z.coerce.date(),
    link: z.string(),
    featured: z.boolean(),
    order: z.number(),
  }),
});

export const collections = { projects, articles };
