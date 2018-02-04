const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry: './app/main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new UglifyJsPlugin()
  ],
};
