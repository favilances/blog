// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/fonts.css'],
  app: {
    head: {
      title: 'favilances - blog',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'description', content: 'favilances - blog' },
        { name: 'keywords', content: 'favilances, blog, teknoloji, yazılım, düşünceler' },
        { name: 'author', content: 'favilances' },
        { property: 'og:title', content: 'favilances - blog' },
        { property: 'og:description', content: 'favilances - blog' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  router: {
    options: {
      strict: false
    }
  },
  content: {
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      },
      highlight: {
        theme: 'github-dark'
      }
    }
  }
}) 