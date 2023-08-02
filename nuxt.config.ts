// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
    '@nuxtjs/tailwindcss',
    // 'nuxt-sweetalert2',
    // 'vue-sweetalert2/nuxt',
  ],
  routeRules: {
    
    '/': { redirect: '/login' },
    // '/external-route': { redirect: 'https://example.com' },
  },
  router: {
    // middleware: ['guest'],
  },
  // plugins: [
  //   // '~/store/auth.js'
  //   { src: '~/plugins/sweetalert2.js', mode: 'client' },
  // ]
})