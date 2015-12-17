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
      },
      {
        test:/\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  }
}
