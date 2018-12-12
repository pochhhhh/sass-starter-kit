'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

gulp.task('test', function(done){

  console.log('hello');

  done(); /* In Gulp 4, a function must call the callback parameter to signal completion
  otherwise an error will be thrown showing 'Did you forget to signal async completion?'*/
});


gulp.task('sass', function (done) {

  console.log('You made a change to a SASS file');


  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream({once: true})); //Refresh / Inject the browser with new CSS

    done();

});

gulp.task('watch', function(done){

  //Run sass task here and only once the sass task is complete, THEN start the server



  //Start server

  browserSync.init({
    server: {
        baseDir: "./"
    }
});

  //Gulp automated tasks

  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./*.js').on('change', browserSync.reload);
  gulp.watch('./sass/**/*.scss').on('change', gulp.series('sass'));

  done();

});
