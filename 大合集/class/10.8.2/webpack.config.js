const path = require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');
const cleanWebpackPlugin=require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
    filename: '[hash].bundle.js'
  },
  plugins:[
      new cleanWebpackPlugin(['dist']),
      new htmlWebpackPlugin({
          title:"打包文件",
          inject:"head",
          template:"index.html",
          filename:'[hash]-index.html',
          date:new Date(),
          minify:{
              removeComments:true,
              collapseInlineTagWhitespace:true,
              collapseWhitespace:true
          }
      })
  ],
  module:{
       rules:[{
               test:/\.css$/,
               use:[{
                   loader:'style-loader'
                },
               {
                   loader:'css-loader',
                   options:{
                       modules:true
                   }
                }
            ]
           }]
  },
  mode:'production'
};