export default {
  ssr: false,
  head: {
    title: 'Quiz Freeze 🧩',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,500;0,600;0,700;0,800;0,900;1,200;1,300&display=swap',
      },
    ],
  },

  css: ['@/styles/main.scss'],

  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },

  middleware: ['account'],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/pwa'],

  modules: [],

  build: {},

  pwa: {
    icon: {
      source: 'static/pwa.png',
    },
    manifest: {
      name: 'Quiz Freeze',
      lang: 'ru',
      short_name: 'Quiz Freeze',
      theme_color: '#1e1e20',
    },
    meta: {
      mobileAppIOS: true,
    },
  },

  env: {
    backend: 'https://api.quiz-freeze.site/api',
  },

  server: {
    host: '0.0.0.0',
    port: 3000,
  },
};
