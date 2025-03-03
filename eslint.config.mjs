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
      'react-native/no-inline-styles': 'error',
      'react-native/no-color-literals': 'error',
      'react-native/no-raw-text': 'error',
      'react-native/no-single-element-style-arrays': 'error',
      'react-native/sort-styles': 'error',
      'react-native/split-platform-components': 'error',
    },
  },
];
