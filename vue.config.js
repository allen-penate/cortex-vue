module.exports = {
  configureWebpack:{
    target: 'web',
    node: {
      fs: 'empty',
      module: 'empty'
    },      
    entry: {
      client: [
        './src/nova.js'
      ]
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
