// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'motion-v/nuxt',
    'nuxt-studio',
    'nuxt-security'
  ],

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://awallach-portfolio.netlify.app',
    name: 'Alex Wallach\'s Portfolio',
    description: 'A website to showcase Alex\'s projects.',
    defaultLocale: 'en',
    trailingSlash: false
  },

  content: {
    experimental: {
      sqliteConnector: 'native'
    }
  },

  runtimeConfig: {
    studioGithubClientId: process.env.STUDIO_GITHUB_CLIENT_ID,
    studioGithubClientSecret: process.env.STUDIO_GITHUB_CLIENT_SECRET
  },

  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      routes: [],
      crawlLinks: false
    },
    compressPublicAssets: true
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  image: {
    format: ['avif', 'webp', 'jpg'],
    screens: {
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536
    }
  },

  ogImage: {
    zeroRuntime: false,
    security: {
      secret: process.env.NUXT_OG_IMAGE_SECRET
    }
  },

  robots: {
    groups: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  },
  schemaOrg: false,

  security: {
    strict: false,
    headers: {
      crossOriginResourcePolicy: 'same-origin',
      crossOriginOpenerPolicy: false,
      crossOriginEmbedderPolicy: 'unsafe-none',
      contentSecurityPolicy: {
        'base-uri': ['\'none\''],
        'font-src': ['\'self\'', 'https:', 'data:'],
        'form-action': ['\'self\''],
        'frame-src': ['\'self\'', 'https: www.youtube.com'],
        'frame-ancestors': ['\'self\''],
        'img-src': ['\'self\'', 'data:', 'https: avatars.githubusercontent.com'],
        'object-src': ['\'none\''],
        'style-src': ['\'self\'', 'https:', '\'unsafe-inline\''],
        'script-src': ['\'unsafe-eval\'', '\'strict-dynamic\'', '\'nonce-{{nonce}}\''],
        'script-src-attr': false,
        'script-src-elem': false,
        'upgrade-insecure-requests': true
      },
      originAgentCluster: false,
      referrerPolicy: 'strict-origin-when-cross-origin',
      strictTransportSecurity: {
        maxAge: 15552000,
        includeSubdomains: true
      },
      xContentTypeOptions: 'nosniff',
      xDNSPrefetchControl: 'off',
      xDownloadOptions: 'noopen',
      xFrameOptions: 'DENY',
      xPermittedCrossDomainPolicies: 'none',
      xXSSProtection: '1; mode=block',
      permissionsPolicy: {
        'camera': [],
        'display-capture': [],
        'fullscreen': [],
        'geolocation': [],
        'microphone': []
      }
    },
    requestSizeLimiter: {
      maxRequestSizeInBytes: 2000000,
      maxUploadFileRequestInBytes: 8000000,
      throwError: true
    },
    rateLimiter: false,
    xssValidator: {
      throwError: true
    },
    corsHandler: {
      origin: '*',
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      preflight: {
        statusCode: 204
      }
    },
    allowedMethodsRestricter: {
      methods: '*',
      throwError: true
    },
    hidePoweredBy: true,
    basicAuth: false,
    enabled: true,
    csrf: false,
    nonce: true,
    removeLoggers: true,
    ssg: {
      meta: true,
      hashScripts: true,
      hashStyles: false,
      nitroHeaders: true,
      exportToPresets: true
    },
    sri: true,
    contentSecurityPolicyReportOnly: false
  },

  studio: {
    route: '/admin',
    repository: {
      provider: 'github',
      owner: 'awallach4',
      repo: 'portfolio-site',
      branch: 'master'
    }
  }
})
