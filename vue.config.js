const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: config => {
    const CompressionWebpackPlugin = require('compression-webpack-plugin')
    if (process.env.NODE_ENV === 'production') {
      config.plugin('CompressionPlugin').use(
        new CompressionWebpackPlugin({
          test: /\.(js|css)$/,
          threshold: 10240, // 超过10kb的文件就压缩
          deleteOriginalAssets: true, // 不删除源文件
          minRatio: 0.8
        })
      )
    }
  }
})
