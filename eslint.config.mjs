import callstackConfig from '@callstack/eslint-config/react-native.flat.js';

export default [
  {
    ignores: [
      // ignored files go here
      'node_modules/',
      'dist/',
      'build/',
      '__tests__/',
      'eslint.config.mjs',
    ],
  },
  ...callstackConfig,
  {
    rules: {
      // your custom rules
      'no-unused-vars': 'error',
      'react-native/no-inline-styles': 'off',
    },
  },
];
