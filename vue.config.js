const webpack = require('webpack')
module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	outputDir: "docs",
	productionSourceMap: false,
	pages: {
		login: {
			entry: "src/login/main.js"
		},
		index: {
			entry: "src/index/main.js"
		},
		qchan: {
			entry: "src/works/qchan/main.js"
		},
		cafe: {
			entry: "src/works/cafe/main.js"
		},
		yome: {
			entry: "src/works/yome/main.js"
		},
	},
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				$: 'jquery',
				jquery: 'jquery',
				'window.jQuery': 'jquery',
				jQuery: 'jquery'
			})
		],
		module: {
			rules: [{
				test: /\.(mov|mp4)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: 'movie/[name].[ext]'
					}
				}]
			}]
		}
	}
}