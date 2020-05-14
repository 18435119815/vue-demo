const path = require('path')
function resolve (dir) {
    return path.join(__dirname,dir)
}

module.exports = {
    configureWebpack: {
        resolve: {
            // 路径别名
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'network': '@/network',
                'components': '@/components',
                'views': '@/views'
            }
        }
    },
//     chainWebpack:(config)=>{
//         config.resolve.alias
//         //set第一个参数：设置的别名，第二个参数：设置的路径
//         .set('@',resolve('./src'))
//         .set('components',resolve('./src/components'))
//         .set('assets',resolve('./src/assets'))
//         .set('views',resolve('./src/views'))
//         .set('network',resolve('./src/network'))
//         //注意 store 和 router 没必要配置
// 　　　　
//     },
    devServer: {
        publicPath: process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : './',
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                ws: true, // 是否启用websockets
                changOrigin: true, 
                pathRewrite: {
                    '^/api': 'api'
                }
            }
        }
    }
}