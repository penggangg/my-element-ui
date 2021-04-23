const path = require('path'),
    ProgressBarPlugin = require('progress-bar-webpack-plugin'),
    VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: 'production', // development 得区别
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: path.join(__dirname, '../lib'),
        filename: 'zct-ui.common.js',
        chunkFilename: '[id].js',
        libraryExport: 'default',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(jsx?|babel|es6)$/,
                include: process.cwd(),
                exclude: /node_modules|utils\/popper\.js|utils\/date\.js/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: path.posix.join('static', '[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new ProgressBarPlugin(),
        new VueLoaderPlugin()
    ]
};
