const webpack = require('webpack');
const path = require('path');
let config = {
    entry: "./src/index.tsx",
    // 添加需要解析的文件格式
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    optimization: {
        runtimeChunk: {
            name: 'manifest'
        },
        // 包拆分
        splitChunks: {
            cacheGroups: {
                common: { //项目公共组件
                    chunks: "initial",
                    name: "common",
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0
                },
                vendor: {   // 第三方组件
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    priority: 10,
                    enforce: true
                }
            }
        }
    }
}

module.exports = config;
