import sass from 'gulp-sass';
import gulp from 'gulp';
import path from 'path';


gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass({
      paths: [ path.join(__dirname, 'sass', 'includes') ]
    }))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});
