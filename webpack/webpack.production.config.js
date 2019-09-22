const path = require('path');

const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');

module.exports = merge(commonConfig, {
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: ''
  },
  mode: 'production'
});
