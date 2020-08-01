/* eslint-disable */
const webpack = require('webpack');
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { required: requiredKeys } = require('dotenv-safe').config();

/** @type {webpack.Configuration} */
const config = {
  entry: ['react-hot-loader/patch', join(__dirname, 'src', 'index.tsx')],
  output: {
    path: join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool:
    process.env.NODE_ENV === 'development' ? 'inline-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['react-hot-loader/webpack', 'ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'index.html'),
      favicon: join(__dirname, 'public', 'favicon.ico'),
    }),
    new webpack.EnvironmentPlugin(requiredKeys),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  performance: false,
  devServer: {
    historyApiFallback: true,
  },
};

module.exports = config;
