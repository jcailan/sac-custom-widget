const path = require('path');

module.exports = {
	mode: 'production',
	resolve: {
		extensions: ['.ts', '.js']
	},
	entry: {
		main: './src/components/chart/sankey/main.js',
		styling: './src/components/chart/sankey/styling.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../router/resources/chart/sankey')
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-typescript"
						]
					}
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/i,
				use: [
					"to-string-loader",
					{
						loader: "css-loader",
						options: {
							esModule: false
						}
					}
				],
			}
		]
	}
};