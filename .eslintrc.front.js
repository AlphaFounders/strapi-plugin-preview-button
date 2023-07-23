'use strict';

module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['airbnb', './.eslintrc.base.js'],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  env: {
    browser: true,
    commonjs: true,
    mocha: true,
  },
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  globals: {
    window: true,
  },
  rules: {
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'generator-star-spacing': 0,
    'no-console': 0,
    'require-atomic-updates': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'arrow-body-style': 0,
    'arrow-parens': 0,
    camelcase: 0,
    'comma-dangle': 0,
    'consistent-return': [
      2,
      {
        treatUndefinedAsUnspecified: true,
      },
    ],
    'template-curly-spacing': 0,
    'func-names': ['error', 'never'],
    'function-paren-newline': 0,
    'implicit-arrow-linebreak': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
    'import/order': 2,
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'jsx-a11y/click-events-have-key-events': 1,
    'max-len': [
      2,
      {
        code: 120,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'newline-before-return': 2,
    'no-confusing-arrow': 0,
    'no-else-return': 1,
    'no-nested-ternary': ['error'],
    'no-return-assign': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': ['error', { functions: false, classes: false, variables: false }],
    'object-curly-newline': [2, { multiline: true, consistent: true }],
    'one-var': ['error', 'never'],
    'operator-linebreak': 0,
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'any', prev: 'block-like', next: 'if' },
    ],
    'prefer-arrow-callback': 0,
    'prefer-const': 0,
    'prefer-destructuring': 0,
    'prefer-object-spread': 0,
    'prefer-spread': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': 0,
    'react/no-unused-prop-types': 2,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    'react/display-name': 0,
    'react/jsx-wrap-multilines': 0,
  },
};
