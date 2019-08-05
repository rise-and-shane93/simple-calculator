module.exports = {
  devtool: 'inline-sourcemap',
  entry: './src/index.js',
  output: {
    path: '/build',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot-loader',
          'babel-loader'
        ]
      }
    ]
  }
};