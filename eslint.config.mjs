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
      'no-undef': 'error',
      'no-console': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty': 'error',
      'no-duplicate-imports': 'error',
      'no-empty-function': 'error',
      'no-extra-semi': 'error',
      'react-native/no-inline-styles': 'error', // inline styles not allowed
      'react-native/no-color-literals': 'error', // colors not allowed (Need to)
      'react-native/no-single-element-style-arrays': 'error',
      'react-native/no-unused-styles': 'error',
      // 'no-restricted-imports': [
      //   'error',
      //   {
      //     paths: [
      //       {
      //         name: 'react-native',
      //         importNames: ['Alert'],
      //         message: 'Avoid using Alert.alert(). Use a modal instead.',
      //       },
      //     ],
      //   },
      // ],
    },
  },
];
