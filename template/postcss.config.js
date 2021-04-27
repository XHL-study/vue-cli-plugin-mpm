module.exports = {
	plugins: {
		'autoprefixer': {
			browsers: ['Android >= 4.0', 'iOS >= 7']
		},
		'postcss-pxtorem': {
			rootValue: 37.5, //设计稿宽度除以10
			unitPrecision: 5, //转换为rem的精度(取小数点后x位)
			propList: ['*']
		}
	}
}