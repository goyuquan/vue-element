const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: 'bundle/[name].bundle.js?[chunkhash]',
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            // {
            //   test: /\.scss$/,
            //   use: [
            //     'vue-style-loader',
            //     'css-loader',
            //     'sass-loader'
            //   ]
            // },
            {
                test: /.(png|svg|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[path][name].[ext]',
                      publicPath: './'
                    }
                  }
                ]
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[path][name].[ext]',
                      publicPath: './'
                    }
                  }
                ]
            },
            { test: /.vue$/, loader: 'vue-loader' },
            // { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            // {
            //   test: /\.scss$/,
            //   use: [{
            //       loader: "style-loader" // 将 JS 字符串生成为 style 节点
            //   }, {
            //       loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
            //   }, {
            //       loader: "sass-loader" // 将 Sass 编译成 CSS
            //   }]
            // }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: "./index.html",
            favicon: './favicon.ico'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    optimization: {
        splitChunks: {
            chunks: "async",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
};
