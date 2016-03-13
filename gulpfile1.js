// 载入外挂
var gulp = require('gulp'),  
    sass = require('gulp-ruby-sass'),//编译Sass 
    autoprefixer = require('gulp-autoprefixer'), //Autoprefixer浏览器前缀处理
    minifycss = require('gulp-minify-css'),	//缩小化(minify)CSS
    jshint = require('gulp-jshint'),//Javascript代码验证工具
    uglify = require('gulp-uglify'),//丑化(Uglify)
    imagemin = require('gulp-imagemin'),//图片压缩
    rename = require('gulp-rename'),//重命名
    clean = require('gulp-clean'),	//清理档案
    concat = require('gulp-concat'),//拼接
    notify = require('gulp-notify'), //更动通知
    cache = require('gulp-cache'), //图片快取，只有更改过得图片会进行压缩
    livereload = require('gulp-livereload');  //即时重整(LiveReload)

// 样式
gulp.task('styles', function() {  
  return gulp.src('src/styles/main.scss')
    .pipe(sass({ style: 'expanded', }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/styles'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// 脚本
gulp.task('scripts', function() {  
  return gulp.src('src/scripts/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// 图片
gulp.task('images', function() {  
  return gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: 'Images task complete' }));
});

// 清理
gulp.task('clean', function() {  
  return gulp.src(['dist/styles', 'dist/scripts', 'dist/images'], {read: false})
    .pipe(clean());
});

// 预设任务
gulp.task('default', ['clean'], function() {  
    gulp.start('styles', 'scripts', 'images');
});

// 看手
gulp.task('watch', function() {

  // 看守所有.scss档
  gulp.watch('src/styles/**/*.scss', ['styles']);

  // 看守所有.js档
  gulp.watch('src/scripts/**/*.js', ['scripts']);

  // 看守所有图片档
  gulp.watch('src/images/**/*', ['images']);

  // 建立即时重整伺服器
  var server = livereload();

  // 看守所有位在 dist/  目录下的档案，一旦有更动，便进行重整
  gulp.watch(['dist/**']).on('change', function(file) {
    server.changed(file.path);
  });

});