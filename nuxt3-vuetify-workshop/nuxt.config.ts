//  https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2024-11-01',
//   devtools: { enabled: true }
// })

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,

  build: {
    transpile: ["vuetify"],
  },

  css: ["@/assets/scss/style.scss"],

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  compatibilityDate: "2024-12-15",
});