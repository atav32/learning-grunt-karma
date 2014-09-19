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
          singleRun: true
        },
        files: [
          'app/bower_components/angular/angular.js',
          'app/bower_components/angular-mocks/angular-mocks.js',
          'app/bower_components/angular-route/angular-route.js',
          'app/*.js',
          'app/components/**/*.js',
          'app/view*//**/*.js',
          'tests/**/*.js'
        ],
        frameworks: ['jasmine'],
        plugins: [
          'karma-chrome-launcher',
          'karma-firefox-launcher',
          'karma-jasmine',
          'karma-junit-reporter',
          'karma-htmlfile-reporter',
          'karma-phantomjs-launcher',
          'karma-safari-launcher'
        ],
        reporters: [
          'dots',
          'html'
        ],
        htmlReporter: {
          outputFile: 'tests/units.html'
        }
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
