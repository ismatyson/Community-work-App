import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // titleTemplate: '%s - ' + process.env.npm_package_name,
    title: 'Umuganda',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Inter&display=swap" },
      { rel: 'stylesheet', href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap" },
      { rel: 'stylesheet', href:"https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
 loading: { color: 'violet' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/main.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
 modules: [
  '@nuxtjs/axios',
  '@nuxtjs/auth'
 ],

 auth: {
  redirect: {
    login: '/Community/',
    logout: '/Community/',
    callback: false,
    home: '/Community/'
  },
  strategies: {
    local: {
      endpoints: {
        login: { url: '/auth/', method: 'post', propertyName: 'token' },
        logout: false,
        user: { url: '/auth/me', method: 'get', propertyName: false }
      },
      // tokenRequired: true,
       tokenType: '',
      // globalToken: true,
      // autoFetchUser: true
    }
  }
},
axios: {
  baseURL: 'http://localhost:9000/community',
  Credentials: false
},
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:9000/community/',
    fbAPIKey: 'AIzaSyBh8TONfpEZ1QyTlaNAXbyfFAfBsMCa_cI'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
