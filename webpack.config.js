var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    path: '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })]
}
