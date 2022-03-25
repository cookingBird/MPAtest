const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const prodConfig = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 10000, // Minimum number of characters
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 5,
    }),
  ],
};

module.exports = merge(baseConfig, prodConfig);
