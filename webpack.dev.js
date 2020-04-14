/**
 * Created by Liudq on 2019-08-15
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        host: "0.0.0.0",
        port: 9000,
        proxy: {
            "/product/v2": {
                changeOrigin: true,
                target: 'http://api-test-admin.vipcode.com',
                // target: 'https://api.vcode.vip',
                secure: false,
                bypass: function (req, res, proxyOptions) {
                    if (req.headers.accept.indexOf('html') !== -1) {
                        return '/index.html';
                    }
                    if (req.headers.accept.indexOf('css') !== -1) {
                        return '/src/util/base.css';
                    }
                    if (req.headers.accept.indexOf('images') !== -1) {
                        return req.url;
                    }
                }
            }
        }
    }
});