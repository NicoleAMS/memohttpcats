module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            '*.js',
            './jasmine/spec/home.spec.js'
        ],
        plugins: ['karma-jasmine', 'karma-chrome-launcher'],
        reporters: ['dots'],
        browsers: ['ChromeHeadless'],
        color: true,
        singleRun: true
    });
}; 