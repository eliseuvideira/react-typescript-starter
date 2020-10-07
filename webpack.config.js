/* eslint-disable */
const webpack = require('webpack');
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const { required: env } = require('dotenv-safe').config();

/**
 * @returns {webpack.Configuration}
 */
const createConfig = () => {
  /**
   * @type {webpack.Configuration}
   */
  const config = {
    entry: join(__dirname, 'src', 'index.tsx'),
    output: {
      path: join(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    performance: false,
    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new webpack.EnvironmentPlugin(env),
      new HtmlWebpackPlugin({
        template: join(__dirname, 'public', 'index.html'),
        favicon: join(__dirname, 'public', 'favicon.ico'),
      }),
    ],
  };

  if (process.env.NODE_ENV === 'development') {
    return {
      ...config,
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
    ...config,
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
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  };
};

const config = createConfig();

module.exports = config;
