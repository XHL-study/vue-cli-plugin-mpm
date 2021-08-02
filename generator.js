module.exports = api => {
	api.extendPackage({
		scripts: {
			'mpm-create': 'vue-cli-service mpm-create',
			// 'mpm-delete': 'vue-cli-service mpm-delete',
			// 'mpm-move': 'vue-cli-service mpm-move',
		}
	})
}
