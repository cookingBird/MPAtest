const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const cwdPath = process.cwd();

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'dist'),
        serveIndex: true,
      },
      {
        directory: path.join(__dirname, 'public'),
        serveIndex: false,
      },
    ],
    host: 'localhost',
    port: 8088,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};
module.exports = merge(baseConfig, devConfig);
