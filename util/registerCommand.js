const path = require('path');
const configs = require('../config/index.js');
const projectUtil = require('./project.js');

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

function deleteProjectWithName(api) {

}

module.exports = (api) => {
	createProjectWithName(api);
	deleteProjectWithName(api);
};

module.exports.isFromMPM = () => {
	return process.argv[2].includes('mpm-');
}
