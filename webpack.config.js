const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/client/index.tsx',
  output: {
    filename: 'bundle.js',
    // Directory /client/dist is used by serverless-client-s3
    path: __dirname + '/client/dist',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: 'client',
    port: 3000,
    inline: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { test: /\.(jpg|png)$/, loaders: 'url-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/client/assets/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.LAMBDA_ROOT_ENDPOINT': JSON.stringify(
        process.env.LAMBDA_ROOT_ENDPOINT,
      ),
    }),
  ],
};
