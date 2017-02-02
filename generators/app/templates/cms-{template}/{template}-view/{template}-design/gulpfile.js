'use strict';

var gulp = require('gulp');
var beautify = require('gulp-jsbeautifier');
var changed = require('gulp-changed');



var paths = {
    jsSrc: ['src/**/*.js', '!src/**/js/libs/**/*.js'],
    lessSrc: ['src/**/*.less', '!src/**/css/libs/**/*.less']
};

gulp.task('format-js', function() {
    return gulp.src(paths.jsSrc, { base: './' })
    	//.pipe(changed('./'))
        .pipe(beautify({
        	config: '.jsbeautifyrc',
        	mode: 'VERIFY_AND_WRITE'
        }))
        .pipe(gulp.dest('./'));
});

var less = require('gulp-less');
var path = require('path');
var lessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix= new lessPluginAutoPrefix({browsers: ["last 3 versions"]});
var appBase = "../template-app/src/content/jcr_root/apps/site/template/";

gulp.task('compile-less', function () {
    return gulp.src(appBase + '**/*.less')
        .pipe(less({
            compress: false,
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest(appBase));
});


gulp.task('build', ['format-js','compile-less']);

gulp.task('default', ['build']);