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
      // Custom rules
      'no-unused-vars': 'error',
      'react-native/no-inline-styles': 'error', // Avoid inline styles
      'no-console': 'error', // Don't put logs
      'filenames/match-regex': ['error', '^[a-z][a-zA-Z0-9]*$', true], // Enforce folder and sub-folder names to start with small letters
      'react-hooks/rules-of-hooks': 'error', // Ensures hooks follow rules
      'react-hooks/exhaustive-deps': 'warn',
      'naming-convention/use-controller-prefix': [
        'error',
        {
          selector: 'function',
          format: ['camelCase'],
          prefix: ['use'],
        },
      ], // Controller names should start with 'use'
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          suffix: ['Interface'],
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
          suffix: ['Props'],
        },
      ], // Enforce interface and props naming convention
    },
  },
];
