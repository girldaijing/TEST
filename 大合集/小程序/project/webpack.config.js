const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const webpack = require('webpack'); // 用于访问内置插件

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

plugins: [
    new webpack.optimize.UglifyJsPlugin()
   
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
