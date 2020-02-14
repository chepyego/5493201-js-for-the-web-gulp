const gulp = require('gulp');
const jshint = require('gulp-jshint');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const runSequence = require('run-sequence');

gulp.task('processJS', async() => {
    gulp.src('*.js')
      .pipe(jshint({
          esversion: 8
      }))
      .pipe(jshint.reporter('default'))
      .pipe(babel({
          presets: ['env']
      }))
      .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('babelPolyfill', async() => {
    gulp.src('node_modules/babel-polyfill/browser.js')
      .pipe(gulp.dest('dist/node_modules/babel-polyfill'));
  });

  gulp.task('default', (callback) => {
      runSequence(['processJS', 'babelPolyfill'], callback);
      callback();
  });