var gulp = require('gulp');
var connect = require('gulp-connect');
var opn = require('opn');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');




//Launch server
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port: 8000
  });
  opn('http://localhost:8000');
});

//html
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

//css
gulp.task('css', function () {
  gulp.src('./app/css/*.css')
    .pipe(connect.reload());
});

//js
gulp.task('js', function () {
  gulp.src('./app/js/*.js')
    .pipe(connect.reload());
});

//watch
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/css/*.css'], ['css']);
  gulp.watch(['./app/js/*.js'], ['js']);
});

//build
gulp.task('build', function() {
	gulp.src('./app/*.html')
  	.pipe(useref())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('dist'));
});

//default
gulp.task('default', ['connect', 'watch']);
