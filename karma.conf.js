module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use, as we are using the jasmine, we included jasmine,if you want Qunit just use
    //npm install karma-qunit --save-dev,same steps for including other testing frameworks

        frameworks: ['jasmine'],

    /* Include the browsers here if needed, if you need firefox just install the browser depndencies
    * with command npm install karma-firefox-launcher and
    * include firefox like this:browser:['chrome','firefox']*/
        browser:['Chrome'],

    // list of files / patterns to load in the browser,
    // include the files and there dependencies here
         files: [
                  'lib/angular.min.js',
                  'lib/angular-mocks.js',
                  'app.js',
                  'controllers/*',
                  'test/**/*Spec.js'
                ],

    // list of files to exclude,
    // if we need to skip any test cases or the files to be tested include those files here
    exclude: [ ],

    // web server port,karma server's port, if you need to run the server on other port change here
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,


    autoWatch:true,

    /*When file modified this automatically monitors it and logs into the screen(command prompt)
    , this monitors the files which are included. */
        restartOnFileChange:true,
    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity

  })
}
