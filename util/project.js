const FileUtil = require('./file.js');
const fs = require('fs');
module.exports = {
	create(sourceDir, toDir, filters) {
		if (fs.existsSync(toDir)) {
			const ConsoleColorsUtil = require('./console-colors.js');
			console.log(ConsoleColorsUtil.red, `${toDir} 已存在`);
			return;
		};
		FileUtil.copyAll(sourceDir, toDir, filters = ['_index.js']);
	},
	remove() {

	},
	move() {

	}
}
