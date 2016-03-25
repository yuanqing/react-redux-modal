import babel from 'gulp-babel';
import del from 'del';
import gulp from 'gulp';
import runSequence from 'run-sequence';
import sourcemaps from 'gulp-sourcemaps';

gulp.task('build', (callback) => {
  runSequence(
    'build:clean',
    'build:build',
    callback
  );
});

gulp.task('build:clean', () => {
  return del('lib');
});

gulp.task('build:build', () => {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('lib'));
});
