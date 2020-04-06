'use strict';

const path = require('path');

const devServer = {
  host: 'http://127.0.0.1',
  port: 8081,
};

const developmentConfig = {
  mode: 'development',
  cache: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
      {
        test: /\.ts|.tsx$/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve('./src'), path.resolve('./node_modules')], // importのrootを指定
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: devServer.port,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
};

module.exports = developmentConfig;
