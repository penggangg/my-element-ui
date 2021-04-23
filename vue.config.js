const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    configureWebpack: config => {
        config.plugins.push(new BundleAnalyzerPlugin());
    }
};
