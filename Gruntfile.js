module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    karma: {
      options: {
        browsers: [
          'Chrome',
          'ChromeCanary',
          'Firefox',
          'PhantomJS',
          'Safari'
        ],
        browserNoActivityTimeout: 50000,
        continuous: {
          background: false,
          singleRun: false
        },
        files: [
          'app/bower_components/angular/angular.js',
          'app/bower_components/angular-mocks/angular-mocks.js',
          'app/bower_components/angular-route/angular-route.js',
          'app/components/**/*.js',
          'app/view*//**/*.js',
          'test/**/*.js'
        ],
        frameworks: ['jasmine'],
        plugins: [
          'karma-chrome-launcher',
          'karma-firefox-launcher',
          'karma-jasmine',
          'karma-junit-reporter',
          'karma-phantomjs-launcher',
          'karma-safari-launcher'
        ]
      },
      auto: {
        autoWatch: true
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-karma');

  // Default task(s).
  grunt.registerTask('default', ['karma']);
  grunt.registerTask('test', ['karma']);

};
