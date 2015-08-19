'use strict';

<<<<<<< HEAD
var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

// Downloads the selenium webdriver
gulp.task('webdriver-update', $.protractor.webdriver_update);

gulp.task('webdriver-standalone', $.protractor.webdriver_standalone);

function runProtractor (done) {
  var params = process.argv;
  var args = params.length > 3 ? [params[3], params[4]] : [];

  gulp.src(path.join(conf.paths.e2e, '/**/*.js'))
    .pipe($.protractor.protractor({
      configFile: 'protractor.conf.js',
      args: args
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    })
    .on('end', function () {
      // Close browser sync server
      browserSync.exit();
      done();
    });
}

gulp.task('protractor', ['protractor:src']);
gulp.task('protractor:src', ['serve:e2e', 'webdriver-update'], runProtractor);
gulp.task('protractor:dist', ['serve:e2e-dist', 'webdriver-update'], runProtractor);
=======
var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var browserSync = require('browser-sync');

module.exports = function(options) {
  // Downloads the selenium webdriver
  gulp.task('webdriver-update', $.protractor.webdriver_update);

  gulp.task('webdriver-standalone', $.protractor.webdriver_standalone);

  function runProtractor (done) {

    gulp.src(options.e2e + '/**/*.js')
      .pipe($.protractor.protractor({
        configFile: 'protractor.conf.js'
      }))
      .on('error', function (err) {
        // Make sure failed tests cause gulp to exit non-zero
        throw err;
      })
      .on('end', function () {
        // Close browser sync server
        browserSync.exit();
        done();
      });
  }

  gulp.task('protractor', ['protractor:src']);
  gulp.task('protractor:src', ['serve:e2e', 'webdriver-update'], runProtractor);
  gulp.task('protractor:dist', ['serve:e2e-dist', 'webdriver-update'], runProtractor);
};
>>>>>>> 8faae942766808f1544e0d552197457ca274c18d
