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
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ use: 'css-loader' })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ]
}
