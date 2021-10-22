// entry point
// where to output bundle file
//
const path = require('path');

module.exports = {
  entry: './src/app.jsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devtool: 'cheap-module-source-map',
  // replacement for live-server
  devServer: {
    static: path.resolve(__dirname, 'public'),
  },
};
