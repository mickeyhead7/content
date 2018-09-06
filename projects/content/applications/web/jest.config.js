module.exports = {
  moduleNameMapper: {
    '@admin(.*)': '<rootDir>/src/packages/admin/src/$1',
    '@core(.*)': '<rootDir>/src/packages/core/src/$1',
    '@app(.*)': '<rootDir>/src/$1'
  },
  setupFiles: [
    '<rootDir>/jest.setup.js'
  ]
};
