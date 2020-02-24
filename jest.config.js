'use strict';

module.exports = {
  testMatch: ['**/*.test.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFiles: ['<rootDir>/jest.setup.js'],
};
