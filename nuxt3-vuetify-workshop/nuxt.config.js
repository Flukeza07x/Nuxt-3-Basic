//  https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2024-11-01',
//   devtools: { enabled: true }
// })
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true,
    routeRules: {
        '/backend/**': { ssr: false },
    },
    build: {
        transpile: ["vuetify"],
    },
    css: ["@/assets/scss/style.scss"],
    vite: {
        define: {
            "process.env.DEBUG": false,
        },
    },
    modules: [
        [
            '@nuxtjs/robots',
            {
                UserAgent: "*",
                Disallow: "",
                Sitemap: "http://a69702.sitemaphosting.com/3927666/sitemap.xml"
            },
        ],
    ],
    compatibilityDate: "2024-12-15",
});
function defineNuxtConfig(arg0) {
    throw new Error("Function not implemented.");
}
