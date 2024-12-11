// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@nuxt-alt/http'],
  http: {
    baseURL: "http://localhost:5001",
    credentials: "omit",
    browserBaseURL: "http://localhost:5001",
  },
  serverDir: "nuxt-server",

})
