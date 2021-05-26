const path = require('path');
const configs = require('../config/index.js');
const projectUtil = require('./project.js');

/**
 * @description 创建一个子项目
 * @param {Object} api
 */
function createProjectWithName(api) {
	api.registerCommand(
		'mpm-create', {
			description: 'mpm create project with current',
			usage: 'vue-cli-service mpm-create',
		},
		(a) => {
			const propjectName = a._[0];
			const sourceDir = path.join(configs.templateDir);
			const toDir = path.join(configs.projectDir, propjectName);
			projectUtil.create(sourceDir, toDir, ['_index.js']);
		}
	)
}

/**
 * @description 删除一个子项目 未实现
 * @param {Object} api
 */
function deleteProjectWithName(api) {

}

module.exports = (api) => {
	createProjectWithName(api);
	deleteProjectWithName(api);
};

module.exports.isFromMPM = () => {
	return process.argv[2].includes('mpm-');
}
