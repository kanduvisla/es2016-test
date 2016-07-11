var gulp = require("gulp");
var fs = require("fs")
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var watch = require("gulp-watch");
var gutil = require("gulp-util");
var plumber = require("gulp-plumber");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var babelify = require('babelify');

/**
 * Default task
 */
// gulp.task("default", function () {
//     return gulp.src("src/**/*.js")
//         .pipe(plumber())
//         .pipe(sourcemaps.init())
//         .pipe(babel())
//         .on('error', (err) => {
//             gutil.log(gutil.colors.red('[Compilation Error]'));
//             gutil.log(gutil.colors.red(err.message));
//         })
//         .pipe(sourcemaps.write("."))
//         .pipe(gulp.dest("dist"));
// });

/**
 * Browserify task
 */
// gulp.task("browserify", function () {
//     var b = browserify({
//         entries: './dist/www.js',
//         debug: true
//     });
//
//     return b.bundle()
//         .pipe(source('app.js'))
//         .pipe(buffer())
//         .pipe(sourcemaps.init({loadMaps: true}))
//         // .pipe(uglify())
//         .on('error', gutil.log)
//         .pipe(sourcemaps.write('./'))
//         .pipe(gulp.dest('./www/js/'));
// });

/**
 * Sass task
 */
gulp.task('sass', function() {
    return gulp.src('./www/scss/screen.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            precision: 10,
            onError: console.error.bind(console, 'Sass error:')
        }))
        .pipe(sourcemaps.write({includeContent: false}))
        .pipe(gulp.dest('./www/css'));
});

/**
 * Watcher
 */
gulp.task("watch", function () {
    // gulp.watch("src/**/*.js", ['default']);
    // gulp.watch("dist/**/*.js", ['browserify']);
    gulp.watch("www/scss/**/*.scss", ['sass']);

  gulp.watch("./src/www/**/*.js", function(evt){
    console.log("Change detected in " + evt.path)
    browserify({ debug: true })
      .transform(babelify, {presets: ["es2015", "stage-0"]})
      .require("./src/www/index.js", { entry: true })
      .bundle()
      .on("error", function (err) { console.log("Error: " + err.message) })
      .pipe(fs.createWriteStream("./dist/www/index.js"))
  })

  gulp.watch("./src/server/**/*.js", function(evt){
    console.log("Change detected in " + evt.path)
    browserify({ debug: true })
      .transform(babelify, {presets: ["es2015", "stage-0"]})
      .require("./src/server/index.js", { entry: true })
      .bundle()
      .on("error", function (err) { console.log("Error: " + err.message) })
      .pipe(fs.createWriteStream("./dist/server/index.js"))
  })
});