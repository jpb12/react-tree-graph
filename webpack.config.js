const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	context: __dirname,
	entry: './code/app.js',
	output: {
		path: __dirname,
		filename: 'app.js'
	},
	optimization: {
		minimizer: [
			new TerserPlugin(),
			new OptimizeCSSAssetsPlugin({})
		]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}, {
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			favicon: 'code/favicon.png',
			template: 'code/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'app.css'
		})
	]
};