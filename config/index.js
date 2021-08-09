const path = require('path');
const qs = require('qs');
const ConsoleColorsUtil = require('../util/console-colors.js');

let customConfig;
try {
	customConfig = require(path.join(process.cwd(), 'mpm.config.js'));
} catch (e) {
	customConfig = {};
}
const template = require('../template/_index.js');
module.exports = {
	projectDir: customConfig.projectDir || 'src/projects', //子项目管理路径
	templateDir: customConfig.templateDir || template.templateDir, //模板地址
	projectNameKey: customConfig.projectNameKey || '--project',
	projectPortKey: customConfig.projectPortKey || '--port',
	getProjectName() {
		return this.getProcessArgv(this.projectNameKey);
	},
	getHost() {
		const IPConfigs = require('os').networkInterfaces();
		let host;
		for (let c in IPConfigs) {
			const netInfo = IPConfigs[c];
			for (let i = 0; i < netInfo.length; i++) {
				if (netInfo[i].family == 'IPv4' && !host && netInfo[i].address !== '127.0.0.1') {
					host = netInfo[i].address;
				}
			}
		}
		return host || 'localhost';
	},
	getPort() {
		return this.getProcessArgv(this.projectPortKey) || 8080;
	},
	getPages() {
		let projectName = this.getProjectName();
		if (!projectName) return this.getDefaultPages();

		let pages = {};
		let mainTmplateFile = templateFile = 'public/index.html',
			entryFile = this.path(`${projectName}/src/main.js`);
		if (!this.existsFileSync(entryFile)) {
			throw new Error(`file (${entryFile}) is not exists`);
		}
		templateFile = this.path(`${projectName}/public/index.html`);
		if (!this.existsFileSync(templateFile)) {
			templateFile = mainTmplateFile;
			console.warn(`using ${mainTmplateFile}`);
		}
		console.log(ConsoleColorsUtil.green, `using templateFile "${templateFile}"\n entryFile "${entryFile}"`);
		pages[projectName] = {
			entry: entryFile,
			template: templateFile,
			filename: 'index.html',
			title: projectName,
			chunks: ['chunk-vendors', 'chunk-common', projectName]
		}
		return pages;
	},
	getDefaultPages() {
		let pages = {};
		pages['main'] = {
			entry: 'src/main.js',
			template: 'public/index.html',
			filename: 'index.html',
			title: 'main',
			chunks: ['chunk-vendors', 'chunk-common', 'main']
		}
		return pages;
	},
	getOutputDir() {
		const projectName = this.getProjectName();
		if (projectName)
			return `dist/${projectName}`;
		return 'dist';
	},
	getProcessArgv(key) {
		try {
			return qs.parse(JSON.parse(process.env.npm_config_argv).original.join('&'))[key];
		} catch (e) {
			throw e;
		}
	},
	existsFileSync(file) {
		return require('fs').existsSync(file);
	},
	path(fileName) {
		return `${this.projectDir}/${fileName}`;
	},
	loadVueConfigOptions() {
		try {
			let options = null;
			const projectName = this.getProjectName();
			if (projectName) //子项目配置
				options = require(path.join(process.cwd(), this.path(`${projectName}/vue.config.js`)));
			return options;
		} catch (e) {
			return null;
		}
	}
}
