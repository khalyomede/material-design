'use strict';

const { resolve } = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: resolve('src', 'index.js'),
  target: 'web',
  output: {
    filename: 'material-design.js',
    path: resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyjsWebpackPlugin()
    ]
  },
  plugins: [
    new CleanWebpackPlugin([
      resolve('dist')
    ])
  ]
};