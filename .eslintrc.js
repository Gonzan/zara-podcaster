module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'next'],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['react', 'react-hooks'],
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-undef': "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
      "no-unused-vars": 'off',

    },
  };
  