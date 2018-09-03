const alias = require('./alias');
const aliasFormatted = Object.entries(alias);

module.exports = {
  'env': {
    'browser': true,
    'jest/globals': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'react'
  ],
  'parser': 'babel-eslint',
  'plugins': [
    'jest',
    'react'
  ],
  'rules': {
    'indent': ['error', 2],
  },
  'settings': {
    'import/resolver': {
      'alias': aliasFormatted
    }
  }
};
