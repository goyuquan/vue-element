const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const proxy = {
  "/api": {
    target: "http://192.168.2.26:8080/",
    pathRewrite: {"^/api" : ""}
  },
  "/": {
    target: "http://192.168.2.26:8080/",
    changeOrigin: true
  }
};

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        port: 8084,
        proxy,
        stats: {
            assets: true,
            chunks: false,
            modules: false,
        }
    },
    plugins: [

    ],
    mode: "development",
});
