const registerCommand = require('./util/registerCommand.js');

module.exports = (api, options) => {
	if (!registerCommand.isFromMPM()) { //运行，编译
		const config = require('./config/index.js');

		let vueOptions = config.loadVueConfigOptions();
		//加载 项目vue.config.js
		options = Object.assign(options, vueOptions); //覆盖 配置项

		//强制覆盖 选项
		options.pages = config.getPages();
		options.outputDir = config.getOutputDir();
		options.devServer.host = config.getHost();
		options.devServer.port = config.getPort();
	} else //注册 自定义命令
		registerCommand(api);
}
