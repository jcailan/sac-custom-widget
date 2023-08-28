const path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.ts', '.js']
	},
	entry: './src/index.ts',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
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
	},
	devServer: {
		contentBase: path.join(__dirname, 'public/'),
		publicPath: '/dist/'
	}
};