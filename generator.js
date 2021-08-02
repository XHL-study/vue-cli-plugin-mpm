module.exports = api => {
	api.extendPackage({
		scripts: {
			'mpm-create': 'vue-cli-service mpm-create',
			'mpm-delete': 'vue-cli-service mpm-delete',
			'mpm-move': 'vue-cli-service mpm-move',
		},
		devDependencies: {
			"compression-webpack-plugin": "^5.0.1",
			"webpack-bundle-analyzer": "^4.4.0"
		}
	})
}
