const path = require('path')

function resolve(dir) {
  // return path.join(__dirname, '..', dir)
  return path.join(__dirname, dir)
}

module.exports = {
  // 添加webpack的配置
  configureWebpack: {
    resolve: {
      alias: { // 别名
        'vue$': 'vue/dist/vue.esm.js', // 使用vue库带编译器的es版本
        'components': resolve('src/components'),
      }
    }
  },
  // 代理配置
   devServer: {
     proxy: {
       '/aaa': {
         target: 'http://m.you.163.com/xhr/search',
         changeOrigin: true,
         pathRewrite: {
           '^/aaa': '', // 去掉path前面的/api
         },
       },
       '/bbb': {
        target: 'http://m.you.163.com/topic/v1/find',
        changeOrigin: true,
        pathRewrite: {
          '^/bbb': '', // 去掉path前面的/api
        },
      }
     }
   }


}