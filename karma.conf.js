module.exports = function(karma) {
  karma.set({

    frameworks: ['browserify', 'mocha', 'sinon-chai'],

    files: [
      'node_modules/es5-shim/es5-shim.js',
      'test/**/*.js'
    ],

    singleRun: true,

    browsers: ['PhantomJS'],

    reporters: ['spec'],

    preprocessors: {
      'test/**/*.js': ['browserify']
    },

    browserify: {
      debug: true,
      transform: ['debowerify']
    }
  });
}
