const webpack = require('webpack');
const opn = require('opn');
const merge = require('webpack-merge');
const path = require("path");
const baseWebpackConfig = require("./webpack.base.conf");
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = merge(baseWebpackConfig, {
    mode: 'development',
    output: {
        // 输出路径
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    plugins: [
        /*设置热更新*/
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: '滕伟',
            template: './index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                },
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: ['ts-loader']
            }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port: 8000,
        hot: true,
        inline: true,
        contentBase: path.resolve(__dirname, "dist"),
        historyApiFallback: true,
        disableHostCheck: true,
        proxy: [
            {
                context: ['/api/**', '/u/**'],
                target: 'http://10.8.200.69:8080/',
                secure: false
            }
        ],
        /*打开浏览器 并打开本项目网址*/
        after() {
            opn('http://localhost:' + this.port);
        }
    }
})
module.exports = config;