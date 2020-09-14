module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2020,
  },
  extends: ['prettier', 'plugin:prettier/recommended'],
  ignorePatterns: ['node_modules/', 'dist/'],
  plugins: ['react', 'react-hooks', 'prettier', 'jsx-a11y'],
};
