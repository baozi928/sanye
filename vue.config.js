const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/sanye-website/'
      : '/',
  lintOnSave: false,
  chainWebpack:config=>{
    const dir = path.resolve(__dirname,'src/assets/icons')

    config.module
        .rule('svg-sprite')
        .test(/\.svg$/)
        .include.add(dir).end() //包含icons目录
        .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'),[{pluginSprite:true}])
    config.module.rule('svg').exclude.add(dir) //其他svg loader 排除icons目录
  }
}