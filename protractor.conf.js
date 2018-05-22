exports.config = {
    // set to "custom" instead of cucumber.
    framework: 'custom',
  
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    // require feature files
    specs: [
      'features/*.feature' // accepts a glob
    ],
  
    cucumberOpts: {
      // require step definitions
      require: [
        'features/steps/*.steps.js' // accepts a glob
      ]
    }
  };