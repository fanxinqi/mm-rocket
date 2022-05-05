
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
    filename: 'pdf2img.js',
    library: 'pdf2img',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'lib'),
    globalObject: 'this',
  }
};