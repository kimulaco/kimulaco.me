export default {
  mode: 'universal',
  head: {
    title: 'kimulaco.me',
    htmlAttrs: {
      lang: 'en',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'kimulaco profile site.'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'kimulaco.me' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'kimulaco profile site.'
      },
      { hid: 'og:url', property: 'og:url', content: 'https://kimulaco.me' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://kimulaco.me/img/ogp.png'
      },
      { hid: 'fb:app_id', property: 'fb:app_id', content: '2126226647500830' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }]
  },
  loading: false,
  css: ['normalize.css', '@/assets/scss/base.scss'],
  plugins: [],
  devModules: ['@nuxtjs/eslint-module'],
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    '@nuxtjs/google-analytics'
  ],
  styleResources: {
    scss: ['@/assets/scss/_variable.scss', '@/assets/scss/_mixin.scss']
  },
  webfontloader: {
    google: {
      families: ['Coda:400']
    }
  },
  googleAnalytics: {
    id: 'UA-145782278-1'
  },
  build: {
    extend(config, ctx) {}
  }
}
