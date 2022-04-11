
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode:'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bitmap.js',
    library: 'bitmap',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'lib'),
    globalObject: 'this',
  }
};