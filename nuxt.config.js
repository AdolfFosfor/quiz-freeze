export default {
  head: {
    title: 'Quiz Freeze',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/styles/main.scss'],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/pwa'],

  modules: [],

  build: {},

  pwa: {
    icon: {
      // source: 'static/pwa.png',
    },
    manifest: {
      name: 'Quiz Freeze',
      lang: 'ru',
      short_name: 'quiz-freeze',
      theme_color: '#0062bd',
    },
    meta: {
      mobileAppIOS: true,
    },
  },

  server: {
    host: '0.0.0.0',
    port: 3000,
  },
};
