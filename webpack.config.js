const path = require('path');
//const webpack = require('webpack');

module.exports = {
  devtool: 'inline-cheap-module-source-map',
  entry: [
    './client/js/index'
  ],
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js',
    publicPath: '/public/js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'vue-loader'  
      }
    ]
  }
  
}