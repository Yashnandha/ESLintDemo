import pluginJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier'; // Use 'prettierPlugin' instead
import globals from 'globals';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    ignores: ['node_modules/', 'dist/', 'build/', 'coverage/', '.env'],
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      prettier: prettierPlugin, // Correctly reference the plugin
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
    },
  },
];
