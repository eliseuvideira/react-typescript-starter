/* eslint-disable */
const webpack = require('webpack');
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const { required: requiredKeys } = require('dotenv-safe').config();

/**
 * @returns {webpack.Configuration}
 */
const getConfig = () => {
  if (isDev) {
    return {
      entry: join(__dirname, 'src', 'index.tsx'),
      output: {
        path: join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/',
      },
      devServer: {
        historyApiFallback: true,
      },
      devtool: 'eval-source-map',
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                cacheDirectory: true,
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      targets: {
                        browsers: 'last 2 versions, not dead, > 0.25%',
                      },
                    },
                  ],
                  ['@babel/preset-typescript', { onlyRemoveTypeImports: true }],
                  '@babel/preset-react',
                ],
                plugins: ['react-hot-loader/babel'],
              },
            },
          },
        ],
      },
      performance: false,
      plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.EnvironmentPlugin(requiredKeys),
        new HtmlWebpackPlugin({
          template: join(__dirname, 'public', 'index.html'),
          favicon: join(__dirname, 'public', 'favicon.ico'),
        }),
      ],
      resolve: {
        modules: ['node_modules'],
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    };
  }

  return {
    entry: join(__dirname, 'src', 'index.tsx'),
    output: {
      path: join(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              cacheDirectory: true,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: { browsers: 'last 2 versions, not dead, > 0.25%' },
                  },
                ],
                ['@babel/preset-typescript', { onlyRemoveTypeImports: true }],
                '@babel/preset-react',
              ],
            },
          },
        },
      ],
    },
    performance: false,
    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new webpack.EnvironmentPlugin(requiredKeys),
      new HtmlWebpackPlugin({
        template: join(__dirname, 'public', 'index.html'),
        favicon: join(__dirname, 'public', 'favicon.ico'),
      }),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  };
};

const config = getConfig();

module.exports = config;
