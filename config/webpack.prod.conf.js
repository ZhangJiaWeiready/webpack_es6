const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const baseWebpackConfig = require("./webpack.base.conf");

let config = merge(baseWebpackConfig, {
    /*设置生产环境*/
    mode: 'production',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: "js/[name]-[id].[chunkhash:8].js",
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        // extract css into its own file
        new ExtractTextPlugin('css/[name].[md5:contenthash:hex:8].css'),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: {removeAll: true},
                // 避免 cssnano 重新计算 z-index
                safe: true
            },
            canPrint: true
        }),
        new HtmlWebpackPlugin({
            title: '滕伟',
            template: './index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            },
            {
                test: /\.tsx?$/,
                use: ['ts-loader']
            }
        ]
    }
})

module.exports = config;