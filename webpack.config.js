const webpack = require('webpack')
const path = require('path')
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'anywhere-tools.js',
    library: 'anywhere-tools',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options:  {
          presets: ['es2015']
        }
      }
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules')
    ],
  },
  plugins: [
    new UglifyJSPlugin()
  ]
}