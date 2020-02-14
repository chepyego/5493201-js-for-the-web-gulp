const gulp = require('gulp');

gulp.task('processJS', async() => {
    gulp.src('*.js')
    .pipe(gulp.dest('dist'));
});