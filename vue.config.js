const { defineConfig } = require('@vue/cli-service')
module.exports = 
  defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath:'/portfolio/dist',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(pdf)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: 'files/[name].[hash:8].[ext]'
              }
            }
          ]
        }
      ]
    }
  }
})