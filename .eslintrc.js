module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'prettier', 'import', 'module-resolver'],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jasmine: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/indent': ['error', 2],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'object-curly-newline': ['error', { ImportDeclaration: 'never' }],
    '@typescript-eslint/interface-name-prefix': 0,
    'class-methods-use-this': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_[0-9]?' },
    ],
    'react/display-name': 0,
    'react/prop-types': 0, // not necessary as we use typescript,
    'import/extensions': 0,
    'react/jsx-props-no-spreading': 1,
    'import/no-cycle': 1,
    '@typescript-eslint/no-empty-function': 1,
    '@typescript-eslint/no-explicit-any': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-param-reassign': [2, { props: false }],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
      typescript: {},
    },
  },
  globals: {
    __DEV__: true,
  },
};
