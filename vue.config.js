const path = require('path')
module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src/')
      }
    },
    devtool: 'source-map'
  }
  // confgureWebpack: {
  //   devtool: 'source-map'
  // }
}
