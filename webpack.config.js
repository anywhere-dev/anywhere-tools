const webpack = require('webpack')
const path = require('path')
//const UglifyJSPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'anywhere-tools.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules')
    ],
  },
  plugins: [
    //new UglifyJSPlugin()
  ]
}