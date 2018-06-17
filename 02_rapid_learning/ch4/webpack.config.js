const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
  },
  devServer: {
    contentBase: './dist',
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.(gif|png|jpg)$/,
        loader: 'url-loader',
      }
    ]
  }
}
