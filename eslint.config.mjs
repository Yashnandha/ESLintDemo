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
      'no-unused-vars': 'error', // un used variables not allowed
      'react-native/no-inline-styles': 'error', // inline styles not allowed
      'react-native/no-color-literals': 'error', // colors not allowed (Need to add in colors file)
      'react-native/no-single-element-style-arrays': 'error',
      'react-native/no-unused-styles': 'error',
    },
  },
];
