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

  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-simple-sitemap'],
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
    },
    markdown: {
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  site: {
    url: 'https://www.api-fussball.de',
  }
})
