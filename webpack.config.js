const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  optimization: {
    splitChunks: {
      cacheGroups: {
        phaser: {
          test: /[\\/]node_modules[\\/]phaser[\\/]/,
          name: "phaser",
          chunks: "all",
        },
      },
    },
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devtool: 'source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    open: true,
    hot: true
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: { fs: false, path: false }
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: "asset/resource" },
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      { test: /\.json/, type: "asset/resource", exclude: /node_modules/ }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'public/index.html' }),
    new CopyPlugin({
      patterns: [{ from: 'src/assets', to: 'assets' }]
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
