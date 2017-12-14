const merge=require('webpack-merge');
const path=require('path');

const baseconfig=require('./base.config');

const config=merge(baseconfig,{
  module:{
    rules:[
      {
        test:/\.(css|scss)$/,
        use:['style-loader','css-loader','sass-loader']
      },
      {
        test:/\.(jpg|jpeg|png|bmp|gif)$/,
        use:[
          {
            loader:'file-loader',
            options:{
              name:'[name].[ext]',
              publicPath:'assets/js/'
            }
          }
        ]
      }
    ]
  },
  devServer:{
    open:true,
    contentBase:path.resolve(__dirname,'../src'),
    publicPath:'/assets/js/'
  }
});

module.exports=config;
