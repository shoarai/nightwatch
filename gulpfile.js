var gulp = require('gulp');
var nightwatch = require('gulp-nightwatch');

gulp.task('default', function() {
  gulp.src('')
    .pipe(nightwatch({
      configFile: './Nightwatchfile.js'
    }));
});