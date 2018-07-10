const path = require('path');

module.exports = {
    // verbose: true,
    cache: false,
    rootDir: path.resolve(__dirname, '../../'),
    moduleFileExtensions: [
        'js',
        'vue',
    ],
    transform: {
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
        '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
};
