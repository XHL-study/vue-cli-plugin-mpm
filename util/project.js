const FileUtil = require('./file.js');
module.exports = {
	create(sourceDir, toDir, filters) {
		FileUtil.copyAll(sourceDir, toDir, filters = ['_index.js']);
	},
	remove() {

	},
	move() {

	}
}
