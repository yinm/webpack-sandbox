const MODE = 'development'

const enabledSourceMap = (MODE === 'development')

module.exports = {
  mode: MODE,

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: enabledSourceMap,
              importLoaders: 2
            },
          },
          // Sassをバンドルするための機能
          {
            loader: 'sass-loader',
            options: {
              sourceMap: enabledSourceMap,
            }
          }
        ],
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        loader: 'file-loader',
        options: {
          name: './images/[name].[ext]'
        }
      }
    ],
  },
}
