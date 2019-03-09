// karma.conf.js
module.exports = function(config) {
  config.set({
    browsers: ['ChromeHeadlessNoSandbox'],

    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
    },

    files: [
      { pattern: 'test-dynamic-import/**/*.spec.js', type: 'module', watched: false },
    ],

    frameworks: ['mocha'],

    preprocessors: {
      'test-dynamic-import/**/*.spec.js': ['rollup'],
    },

    rollupPreprocessor: {
      output: {
        format: 'esm',
        sourcemap: 'inline'
      },
    },

    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,
  });
};