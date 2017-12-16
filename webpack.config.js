const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname,
	entry: './code/app.js',
	output: {
		path: __dirname,
		filename: 'app.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['react', 'es2015', 'es2016']
				}
			}, {
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					loader: 'css-loader',
					options: {
						minimize: true
					}
				})
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			favicon: 'code/favicon.png',
			template: 'code/index.html'
		}),
		new ExtractTextPlugin('app.css')
	]
};