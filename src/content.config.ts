import { defineCollection, z } from 'astro:content';

/**
 * Projects — real engineering work from github.com/Sephy314.
 * `type: 'content'` so each project can carry an MDX body with
 * architecture walkthroughs, diagrams, and trade-off discussions.
 */
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    category: z.string(),
    status: z.enum(['active', 'archived']).default('active'),
    featured: z.boolean().default(false),
    side: z.boolean().default(false),
    order: z.number().default(99),
    languages: z.array(z.string()).default([]),
    tech: z.array(z.string()).default([]),
    repo: z.string(),
    started: z.string(),
    updated: z.string(),
    highlights: z.array(z.string()).default([]),
  }),
});

export const collections = { projects };
