var path    = require('path'),
    webpack = require('webpack');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: './',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 3333
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test:/\.js$/,
        loaders: ['react-hot','babel'],
        include : path.join(__dirname,'src')
      }
    ]
  }
}
