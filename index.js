const registerCommand = require('./util/registerCommand.js');
const ConsoleColorUtil = require('./util/console-colors.js');
const path = require('path');
module.exports = (api, options) => {
	if (!registerCommand.isFromMPM()) { //运行，编译
		const config = require('./config/index.js');

		let vueOptions = config.loadVueConfigOptions();
		//加载 项目vue.config.js
		options = Object.assign(options, vueOptions); //覆盖 配置项
		console.log(ConsoleColorUtil.yellow,
			'Mandatory overwrite vue.config.js options [pages,outputDir,devServer.host,devServer.port]');
		if (options.publicPath == './') options.publicPath = '';
		try {
			const envStr = require('fs').readFileSync(path.join(process.cwd(), config.path(
				`${config.getProjectName()}/.env.${process.env.NODE_ENV}`)), {
				encoding: 'utf-8'
			});
			// const env = require('qs').parse(envStr,{ delimiter: '\r\n' });
			// Object.assign(process.env,env);
			const env = envStr.match(/(.+)=(.+)/ig);
			env.forEach(itm => {
				itm = itm.split('=');
				process.env[itm[0].trim()] = itm[1].trim();
			})
		} catch (e) {}

		//强制覆盖 选项
		options.pages = config.getPages();
		options.outputDir = config.getOutputDir();
		options.devServer.host = config.getHost();
		options.devServer.port = config.getPort();
	} else //注册 自定义命令
		registerCommand(api);
}
