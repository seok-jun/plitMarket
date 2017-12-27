var webpack = require('webpack');

module.exports = {
    entry: ['react-hot-loader/patch', './src/index.js'],

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        contentBase: __dirname + '/public/',
    },

    module: {
      loaders: [
        {
          test: /.js$/,
          use: ['react-hot-loader/webpack', 'babel-loader'],
          exclude: /node_modules/
        }
      ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
