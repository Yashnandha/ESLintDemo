import callstackConfig from '@callstack/eslint-config/react-native.flat.js';

export default [
  {
    ignores: [
      // ignored files go here
      'node_modules/',
      'dist/',
      'build/',
    ],
  },
  ...callstackConfig,
  {
    rules: {
      // your custom rules
      'no-unused-vars': 'error',
    },
  },
];
