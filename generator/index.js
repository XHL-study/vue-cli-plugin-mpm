module.exports = api => {
	api.render('./template');
	api.extendPackage({
		scripts: {
			'mpm-create': 'vue-cli-service mpm-create',
			// 'mpm-delete': 'vue-cli-service mpm-delete',
			// 'mpm-move': 'vue-cli-service mpm-move',
			"test-serve": "vue-cli-service serve --mode test-serve",
			"test-build": "vue-cli-service build --mode test-build",
		},
		dependencies: {
			"axios": "^0.21.1",
			"core-js": "^3.6.5",
			"vant": "^2.12.25",
			"vue": "^2.6.14",
			"vue-router": "^3.5.2",
			"amfe-flexible": "^2.2.1",
			"vue-template-compiler": "^2.6.14",
			"qs":"^6.10.1"
		},
		devDependencies: {
			"compression-webpack-plugin": "^5.0.1",
			"webpack-bundle-analyzer": "^4.4.0"
		}
	});
}
