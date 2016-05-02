module.exports = function (config) {
  config.set({

    basePath: '../',

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',

      'app/src/app.module.js',

      'tests/unit/**/*.js'
    ],

    logLevel: config.LOG_ERROR,
    port: 9876,
    reporters: ['progress'],
    colors: true,

    autoWatch : false,
    singleRun : true,

    // For TDD mode
    autoWatch : true,
    singleRun : false,
    // /TDD

    frameworks: ['jasmine'],
    browsers: ['Chrome', 'Firefox'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ]

  });
};
