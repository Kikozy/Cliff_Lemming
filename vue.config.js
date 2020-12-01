module.exports = {
    // 实现支持template编译
    runtimeCompiler: true,
    // 配置跨域请求
    devServer: {
        proxy: {
            '/api': {
                // target: 'http://music.163.com/',
                target: 'http://127.0.0.1:5000/',
                changeOrigin: true,//是否跨域
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
};