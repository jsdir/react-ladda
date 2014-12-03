module.exports = function(karma) {
  karma.set({

    frameworks: ['browserify', 'mocha', 'sinon-chai'],

    files: [
      'node_modules/es5-shim/es5-shim.js',
      'test/**/*.js'
    ],

    singleRun: true,

    browsers: ['PhantomJS'],

    reporters: ['spec', 'coverage'],

    preprocessors: {
      'test/**/*.js': 'browserify',
      '**/*.js': 'coverage'
    },

    browserify: {debug: true},

    coverageReporter: {
      dir: 'coverage',
      reporters: [
        {type: 'lcov', subdir: 'lcov'},
        {type: 'text-summary'}
      ]
    }
  });
};
