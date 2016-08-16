var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    preLoaders: [
      // Javascript
      { test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/ },
    ],
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src'),
      },
      {
        test: /\.scss$/,
        loaders: [ 'style', 'css', 'sass'],
      }
    ],
    eslint: {
      failOnWarning: false,
      failOnError: true,
    },
  },
};
