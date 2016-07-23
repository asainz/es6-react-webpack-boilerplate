var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);

/**
 * TODO: hotloader
 * TODO: environment based config
 * TODO: Caching
 * TODO: create tasks for all environments
 * TODO: Document tasks and features
 * TODO: Create some sort of base/common css
 */

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    sasslint: {
        configFile: path.join(ROOT_PATH, '.sass-lint.yml')
    },
    module: {
        preLoaders: [{
                test: /\.scss$/,
                exclude: /(node_modules|bower_components|public|src\/styles\/vendor)/,
                loader: 'sasslint-loader'
            }
        ],
        loaders: [
            { test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            { test: /\.js$/, loader: "babel-loader", query: { presets: ['react'] }, exclude: /(node_modules|bower_components)/ },
            { test: /\.(otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader : 'file-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    },
    stats: {
        colors: true,
        reasons: true
    },
    debug: true,
    devtool: 'source-map',
    devServer:{
        historyApiFallback: true,
        inline: true
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: true
        })
    ],
    resolve: {
        root: path.resolve('src'),
        modulesDirectories: [
            'node_modules'
        ],
        extensions: ['', '.json', '.js', '.scss'],
        alias: {
            actions: 'actions',
            components: 'components',
            views: 'views'
        }
    }
};