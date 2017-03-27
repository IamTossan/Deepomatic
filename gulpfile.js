var gulp = require('gulp');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var wiredep = require('wiredep').stream;
var sass = require('gulp-sass');


gulp.task('default', ['html', 'assets', 'css', 'js'], function(){

});

gulp.task('watch', function(){
  
  gulp.watch('./src/**/*.html', ['html']);
  gulp.watch('./src/styles/**/*.scss', ['css']);
  gulp.watch('./src/scripts/**/*.js', ['js']);
  
});

styles = [
  './src/styles/main.scss'
];

scripts = [
  './bower_components/jquery/dist/jquery.js',
  './bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
  './bower_components/angular/angular.js',
  './bower_components/angular-ui-router/release/angular-ui-router.js',
  './bower_components/angular-base64-upload/dist/angular-base64-upload.js',
  './src/scripts/app.js',
  './src/scripts/**/*.js'
];

gulp.task('html', function(){

  return gulp.src(['src/**/*.html'])
    .pipe(gulp.dest('dist/'));

});

gulp.task('assets', function(){

  return gulp.src(['src/images/*.*'])
    .pipe(gulp.dest('dist/images/'));

});

gulp.task('css', function(){

  return gulp.src(styles)
    .pipe(wiredep())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/styles/'))

});

gulp.task('js', function(){

  return gulp.src(scripts)
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts/'));

});