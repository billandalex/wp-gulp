//
// Main function: Gulp Styles
// Compile SASS files, minify CSS, add sourcemap
//
module.exports = function (gulp, plugins, theme_dir, sass_dir, css_dir) {
    return function () {
        var onError = require('./error.js').onError;
        return gulp.src(sass_dir + "*.+(scss|sass)")
          .pipe(plugins.sourcemaps.init())
          .pipe(plugins.sassGlob())
          .pipe(plugins.sass(function () {
            this.emit("error", new Error("Something happend: Sass crashed!"))}))
            .on("error", plugins.notify.onError({
              message: "Oh shit, error on line: <%= error.line %> ",
              title: "Even coding rock-stars make mistakes"
            }))
          .pipe(plugins.plumber({errorHandler: onError}))
          .pipe(plugins.autoprefixer("last 3 version","safari 5", "ie 8", "ie 9", "ie 10", "ie 11"))
          .pipe(plugins.minifyCss())
          .pipe(plugins.sourcemaps.write()) // for external file add ('../maps')
          .pipe(gulp.dest(css_dir))
          .resume();
    };
};