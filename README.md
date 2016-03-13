# 后台管理系统-前端

# 项目简述

* 1.搭建Nond.js环境，安装下载关于gulp下相关插件包到本地目录。
* 2.构建NETCOTSS前端页面目录结构，规划前端架构。
* 3.拆分前端静态页面，划分出视图层，控制层以及数据层。
* 4.编写关于应用app的入口文件，构建路由，分发任务到各控制器、数据层。
* 5.分别编写控制器、以及数据模型的数据交互，设计API接口与后台数据的调用，调用ng-grid表格UI插件。
* 6.编写DOM操作相关的用户交互效果。
* 7.编写Gulp自动化前端架构，处理前端的优化（代码和图片的压缩，代码合并，代码混淆，语法检测，浏览器自动更新，单元测试，整体测试等）功能性代码。


# 环境搭建
## node.js环境


## gulp环境
* 1. 安装gulp

	npm install -g gulp

	如果报Error: EACCES, open ‘/Users/xxx/xxx.lock错误。先执行：sudo chown -R (whoami)HOME/.npm;

	如果使用npm安装插件太慢（被墙），可执行 npm install -g cnpm –registry=https://registry.npm.taobao.org,先安装cnpm, 之后再安装插件时用cnpm安装cnpm install gulp
	
* 2. 手动安装各种插件

npm install –save gulp //本地使用gulp
npm install –save gulp-imagemin //压缩图片
npm install –save gulp-minify-css //压缩css
npm install –save gulp-ruby-sass //sass
npm install –save gulp-jshint //js代码检测
npm install –save gulp-uglify //js压缩
npm install –save gulp-concat //文件合并
npm install –save gulp-rename //文件重命名
npm install –save png-sprite //png合并
npm install –save gulp-htmlmin //压缩html
npm install –save gulp-clean //清空文件夹
npm install –save browser-sync //文件修改浏览器自动刷新
npm install –save gulp-shell //执行shell命令
npm install –save gulp-ssh //操作远程机器
npm install –save run-sequence //task顺序执行

或者根据package.json 自动安装。把package.json拷贝到自己的工程目录下，进入目录，执行:npm install

* 3.目录划分

>目录结构  
>>dist-----------------------用于生产环境下的目录 
>>>css-----------------------生产环境下的css目录  
>>>>平衡二叉树  
>>>>>满二叉树  
>>docs-----------------------一些存放文档说明、原型设计类目录
>>node_modules---------------npm下存放的包管理文件（由系统生成）
>>src (也作app)---------------应用文件，主要作为开发环境
>>>>css----------------------应用app样式文件目录
>>>>data---------------------应用app模拟后台数据目录
>>>>images-------------------应用app图片资源目录
>>>>js-----------------------应用app中的javascript目录
>>>>>animations--------------动画类目录 
>>>>>controllers-------------控制器文件目录
>>>>>directives--------------指令文件目录
>>>>>filters-----------------过滤器目录
>>>>>services----------------服务类目录
>>>>>app.js------------------应用入口路由文件
>>>>libs---------------------应用app框架资源目录
>>>>>framework---------------框架资源目录
>>>>>>angular-x.x.x----------angularJS框架
>>>>>>bootstrap-x.x.x--------bootstrap框架
>>>>>>ng-grid-x.x.x----------angularJS关于表格UI框架
>>>>>>jquery-x.x.x-----------jquery框架
>>>>tpls---------------------应用app视图文件(静态HTML文件)目录
>>>>>>(可根据实际需要划分目录)-----模板文件子目录
>>>>index.html---------------应用app入口文件
>>test-----------------------应用app测试类文件
>>>>e2e----------------------用户真实场景测试目录
>>>>unit---------------------单元测试目录


* 4.代码编写顺序
	* 1）、运行 npm init ，配置package.json 包文件，以便于以后项目中的包依赖关系,即可通过npm install 安装相关包.
	* 2）、编写app.js路由配置文件，以分发到各个控制器、数据模型中处理事务。
	* 3）、编写相关的控制器，抽离出service服务。
	* 4）、编写相关指令文件，控制DOM操作元素。
	* 5）、编写其它相关文件。
	* 6）、编写gulp测试文件gulpfile.js用于对项目的架构，应用于正式环境的部署文面。
	* 7）、编写单元测试文件与用户真实测试环境文件。
	

