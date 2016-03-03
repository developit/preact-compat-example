import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin-webpack-2';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import fs from 'fs';

const ENV = String(process.env.ENVIRONMENT || process.env.NODE_ENV || 'development').toLowerCase();
const PROD = ENV==='production';

let babelrc = {};
try { babelrc = JSON.parse(fs.readFileSync('.babelrc')); } catch(e) {}

export default {
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
		},
		packageMains: ['jsnext:main', ['jsnext','main'], 'main'],
		modules: ['node_modules']
	},

	module: {
		// preLoaders: [
		// 	{
		// 		exclude: /src\//,
		// 		loader: 'source-map'
		// 	}
		// ],
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					...babelrc,
					presets: [
						'es2015-native-modules',
						...(babelrc.presets || []).filter( p => !p.match(/^es2015/i) )
					]
				}
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
		new webpack.LoaderOptionsPlugin({
			minimize: PROD,
			debug: !PROD
		}),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('style.css', { allChunks: true }),
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: JSON.stringify(ENV) }
		}),
		new webpack.optimize.DedupePlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]).concat(PROD ? [
		new webpack.optimize.UglifyJsPlugin({
			mangle: false,
			compress: {
				warnings: false,
				dead_code: true,
				evaluate: true,
				pure_getters: true,
				pure_funcs: ['babelHelpers.classCallCheck']
			},
			output: { comments: false }
		})
	] : []),

	stats: { colors: true },

	devtool: PROD ? 'hidden-source-map' : 'inline-source-map',

	devServer: {
		port: process.env.PORT || 8080,
		contentBase: './src',
		historyApiFallback: true
	}
};
