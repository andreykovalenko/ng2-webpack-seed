var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const METADATA = {
  host: HOST,
  port: PORT,
  ENV: ENV,
  baseUrl: '/',
  isDevServer: helpers.isWebpackDevServer()

};
console.log('--------->', helpers.root('src'), METADATA);


module.exports = {
  entry: {
      // main: './src/index.js',
      vendor: ['moment', 'ramda'],
      app: './src/index'
  },
  output: {
    filename: '[name].bundle.js',
    path: helpers.root('dist'),

  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [ 'node_modules', 'src'],
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