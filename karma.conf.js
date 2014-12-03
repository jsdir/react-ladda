module.exports = function(karma) {
  karma.set({
    frameworks: ['browserify', 'mocha', 'sinon-chai'],
    singleRun: true,
    browsers: ['PhantomJS'],
    reporters: ['spec', 'coverage'],
    browserify: {
      debug: true,
      transform: ['browserify-istanbul']
    },
    files: [
      'node_modules/es5-shim/es5-shim.js',
      'test/**/*.js'
    ],
    preprocessors: {
      'test/**/*.js': 'browserify',
      'index.js': ['coverage']
    },
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        {type: 'lcov', subdir: 'lcov'},
        {type: 'text-summary'}
      ]
    }
  });
};
