const path = require('path');
const isProduction = process.env.NODE_ENV.trim() === 'production';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = {
	context: __dirname,
	entry: './index.js',
	externals: [
		'clone',
		'core-js/fn/array/find',
		'core-js/fn/object/assign',
		'd3-hierarchy',
		'd3-ease',
		'prop-types',
		'react'
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					babelrc: false,
					presets: [
						[
							'env',
							{
								'modules': false
							}
						],
						'react'
					]
				}
			}, {
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
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
		new ExtractTextPlugin(isProduction ? 'style.min.css' : 'style.css'),
		new WebpackBar()
	],
	target: 'node'
};