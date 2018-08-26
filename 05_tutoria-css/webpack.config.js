module.exports = {
  mode: 'produtcion',
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { url: false }
          },
        ]
      }
    ]
  }
}
