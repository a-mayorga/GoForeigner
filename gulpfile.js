var gulp = require('gulp');

gulp.task('angular', function() {
  gulp.src(['node_modules/angular/**/*']).pipe(gulp.dest('assets/libs/angular'));
});

gulp.task('angular-animate', function() {
  gulp.src(['node_modules/angular-animate/**/*']).pipe(gulp.dest('assets/libs/angular-animate'));
});

gulp.task('angular-file-model', function() {
  gulp.src(['node_modules/angular-file-model/**/*']).pipe(gulp.dest('assets/libs/angular-file-model'));
});

gulp.task('angular-toastr', function() {
  gulp.src(['node_modules/angular-toastr/**/*']).pipe(gulp.dest('assets/libs/angular-toastr'));
});

gulp.task('angular-ui-router', function() {
  gulp.src(['node_modules/angular-ui-router/**/*']).pipe(gulp.dest('assets/libs/angular-ui-router'));
});

gulp.task('font-awesome', function() {
  gulp.src(['node_modules/font-awesome/**/*']).pipe(gulp.dest('assets/libs/font-awesome'));
});

gulp.task('ngmap', function() {
  gulp.src(['node_modules/ngmap/**/*']).pipe(gulp.dest('assets/libs/ngmap'));
});

gulp.task('skeleton', function() {
  gulp.src(['node_modules/skeleton-css/**/*']).pipe(gulp.dest('assets/libs/skeleton'));
});

gulp.task('default', [
  'angular',
  'angular-animate',
  'angular-file-model',
  'angular-toastr',
  'angular-ui-router',
  'font-awesome',
  'ngmap',
  'skeleton'
]);
