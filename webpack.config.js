const path = require('path');
const isProduction = process.env.NODE_ENV.trim() === 'production';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: __dirname,
	entry: './index.js',
	externals: [
		'clone',
		'd3-hierarchy',
		'react'
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['react', 'es2015', 'es2016']
				}
			}, {
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					loader: 'css-loader',
					options: {
						minimize: isProduction
					}
				})
			}
		]
	},
	output: {
		library: 'react-tree-graph',
		libraryTarget: 'umd',
		filename: isProduction ? 'index.min.js' : 'index.js',
		path: path.join(__dirname, 'dist')
	},
	plugins: [
		new ExtractTextPlugin(isProduction ? 'style.min.css' : 'style.css')
	],
	target: 'node'
};