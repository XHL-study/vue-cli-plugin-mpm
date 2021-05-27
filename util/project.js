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
	move() {// 移动
		/**
		 * chainWebpack: config => {
			let paths = [];


			let timer = null;
			let debounce = () => {
				if (timer) clearTimeout(timer);

				timer = setTimeout(() => {
					console.log('dddd',paths);
				}, 1500);
			};
			config.module
				.rule('compile')
				.test((e) => {
					if (!e.includes('node_modules')) {
						paths.push(e);
						debounce();
					}
				})
				.end()
		},
		 */
	}
}
