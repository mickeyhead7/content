const path = require('path');
const { NODE_ENV } = process.env;

module.exports = {
  entry: {
    content: './src/applications/entries/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    filename: '[name].js'
  },
  mode: NODE_ENV || 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    symlinks: false
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    compress: true,
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    watchContentBase: true
  }
};
