module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'requirejs'],
    files: [
      'test-main.js',
      //{pattern: 'node_modules/**/*.js', included: false},
      {pattern: 'src/**/*.js', included: false},
      {pattern: 'src/test/spec/**/*.pec.js', included: false}
    ],
    exclude: [
      'node_modules'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true
  })
};



