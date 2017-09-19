module.exports = {
  settings: {
    react: {
      pragma: 'React',
      flowVersion: '0.54',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  extends: ['./rules/react/react', './rules/react/jsx'].map(require.resolve),
};
