// Theme, Sass, & CSS directories
var theme_dir   = '../themes/custom_template',
    sass_dir    = theme_dir + '/sass/sass/',
    css_dir     = theme_dir + '/sass/stylesheets';

// Define Gulp and auto-plugin loader
var gulp        = require('gulp'),
    plugins     = require('gulp-load-plugins')();

// Returns task.js file
function getTask(task) {
    return require('./tasks/' + task)(gulp, plugins, theme_dir, sass_dir, css_dir);
}

gulp.task('all-wp-images', getTask('gulp-all-wp-images.js'));
gulp.task('images', getTask('gulp-images.js'));
gulp.task('js', getTask('gulp-js.js'));
gulp.task('jsp', getTask('gulp-jsp.js'));
gulp.task('production', getTask('gulp-production.js'));
gulp.task('styles', getTask('gulp-styles.js'));
gulp.task('watch', getTask('gulp-watch.js'));

// Gulp default task, watches changes in SASS and compresses images -- runs with 'gulp'
gulp.task('default', ['watch']);