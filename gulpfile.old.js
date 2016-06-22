'use strict';

const gulp = require('gulp');
const del = require('del');
const path = require('path');
const browserSync = require('browser-sync').create();
const cssfont64 = require('gulp-cssfont64');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var assets  = require('postcss-assets');
const cssnano = require('cssnano');
var uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');


gulp.task('compress', function() {
  return gulp.src('frontend/assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/js/'));
});

gulp.task('imagemin', function() {
	return gulp.src('frontend/assets/img/**/*.*')
		.pipe(imagemin())
		.pipe(gulp.dest('public/img/'))
});

gulp.task('styles', function() {
	var processors = [
        autoprefixer({browsers: ['last 2 version']}),
				assets({
					loadPaths: ['./public/img/'],
					relativeTo: './styles/'
				}),
				cssnano()
    ];
  return gulp.src('frontend/styles/*.*')
			.pipe(postcss(processors))
      .pipe(gulp.dest('public/styles'))
      .pipe(gulp.dest('backend/public/styles'));
});

gulp.task('assets', function() {
  return gulp.src('frontend/assets/**/*.*', {since: gulp.lastRun('assets')})
      .pipe(gulp.dest('public'))
      .pipe(gulp.dest('backend/public'));
});

gulp.task('fonts', function () {
	return gulp.src('frontend/fonts/*.woff')
		.pipe(cssfont64())
		.pipe(gulp.dest('public/styles/fonts'))
    .pipe(gulp.dest('backend/public/styles/fonts'));
});

gulp.task('clean', function() {
  return del(['public']);
        del(['backend/public']);
});

gulp.task('build', gulp.series('clean', gulp.parallel('styles'), 'assets', 'fonts', 'compress', 'imagemin'));

gulp.task('serve', function() {
  browserSync.init({
    server: 'public'
  });

  browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev',
    gulp.series(
        'build',
        gulp.parallel(
            'serve',
            function() {
              gulp.watch('frontend/styles/**/*.css', gulp.series('styles'));
              gulp.watch('frontend/assets/**/*.*', gulp.series('assets', 'compress'));
            }
        )
    )
);
