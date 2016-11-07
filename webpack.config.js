const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
	entry: './script.js',
	output: {
		path: __dirname + '/dist',
		library: 'script',
		filename: 'action.js'
	},

	watch: true,
	watchOptions: {
		aggregateTimeout: 100
	},

	devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,

	plugins: [
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV)
		})
	],

	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'babel?presets[]=es2015,presets[]=react,plugins[]=transform-class-properties'
		}]
	}

};