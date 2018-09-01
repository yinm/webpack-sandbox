const ExtractTextPlugin = require('extract-text-webpack-plugin')

const MODE = 'development'

const enabledSourceMap = (MODE === 'development')

module.exports = {
  mode: MODE,

  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
  },

  module: {
    rules: [
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: enabledSourceMap,
                importLoaders: 2
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: enabledSourceMap
              }
            }
          ]
        }),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
}
