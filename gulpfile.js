var gulp = require('gulp');

gulp.task('angular', function() {
  gulp.src(['node_modules/angular/**/*']).pipe(gulp.dest('assets/libs/angular'));
});

gulp.task('angular-ui-router', function() {
  gulp.src(['node_modules/angular-ui-router/**/*']).pipe(gulp.dest('assets/libs/angular-ui-router'));
});

gulp.task('font-awesome', function() {
  gulp.src(['node_modules/font-awesome/**/*']).pipe(gulp.dest('assets/libs/font-awesome'));
});

gulp.task('skeleton', function() {
  gulp.src(['node_modules/skeleton-css/**/*']).pipe(gulp.dest('assets/libs/skeleton'));
});

gulp.task('default', [
  'angular',
  'angular-ui-router',
  'font-awesome',
  'skeleton'
]);