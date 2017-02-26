/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var fileinclude = require('gulp-file-include');
var prettify = require('gulp-html-prettify');
var clean = require('gulp-clean');

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('sass', function (){
    gulp.src('./src/css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public_html/css/'));
});

gulp.task('js', function (){
    gulp.src('./src/code/**/*.js')
        .pipe(gulp.dest('./public_html/js'));
});

gulp.task('web', function (){
    gulp.src(['./src/html/**/*.html', '!./src/html/**/_*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(prettify({indent_char: ' ', indent_size: 4}))
        .pipe(gulp.dest('./public_html/'));
});

gulp.task('img', function (){
    gulp.src('./src/images/**/*.*')
        .pipe(gulp.dest('./public_html/img'));
});

gulp.task('build', ['web', 'sass', 'js', 'img']);

gulp.task('clean', function (){
    gulp.src('./public_html').pipe(clean());
})

gulp.task('dev',function() {
    gulp.watch('./src/css/**/*.scss',['sass']);
    gulp.watch('./src/html/**/*.html',['web']);
    gulp.watch('./src/code/**/*.js',['js']);
});