var gulp = require('gulp');
var Dgeni = require('dgeni');
var dgeni_config = require('./docs/config');
var webserver = require("gulp-webserver");
var browserify = require('gulp-browserify');
var sequence = require('gulp-sequence');
var wait = require('gulp-wait');

gulp.task('build:doc-assets', function(){
    gulp.src(['./docs/app/**/*']).pipe(gulp.dest('./dist/docs/app'))
});

gulp.task('compile:doc-src', function(){
    gulp.src('dist/docs/app/js/app.js')
        .pipe(browserify( {insertGlobals:true} ))
        .pipe(gulp.dest('dist/docs/app/build'));
});

//Include all needed vendor CSS require by vendor libs
gulp.task('vendor-css', function () {
    return gulp.src([
        './app/vendor/angular-material/angular-material.css',
        './Content/font-awesome/css/*.css'
    ]).pipe(gulp.dest('./docs/release/app/vendor/css'));
});

gulp.task('run:dgeni', function(){
    var dgeni = new Dgeni([dgeni_config]);
    return dgeni.generate().then(function(docs){
        console.log(docs.length, 'docs generated');
    })
});

gulp.task('run:server', function(){
    gulp.src('./dist/docs')
        .pipe(webserver(
            {
                port:3030,
                open:'http://localhost:3030/'
            }
        ));
});

gulp.task('run:build-sequence', sequence('build:doc-assets','run:dgeni','compile:doc-src','run:server'));

gulp.task('default',["build:doc-assets", "run:dgeni","compile:doc-src", "run:server"]);
