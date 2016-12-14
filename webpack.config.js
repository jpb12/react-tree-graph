const path = require('path');
const isProduction = process.env.NODE_ENV.trim() === 'production';

module.exports = {
	context: __dirname,
	entry: './Components/tree.js',
	externals: [
		'clone',
		'd3',
		'react'
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'es2016']
				}
			}
		]
	},
	output: {
		library: 'react-tree-graph',
		libraryTarget: 'umd',
		filename: isProduction ? 'index.min.js' : 'index.js',
		path: path.join(__dirname, 'dist')
	},
	target: 'node'
};