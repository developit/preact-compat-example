import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
	entry: './src/index.js',
	output: {
		path: './build',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.jsx', '.scss', '.js', '.json'],
		alias: {
			'react': 'preact-compat',
			'react-dom': 'preact-compat',
			'react-addons-css-transition-group': 'rc-css-transition-group'
		}
	},
	module: {
		preLoaders: [
			{
				exclude: /src\//,
				loader: 'source-map'
			}
		],
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.s?css$/,
				loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[local]__[hash:base64:5]!postcss!sass?sourceMap!toolbox')
			}
		]
	},
	toolbox: {
		theme: path.join(__dirname, 'src/toolbox-theme.scss')
	},
	postcss: [autoprefixer],
	plugins: ([
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('style.css', { allChunks: true }),
		new webpack.optimize.DedupePlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]).concat(process.env.ENVIRONMENT==='production' ? [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			output: { comments: false }
		})
	] : []),
	stats: { colors: true },
	devtool: 'source-map',
	devServer: {
		port: process.env.PORT || 8080,
		contentBase: './src',
		historyApiFallback: true
	}
};
