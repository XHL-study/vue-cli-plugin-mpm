# 0.2.2
	```
	1.更新使用说明
	``` 
# 0.2.1
	```
	1.更改运行/生产命令	
	2.增加默认环境配置文件
	``` 
 * 运行测试
 * use npm run serve --project=[project] --port=[port] run your project
 
 * 运行打包
 * use npm run build --project=[project]
	
# 0.1.8
	```
	完善默认vue项目配置
	```
# 0.1.7
	```
	完善默认vue项目配置
	```
# 0.1.6
	```
	初始化默认vue项目配置
	```
# 0.1.5
	```
	增加默认vue.config.js配置
	```
# 0.1.4
	```
	change process.env load rule
	Add annotation support
	
		 const env = require('qs').parse(envStr,{ delimiter: '\r\n' });
		 Object.assign(process.env,env);
	to
		const env = envStr.match(/(.+)=(.+)/ig);
		env.forEach(itm => {
			itm = itm.split('=');
			process.env[itm[0].trim()] = itm[1].trim();
		})
	```
# 0.1.3
  ``` 
	1.publicPath replace
		if(options.publicPath == './') options.publicPath = ''
  ```
  ``` 
	2.	
		require('qs').parse(envStr,{ delimiter: '\r\n' })
  ```
# 0.1.2
  * 增加 子项目 环境配置文件支持
  * .env.development .env.production
# 0.1.1
  * 无

# 0.1.0
  * Increase usage tutorial

# 0.0.9
  * add some console log description

# 0.0.6
  * 增加子项目的单独的vue.config.js配置文件
