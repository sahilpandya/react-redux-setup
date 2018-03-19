/**
 * Created by sahilpandya on 18/03/18.
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './',
        port: 3000,
        historyApiFallback: true,
        hot: true
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
            { test: /\.(png|jpg)$/, loader: 'file-loader' }
        ]
    },
    output: {
        path: path.join(__dirname + '/'),
        filename: 'app.min.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};