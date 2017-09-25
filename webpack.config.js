const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  loader: {
    test: /\.jsx?$/,
    exclude: /(node_modules)/,
    loader: 'babel-loader',
    query: {
      presets: ['es2015', 'react']
    }
  },
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};