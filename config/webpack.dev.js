var webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
console.log('--------->', helpers.root('dist'));


module.exports = {
   devtool: 'cheap-module-source-map',
  /*
   * The entry point for the bundle
   * Our Angular.js app
   *
   * See: http://webpack.github.io/docs/configuration.html#entry
   */
  entry: {
      polyfills: './src/polyfills.browser.ts',
      vendor: ['moment', 'ramda'],
      app: './src/index'
  },
  output: {
    filename: '[name].bundle.js',
    path: helpers.root('dist'),
    chunkFilename: '[name].chunk.js',
    sourceMapFilename: '[file].map',

  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [ 'node_modules', 'src'],
  },
  plugins: [
  new AssetsPlugin({
    path: helpers.root('dist'),
    filename: 'webpack-assets.json',
    prettyPrint: true
  }),
    new webpack.optimize.CommonsChunkPlugin({
      minChunks: Infinity,
      names: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    /*
     * Plugin: ForkCheckerPlugin
     * Description: Do type checking in a separate process, so webpack don't need to wait.
     *
     * See: https://github.com/s-panferov/awesome-typescript-loader#forkchecker-boolean-defaultfalse
     */
    new CheckerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: 'tsconfig.webpack.json'
            }
          }
        ],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader'],
        exclude: [helpers.root('src', 'styles')]
      },
      {
        test: /\.html$/,
        use: 'raw-loader',
        exclude: [helpers.root('src/index.html')]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      }
    ]
  },
  devServer: {
    port: METADATA.port,
    host: METADATA.host,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    }
  },
  node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }


}