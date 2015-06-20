var webpack = require('webpack');

var commonsPlugin =
    new webpack.optimize.CommonsChunkPlugin('website/generated/common.js');


module.exports = {
    entry: {
        main: './app/main.js',
    },

    output: {
        filename: 'website/generated/[name].js'
    },
    module: {
        loaders: [

            {test: /\.js$/, loader: 'babel'},
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}, // use ! to chain loaders
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    },
    plugins: [
        commonsPlugin,
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),

    ]
};
