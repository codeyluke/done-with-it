module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'import/order': 'warn',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'object-curly-newline': 'off',
    'no-param-reassign': 0,
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
    'react/jsx-curly-newline': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
