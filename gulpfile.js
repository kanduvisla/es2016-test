var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var watch = require("gulp-watch");
var gutil = require("gulp-util");
var plumber = require("gulp-plumber");

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

gulp.task("watch", function () {
    gulp.watch("src/**/*.js", ['default']);
});