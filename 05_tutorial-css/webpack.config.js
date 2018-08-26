module.exports = {
  mode: 'production',
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
