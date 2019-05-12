module.exports = {
  /*
  ** Headers of the page
  */
  head: {
  },
  /*
  ** Build configuration
  */
  loading: '~/components/loading.vue',
  router: {
    middleware: ['ssr-cookie']
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config,  { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/google-adsense',
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: [
            'faTelegram', 'faDiscord',
            'faGit', 'faDocker'
          ]
        }, {
          set: '@fortawesome/free-solid-svg-icons',
          icons: [
            'faLanguage', 'faHome', 'faWrench', 'faRobot',
            'faTerminal', 'faComment', 'faUnlockAlt', 'faSignal',
            'faServer', 'faMicrochip', 'faMemory', 'faHdd',
            'faPlug'
          ]
        }
      ]
    }],
    'nuxt-rfg-icon',
    'nuxt-buefy',
    ['nuxt-i18n', {
      locales: [
        {
          code: 'ko',
          iso: 'ko-KR',
          file: 'ko.js',
          name: '🇰🇷 한국어'
        }, {
          code: 'en',
          iso: 'en-US',
          file: 'en.js',
          name: '🇺🇸 English'
        }],
      defaultLocale: 'ko',
      lazy: true,
      langDir: 'locales/',
      detectBrowserLanguage: {
        useCookie: true
      }
    }]
  ],
  'google-adsense': {
    id: 'ca-pub-2810659463174293',
    pageLevelAds: false,
    analyticsUacct: 'UA-61070671-10',
    analyticsDomainName: 'kuriyama.mori.space'
  },
  'google-analytics': {
    id: 'UA-61070671-10'
  },
  sitemap: {
    path: '/sitemap.xml'
  },
  'rfg-icon': {
    static: true,
    staticPath: '/_favicons/',
    masterPicture: 'static/icon.png'
  }
}
