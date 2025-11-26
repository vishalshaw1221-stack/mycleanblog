import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    heroImage: z.string().optional(),
    math: z.boolean().optional().default(false),
    order: z.number().optional(),  // MAKE SURE THIS IS HERE
  }),
});

export const collections = { blog };