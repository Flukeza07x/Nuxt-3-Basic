// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      bodyAttrs: {
        class: 'demo'
      },
      charset: 'utf-8',
      titleTemplate: '%s | Ratchanon IT',
      meta : [
        {
          name: 'author',
          content: 'Ratchanon Decha'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale-5'
        },
      ]
    }
  },

  modules: [
    '@nuxt/icon', // โมดูล nuxt-icon
    
    
    // กำหนดค่า @nuxtjs/robots
    ['@nuxtjs/robots', {
      UserAgent: '*', // อนุญาตให้ทุก User-Agent เข้าถึงได้
      Disallow: '',   // ไม่มีการบล็อกหน้าใด ๆ
      Sitemap: 'http://a69702.sitemaphosting.com/3927666/sitemap.xml'
    }]
  
  ],

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
    
  },


});