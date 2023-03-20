// 通过vue.config.js修改webpack的默认配置
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    chainWebpack: config => {
        // 发布模式
        config.when(process.env.NODE_ENV === 'production', config => {
                config.entry('app').clear().add('./src/main-prod.js')
                config.set('externals', {
                    // 'vue-router': 'VueRouter',
                    // axios: 'axios',
                    lodash: '_',
                    echarts: 'echarts',
                    nprogress: 'NProgress'
                })
                config.plugin('html').tap(args => {
                    args[0].isProd = true
                    return args
                })
            })
            // 开发模式
        config.when(process.env.NODE_ENV === 'development', config => {
            config.entry('app').clear().add('./src/main-dev.js')
            config.plugin('html').tap(args => {
                args[0].isProd = false
                return args
            })
        })
    },
    transpileDependencies: true,
    // 关闭检查
    lintOnSave: false
})