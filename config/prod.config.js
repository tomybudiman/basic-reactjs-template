const extractTextPlugin=require('extract-text-webpack-plugin');
const merge=require('webpack-merge');
const path=require('path');

const baseconfig=require('./base.config');

const config=merge(baseconfig,{
  module:{
    rules:[
      {
        test:/\.(css|scss)$/,
        use:extractTextPlugin.extract({
          fallback:'style-loader',
          use:['css-loader','sass-loader']
        })
      },
      {
        test:/\.(jpg|jpeg|png|bmp|gif)$/,
        use:[
          {
            loader:'file-loader',
            options:{
              name:'[md5:hash].[ext]',
              outputPath:'../media/'
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new extractTextPlugin({
      filename:'../css/[name].style.css'
    })
  ]
});

module.exports=config;
