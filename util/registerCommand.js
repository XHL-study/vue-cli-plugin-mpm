const path = require('path');
const configs = require('../config/index.js');
const projectUtil = require('./project.js');
const ConsoleColorUtil = require('./console-colors.js');

/**
 * @description 创建一个子项目
 * @param {Object} api
 * 'mpm-create': 'vue-cli-service mpm-create',
 */
function createProject(api) {
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
 * 	'mpm-delete': 'vue-cli-service mpm-delete',
 */
function deleteProject(api) {
	api.registerCommand(
		'mpm-delete', {
			description: 'mpm delete project with current',
			usage: 'vue-cli-service mpm-delete',
		},
		(a) => {
			console.log(ConsoleColorUtil.yellow, 'delete project unrealized');
		}
	)
}

/**
 * @description 移动项目
 * 	'mpm-move': 'vue-cli-service mpm-move',
 * 
 */

function moveProject(api) {
	api.registerCommand(
		'mpm-move', {
			description: 'mpm move project with current',
			usage: 'vue-cli-service mpm-move',
		},
		(a) => {
			console.log(ConsoleColorUtil.yellow, 'move project unrealized');
		}
	)
}

module.exports = (api) => {
	createProject(api);
	deleteProject(api);
	moveProject(api);
};

module.exports.isFromMPM = () => {
	return process.argv[2].includes('mpm-');
}
