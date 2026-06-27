import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { defineSitemapSchema } from '@nuxtjs/sitemap/content'

const createBaseSchema = () => z.object({
  title: z.string(),
  description: z.string()
})

const createImageSchema = () => z.object({
  src: z.string().editor({ input: 'media' }),
  alt: z.string()
})

export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: 'page',
      source: 'index.yml',
      schema: z.object({
        hero: z.object({
          images: z.array(createImageSchema())
        }),
        about: createBaseSchema(),
        experience: createBaseSchema().extend({
          items: z.array(z.object({
            date: z.date(),
            position: z.string(),
            company: z.object({
              name: z.string(),
              url: z.string(),
              logo: z.string().editor({ input: 'icon' }),
              color: z.string()
            })
          }))
        }),
        sitemap: defineSitemapSchema()
      })
    }),
    projlist: defineCollection({
      type: 'page',
      source: [
        { include: 'engineering.yml' },
        { include: 'arts.yml' }
      ],
      schema: z.object({
        title: z.string(),
        description: z.string(),
        sitemap: defineSitemapSchema()
      })
    }),
    about: defineCollection({
      type: 'page',
      source: 'about.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        sitemap: defineSitemapSchema()
      })
    }),
    engmeta: defineCollection({
      type: 'data',
      source: 'engineering/*.yml',
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        image: z.string().nonempty().editor({ input: 'media' }),
        url: z.string().nonempty(),
        tags: z.array(z.string()),
        date: z.date()
      })
    }),
    artmeta: defineCollection({
      type: 'data',
      source: 'arts/*.yml',
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        image: z.string().nonempty().editor({ input: 'media' }),
        url: z.string().nonempty(),
        tags: z.array(z.string()),
        date: z.date()
      })
    }),
    engpage: defineCollection({
      type: 'page',
      source: 'engineering/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        sitemap: defineSitemapSchema()
      })
    }),
    artpage: defineCollection({
      type: 'page',
      source: 'arts/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        sitemap: defineSitemapSchema()
      })
    })
  }
})
