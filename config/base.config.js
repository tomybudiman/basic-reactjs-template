const path=require('path');

const SRC_DIR=path.resolve(__dirname,'../src');

const config={
  entry:{
    index:SRC_DIR+'/index.js'
  },
  output:{
    path:path.resolve(__dirname,'../dist/assets/js'),
    filename:'[name].bundle.js'
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        use:[
          {
            loader:'babel-loader',
            options:{
              presets:['env','react']
            }
          }
        ]
      }
    ]
  }
}

module.exports=config;
