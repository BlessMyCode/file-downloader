const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/prog.ts',
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
	fallback: {
		"fs": false,
		"http": false,
		"https": false,
	},
  },
  output: {
    filename: 'prog.js',
    path: path.resolve(__dirname, 'dist'),
	libraryTarget: 'this',
  },
  target: 'node',
  externals: [nodeExternals()]
};