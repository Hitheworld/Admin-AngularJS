/**
 * 
 */
var gulp = require('gulp');
    
// 载入插件
var minifycss = require('gulp-minify-css'),	//缩小化(minify)CSS
	uglify = require('gulp-uglify'),//js压缩
	concat = require('gulp-concat'),//合并文件
	rename = require('gulp-rename'),//重命名
	clean = require('gulp-clean'),	//清理档案
	minhtml = require('gulp-htmlmin'), // html压缩
    jshint = require('gulp-jshint'),//Javascript代码验证工具
    browserSync = require('browser-sync').create(),
    scp = require('gulp-scp2'),
    fs = require('fs'),
    imagemin = require('gulp-imagemin'),//图片压缩
    rev = require('gulp-rev'),
    revReplace = require('gulp-rev-replace'),
    userref = require('gulp-useref'),
    filter = require('gulp-filter'),  //文件过滤
    csso = require('gulp-csso');  //css优化效果
    
    
//html
gulp.task('html', function(){
	return gulp.src('src/*.html')
		.pipe(minhtml({collapseWhitespace: true}))
		.pipe(gulp.dest('dist'));
});

//css
gulp.task('css', function(argument){
	gulp.src('src/css/*.css')
		.pipe(concat('merge.css'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/css/'));
});


//js
gulp.task('js', function(argument){
	gulp.src('src/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(concat('merge.js'))
		.pipe(rename({
			suffix:'.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'));
});


//image
gulp.task('img', function(argument){
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images/'));
});

//浏览器同步
gulp.task('reload', function(){
	browserSync.reload();
});

//服务器容器
gulp.task('server', function(){
	browserSync.init({
		server: {
			baseDir: "./src"
		}
	});
	gulp.watch(['**/*.css', '**/*.html'], ['reload', 'scp']);
});


//scp 发布到远程服务器
gulp.task('scp', function(){
	return gulp.src('src/**/*')
		.pipe(scp({
			host:'121.40.201.213',
			username: 'root',
			privateKey: fs.readFileSync('/Users/winga/.shh/id_rsa'),
			dest: '/var/www/fe.jirengu.com',
			watch: function(client){
				client.on('write', function(o){
					console.log('write %s', o.destination);
				})
			}
		}))
		.on('error', function(err){
			console.log(err);
		});
});


//
gulp.task('index', function(){
	var jsFilter = filter('**/*.js', {restore: true});
	var cssFilter = filter('**/*.css', {restore: true});
	
	var userefAssets = useref.assets();
	
	return gulp.src('src/index.html')
		.pipe(userefAssets)  //Concatenate with gulp-useref
		.pipe(jsFilter)
		.pipe(uglify())   //Minify any javascript sources
		.pipe(jsFilter.restore)
		.pipe(cssFilter)
		.pipe(csso())    //Minify any css sources
		.pipe(cssFilter.restart())
		.pipe(rev())
		.pipe(userefAssets.restore())
		.pipe(useref())
		.pipe(revReplace())
		.pipe(gulp.dest('dist'));
});

//清空文件
gulp.task('clear', function(){
	gulp.src('dist/*', {
		read: false
	})
		.pipe(clean());
});

//批任务
gulp.task('build', ['html', 'css', 'js', 'img','reload', 'scp']);
