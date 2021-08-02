const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
	devServer: {
		host: '0.0.0.0',
		port: 8080,
		before: app => {},
		proxy: {
			'/api': {
				target: 'http://192.168.3.168:82/',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/api'
				}
			},
		}
	},
	chainWebpack: (config) => {
		config.plugins.delete('prefetch')
		config.module
			.rule("images")
			.use("url-loader")
			.loader("url-loader")
			.tap(options => Object.assign(options, {
				limit: 1
			}))
	},
	configureWebpack: (config) => {
		//分析
		if (process.env.NODE_ENV != 'production') {
			config.plugins = [...config.plugins,
				new BundleAnalyzerPlugin({
					analyzerMode: 'server',
					analyzerHost: '127.0.0.1',
					analyzerPort: 7775,
					reportFilename: 'report.html',
					defaultSizes: 'parsed',
					openAnalyzer: true,
					generateStatsFile: false,
					statsFilename: 'stats.json',
					statsOptions: null,
					logLevel: 'info'
				}),
			];
		} else {
			config.plugins = [
				...config.plugins,
				new CompressionPlugin({
					algorithm: 'gzip', // 使用gzip压缩
					test: /\.js$|\.html$|\.css$/, // 匹配文件名
					filename: '[path].gz[query]', // 压缩后的文件名(保持原文件名，后缀加.gz)
					minRatio: 1, // 压缩率小于1才会压缩
					threshold: 10240, // 对超过10k的数据压缩
					deleteOriginalAssets: false, // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
				})
			]
		}

		//分块
		// config.optimization.splitChunks.cacheGroups = {
		// 	swiper: {
		// 		test: /[\\/]swiper[\\/]/,
		// 		name: 'swiper',
		// 		chunks: 'all',
		// 		priority: 0,
		// 		enforce: true,
		// 	},
		// 	vant: {
		// 		test: /[\\/]vant[\\/]/,
		// 		name: 'vant',
		// 		chunks: 'initial',
		// 		priority: 230,
		// 		enforce: true,
		// 	},
		// 	vue: {
		// 		test: /[\\/](vue|vuex|vue-lazyload)[\\/]/,
		// 		name: 'vue',
		// 		chunks: 'all',
		// 		priority: 0,
		// 		enforce: true,
		// 	},
		// 	app: {
		// 		name: 'app',
		// 		test: /[\\/]node_modules[\\/]/,
		// 		priority: -10,
		// 		minChunks: 2,
		// 		chunks: 'initial',
		// 	},
		// 	common: {
		// 		name: 'chunk-common',
		// 		priority: -20,
		// 		minChunks: 2,
		// 		chunks: 'initial',
		// 	},
		// };
	},
}
