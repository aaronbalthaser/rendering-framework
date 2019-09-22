const path = require('path');

const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');

module.exports = merge(commonConfig, {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    index: 'index.html',
    port: 9000
  }
});
