const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
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
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
        BASE_URL: '"/"',
      },
    }),
  ],
};
module.exports = merge(baseConfig, devConfig);
