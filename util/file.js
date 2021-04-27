const fs = require('fs');
const path = require('path');
const ConsoleColorsUtil = require('./console-colors.js');

module.exports = {
	copyAll(sourceDir, toDir, filters = ['_index.js']) {
		//初始化项目目录
		fs.mkdir(toDir, {
			recursive: true
		}, (err) => {
			if (err) {
				console.log(ConsoleColorsUtil.red, `mkDir err ${toDir} ${err}`);
			} else {
				console.error(ConsoleColorsUtil.green, `mkDir success ${toDir}`);
			}
		});
		//复制模板文件
		mkDirAndFiles(sourceDir, toDir, filters);
	},
}

function readFiles(path, files = []) {
	return new Promise((resolve, reject) => {
		fs.readdir(path, {
			withFileTypes: true
		}, (err, files) => {
			resolve(files || []);
		})
	})
}

function mkDirAndFiles(fromDir, toDir, filters) {
	readFiles(fromDir).then((files) => {
		files = files.filter(item => !filters.includes(item.name));
		files.forEach(item => {
			const cfd = path.join(fromDir, item.name);
			const ctd = path.join(toDir, item.name);
			if (item.isDirectory()) {
				fs.mkdir(ctd, {
					recursive: true
				}, (err) => {
					if (err) {
						console.log(ConsoleColorsUtil.red,
							`mkDir err ${toDir}\\${item.name} ${err}`)
					} else {
						console.error(ConsoleColorsUtil.green,
							`mkDir success ${toDir}\\${item.name}`)
						mkDirAndFiles(cfd, ctd, filters);
					}
				});
			} else if (item.isFile()) {
				fs.copyFile(cfd, ctd, (err) => {
					if (err)
						console.error(
							`copyFile err ${fromDir}\\${item.name} ==> ${toDir}\\${item.name}  ${err}`
							)
					else {
						writeTIPS();
						console.error(ConsoleColorsUtil.green,
							`copyFile success ${toDir}\\${item.name}`)
					}
				});
			}
		});
	})
}


let _tim;

function writeTIPS() {
	clearTimeout(_tim);
	_tim = setTimeout(() => {
		console.log(ConsoleColorsUtil.yellow, 'plase use npm run serve -- -[project] -[port] run your project');
	}, 500);
}
