module.exports = {
  /*
  ** Build configuration
  */
  build: {},
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    meta: [
      {charset: 'utf-8'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#17a2b8',
    height: '5px',
    failedColor: '#fa9292'
  },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#17a2b8'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    'bootstrap-vue/nuxt'
  ],
  render: {
    bundleRenderer: {
      cache: require('lru-cache')({
        max: 1000,
        maxAge: 1000 * 60 * 15
      })
    }
  },
  mode: 'spa',
  cache: {
    max: 1000,
    maxAge: 900000
  }
};
