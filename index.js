const registerCommand = require('./util/registerCommand.js');

module.exports = (api, options) => {
	if (!registerCommand.isFromMPM()) {
		const config = require('./config/index.js');
		options.pages = config.getPages();
		options.outputDir = config.getOutputDir();
		options.devServer.host = config.getHost();
		options.devServer.port = config.getPort();
	} else
		registerCommand(api);
}
