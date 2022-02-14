module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules\/(?!(react-tree-graph))/,
				loader: 'babel-loader'
			}
		]
	},
};