// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: false
  },
  googleFonts: {
    families: {
      'Playfair+Display': [400, 500, 600, 700],
      'Inter': [300, 400, 500, 600, 700]
    },
    display: 'swap',
    download: true,
    preload: true,
    prefetch: false,
    preconnect: false
  },
  app: {
    head: {
      title: 'Solenne Bay | Unlock Your Best Stays',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg?v=2' },
        { rel: 'shortcut icon', type: 'image/svg+xml', href: '/favicon.svg?v=2' }
      ],
      meta: [
        { name: 'description', content: 'Experience the ultimate luxury stay at Solenne Bay. Discover refined villas, serene coastal escapes, and elevated hospitality.' }
      ]
    }
  }
})
