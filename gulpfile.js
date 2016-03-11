var gulp = require("gulp");
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

/**
 * Default task
 */
gulp.task("default", function () {
    return gulp.src("src/**/*.js")
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel())
        .on('error', (err) => {
            gutil.log(gutil.colors.red('[Compilation Error]'));
            gutil.log(gutil.colors.red(err.message));
        })
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist"));
});

/**
 * Browserify task
 */
gulp.task("browserify", function () {
    var b = browserify({
        entries: './dist/www.js',
        debug: true
    });

    return b.bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        // .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./www/js/'));
});

/**
 * Watcher
 */
gulp.task("watch", function () {
    gulp.watch("src/**/*.js", ['default']);
    gulp.watch("dist/www.js", ['browserify']);
});