var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('*.html', ['reload']);
});

gulp.task('reload', function() {
  return gulp
    .src('*.html')
    .pipe(livereload());
});
