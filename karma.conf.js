module.exports = function(karma) {
  karma.set({

    frameworks: ['browserify', 'mocha'],

    files: [
      'node_modules/es5-shim/es5-shim.js',
      'test/**/*.js'
    ],

    singleRun: true,

    browsers: ['PhantomJS'],

    preprocessors: {
      'test/**/*.js': ['browserify']
    },

    browserify: {
      transform: ['debowerify']
    }
  });
}
