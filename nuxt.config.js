const webpack = require('webpack')
const SriPlugin = require('webpack-subresource-integrity')

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
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
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
      config.output.crossOriginLoading = 'anonymous'
    },
    vendor: [
    ],
    plugins: [
      new SriPlugin({
        hashFuncNames: ['sha256', 'sha384'],
        enabled: true
      })
    ]
  },
  modules: [
    /*['@nuxtjs/google-adsense'],
    ['@nuxtjs/google-analytics'],*/
    ['@nuxtjs/sitemap'],
    ['qonfucius-nuxt-fontawesome'],
    'nuxt-rfg-icon',
    '@nuxtjs/bulma'
  ],
  /*'google-adsense': {
    id: 'ca-pub-2810659463174293',
    pageLevelAds: true,
    analyticsUacct: 'UA-61070671-7',
    analyticsDomainName: 'mori.space'
  },
  'google-analytics': {
    id: 'UA-61070671-7'
  },*/
  sitemap: {
    path: '/sitemap.xml'
  },
  fontAwesome: {
    packs: [
      {
        package: '@fortawesome/fontawesome-free-brands',
        icons: ['faTelegram', 'faDiscord', 'faGit']
      }, {
        package: '@fortawesome/fontawesome-free-solid',
        icons: ['faLanguage', 'faHome', 'faWrench', 'faRobot',
          'faTerminal', 'faComment', 'faUnlockAlt', 'faSignal',
          'faServer']
      }
    ]
  },
  'rfg-icon': {
    static: true,
    staticPath: '/_favicons/',
    masterPicture: 'static/icon.png'
  },
  render: {
    /*csp: {
      enabled: true,
      hashAlgorithm: 'sha256',
      allowedSources: ['pagead2.googlesyndication.com', 'www.google-analytics.com',
        'ajax.cloudflare.com', 'adservice.google.co.kr', 'adservice.google.com'],
      policies: {
        'font-src': "'self'"
      }
    }*/
  }
}
