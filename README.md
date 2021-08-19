 * 运行测试
 * use npm run serve --project=[project] --port=[port] run your project
 
 * 运行打包
 * use npm run build --project=[project]

 # 使用
 
 1. 创建子项目
 >	npm run mpm-create [project] 
 
 2. 其他配置项
	1. 支持子项目单独配置项
		1. vue.config.js 没有此文件，则使用项目目录下的vue.config.js
		2. postcss.config.js 同上
		3. 支持.env.[环境名称]配置，必须在项目根目录创建相应的 .env.[环境名称]文件