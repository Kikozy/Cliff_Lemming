module.exports = {
    // 实现支持template编译
    runtimeCompiler: true,
    // 配置跨域请求
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:5000/',
                changeOrigin: true,//是否跨域
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            // 获取ip的跨域
            '/ip': {
                // target: 'http://pv.sohu.com/cityjson?ie=utf-8',
                target: 'http://pv.sohu.com/',
                changeOrigin: true,//是否跨域
                ws: true,
                pathRewrite: {
                    '^/ip': ''
                }
            }
        }
    },
};