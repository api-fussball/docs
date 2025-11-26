// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  alias: {
    "micromark/lib/preprocess.js": "micromark",
    "micromark/lib/postprocess.js": "micromark",
  },

  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'nord'
      }
    },
    markdown: {
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  site: {
    url: 'https://www.api-fussball.de',
    name: 'api-fussball.de Dokumentation'
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/api-uebersicht',
        '/token',
        '/quickstart',
        '/fussballdeid',
        '/club',
        '/team',
        '/errors'
      ]
    }
  },
  sitemap: {
    strictNuxtContentPaths: true,
    autoLastmod: true,
    discoverImages: true,
    sitemapName: 'sitemap.xml',
    credits: false,
    xsl: '/__sitemap__/style.xsl'
  }
})
