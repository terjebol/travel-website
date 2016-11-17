var webpack = require("webpack");

var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: {
        "vendor": "./app/vendor",
        "app": "./app/main.ts"
    },
    output: {
        path: __dirname,
        filename: "./dist/[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },

    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app','vendor']
        }),

        new LiveReloadPlugin({
            appendScriptTag: true
        })
    ]
};