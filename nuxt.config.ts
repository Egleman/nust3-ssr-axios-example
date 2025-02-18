// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true,
  devtools: {enabled: true},
  imports: {
    dirs: [
      'composables/**',
      'types/**',
      'utils/**'
    ]
  },
  modules: ['@pinia/nuxt'],
  pinia: {
    storesDirs: ['stores/*/**'],
  },
})