var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      // main: './src/index.js',
      vendor: ['moment', 'ramda'],
      app: './src/index'
  },
  output: {
    filename: '[chunkhash].[name].js',
    path: './dist'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      minChunks: Infinity,
      names: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}