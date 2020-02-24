const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const aliases = require('./util.aliases')

module.exports = env => ({
  entry: [
    './src/app/index.tsx'
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(j|t)sx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg|mp4)$/i,
        loader: 'file-loader',
        options: {
          name: `static/[name].[contenthash].[ext]`,
        }
      },
      {
        test: /\.(otf|ttf)$/i,
        loader: 'file-loader',
        options: {
          name: `static/[contenthash].[ext]`,
        }
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]

  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: Object.assign(aliases.webpack, {
      'react-dom': '@hot-loader/react-dom'
    })
  },
  devtool: 'source-map',
  output: {
    filename: 'app/build-bundle.js',
    path: path.join(__dirname, './../build/dev'),
    publicPath: '/'
  },
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './src/app/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {},
  devServer: {
    inline: true,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: {
      rewrites: [
        { from: /\/resetPassword\/.*/, to: '/index.html' },
        { from: /\/verify\/.*/, to: '/index.html' }
      ]
    },
    disableHostCheck: true,
  }
})
