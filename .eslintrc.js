module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  plugins: ['import', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json'],
        moduleDirectory: ['node_modules', 'src']
      }
    }
  },
  rules: {
    'no-console': 'off',
    'import/no-unresolved': 'error'
  },
  overrides: [
    {
      files: ['**/Tests/**/*.js', '**/*.test.js', 'src/**/__tests__/**/*.js'],
      env: { jest: true, node: true },
      rules: {
        'no-undef': 'off',
        'import/no-unresolved': 'off'
      }
    },
    {
      files: ['src/legacy/**', 'legacy/**'],
      env: { node: true },
      rules: {
        'no-unused-vars': ['warn'],
        'no-undef': 'off'
      }
    }
  ]
};