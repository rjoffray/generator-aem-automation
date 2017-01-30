// Karma configuration
// Generated on Thu Aug 27 2015 14:56:09 GMT-0700 (PDT)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'src/content/jcr_root/etc/designs/site/template/js/libs/jquery/jquery-2.2.3.min.js',
            'src/content/jcr_root/etc/designs/site/micro/js/libs/bootstrap/bootstrap.3.3.6.js',
            'src/content/jcr_root/etc/designs/site/micro/js/libs/moment/moment-with-locales.min.js',
            'src/content/jcr_root/etc/designs/site/micro/js/libs/amplify/amplify-1.1.2.js',
            'src/content/jcr_root/etc/designs/site/micro/js/libs/angular-1.5.5/angular.min.js',
            'src/content/jcr_root/etc/designs/site/micro/js/libs/angular-1.5.5/ui-bootstrap-tpls.js',
            'src/content/jcr_root/etc/designs/site/micro/js/libs/angular-1.5.5/angular-resource.min.js',
            'src/content/jcr_root/etc/designs/site/micro/js/libs/angular-1.5.5/angular-sanitize.min.js',
            'src/content/jcr_root/etc/designs/site/micro/js/libs/angular-1.5.5/angular-touch.min.js',
            'src/content/jcr_root/etc/designs/site/micro/js/libs/angular-1.5.5/angular-animate.min.js',
            'src/content/jcr_root/etc/designs/site/micro/js/libs/angular-1.5.5/angular-idle.min.js',
            'src/content/jcr_root/etc/designs/site/micro/js/libs/angular-1.5.5/angular-recaptcha.min.js',

            'src/content/jcr_root/etc/designs/site/micro/js/libs/lodash/lodash-3.10.1.js',
            'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
            // 'node_modules/angular-mocks/angular-mocks.js',

            'src/test/*.js',


            '../template-app/src/content/jcr_root/apps/site/template/**/**/**/clientLibs/*.js',


            {
                pattern: 'src/test/fixtures/**/*.json',
                watched: true,
                served: true,
                included: false
            }
        ],


        // list of files to exclude
        exclude: ['src/test/microTestTemplate.js'],


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'junit', 'coverage'],


        // junit output config for Jenkins integration
        junitReporter: {
            outputDir: 'target/surefire-reports', // results will be saved as $outputDir/$browserName.xml
            outputFile: 'TEST-results.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
            suite: '', // suite will become the package name attribute in xml testsuite element
            useBrowserName: true // add browser name to report and classes names
        },


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'src/content/jcr_root/etc/designs/site/micro/js/dreamsresorts/components/**/*.js': ['coverage']
        },


        // coverage report output config
        coverageReporter: {
            // specify a common output directory
            dir: 'target/coverage',
            reporters: [
                // reporters not supporting the `file` property
                { type: 'html', subdir: 'report-html' },

                // reporters supporting the `file` property, use `subdir` to directly output them in the `dir` directory
                { type: 'cobertura', subdir: '.', file: 'cobertura-coverage.xml' },
            ]
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher (may need to install plugins for non-Chrome/PhantomJS browsers)
        // browsers: ['Chrome', 'Firefox', 'Safari', 'IE'],
        browsers: ['Chrome', 'PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    })
};
