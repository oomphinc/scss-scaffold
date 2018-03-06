// -------------------------------------
//
//   Gulpfile
//
// -------------------------------------
//
// Available tasks:
//   `gulp`
//   'gulp browser-sync'
//   `gulp build`
//   `gulp build:dev`
//   `gulp clean`
//   `gulp clean:css`
//   `gulp compile:sass`
//   `gulp lint:js`
//   `gulp lint:css`
//   `gulp serve`
//   `gulp test:css`
//   `gulp watch`
//   `gulp watch:js`
//   `gulp watch:sass`
//
// -------------------------------------

// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp              : The streaming build system
// gulp-autoprefixer : Prefix CSS
// gulp-concat       : Concatenate files
// gulp-clean-css    : Minify CSS
// gulp-load-plugins : Automatically load Gulp plugins
// gulp-parker       : Stylesheet analysis tool
// gulp-plumber      : Prevent pipe breaking from errors
// gulp-rename       : Rename files
// gulp-sass         : Compile Sass
// gulp-sass-glob    : Provide Sass Globbing
// gulp-sass-lint    : Lint Sass
// gulp-size         : Print file sizes
// gulp-sourcemaps   : Generate sourcemaps
// gulp-uglify       : Minify JavaScript with UglifyJS
// gulp-util         : Utility functions
// gulp-watch        : Watch stream
// browser-sync      : Device and browser testing tool
// del               : delete
// eslint            : JavaScript code quality tool
// run-sequence      : Run a series of dependent Gulp tasks in order
// -------------------------------------

// -------------------------------------
//   Front-End Dependencies
// -------------------------------------
// node-sass             : Wrapper around libsass
// node-sass-import-once : Custom importer for node-sass that only allows a file to be imported once
// -------------------------------------

/* global require */

var gulp = require('gulp');
// Setting pattern this way allows non gulp- plugins to be loaded as well.
var plugins = require('gulp-load-plugins')({
  pattern: '*',
  rename: {
    'node-sass-import-once': 'importOnce',
    'gulp-sass-glob': 'sassGlob',
    'run-sequence': 'runSequence',
    'gulp-clean-css': 'cleanCSS',
    'gulp-eslint': 'gulpEslint',
    'gulp-babel': 'babel',
    'gulp-util': 'gutil',
    'gulp-scss-lint': 'scsslint'
  }
});

// Used to generate relative paths for style guide output.
var path = require('path');

// These are used in the options below.
var paths = {
  styles: {
    source: 'sass/',
    destination: 'css/'
  },
  scripts: {
    source: 'js/src',
    destination: 'js/dist'
  },
  images: 'img/'
};

// These are passed to each task.
var options = {

  // ----- Browsersync ----- //

  browserSync: {
    // Put your local site URL here to prevent Browsersync
    // from prompting you to add additional scripts to your page.
    // proxy: {
    //   target: 'http://local.example.com'
    // },
    open: 'external',
    xip: true,
    logConnections: true
  },

  // ----- CSS ----- //

  css: {
    files: path.join(paths.styles.destination, '**/*.css'),
    file: path.join(paths.styles.destination, '/styles.css'),
    destination: path.join(paths.styles.destination)
  },

  // ----- Sass ----- //

  sass: {
    files: path.join(paths.styles.source, '**/*.scss'),
    file: path.join(paths.styles.source, 'styles.scss'),
    destination: path.join(paths.styles.destination)
  },

  // ----- JS ----- //
  js: {
    files: path.join(paths.scripts.source, '**/*.js'),
    destination: path.join(paths.scripts.destination)
  },

  // ----- Images ----- //
  images: {
    files: paths.images + '**/*.{png,gif,jpg,svg}',
    destination: paths.images
  },

  // ----- eslint ----- //
  jsLinting: {
    files: {
      theme: [
        paths.scripts + '**/*.js',
        '!' + paths.scripts + '**/*.min.js'
      ],
      gulp: [
        'gulpfile.js',
        'gulp-tasks/**/*'
      ]
    }

  }

};

// Tasks
require('./gulp-tasks/browser-sync')(gulp, plugins, options);
require('./gulp-tasks/build')(gulp, plugins, options);
require('./gulp-tasks/clean')(gulp, plugins, options);
require('./gulp-tasks/clean-css')(gulp, plugins, options);
require('./gulp-tasks/compile-sass')(gulp, plugins, options);
require('./gulp-tasks/compile-js')(gulp, plugins, options);
require('./gulp-tasks/default')(gulp, plugins, options);
require('./gulp-tasks/lint-js')(gulp, plugins, options);
require('./gulp-tasks/lint-css')(gulp, plugins, options);
require('./gulp-tasks/serve')(gulp, plugins, options);
require('./gulp-tasks/test-css')(gulp, plugins, options);
require('./gulp-tasks/watch')(gulp, plugins, options);
