const merge=require('webpack-merge');
const path=require('path');

const baseconfig=require('./base.config');

const config=merge(baseconfig,{
  devServer:{
    open:true,
    contentBase:path.resolve(__dirname,'../dist'),
    publicPath:'/assets/js/'
  }
});

module.exports=config;
