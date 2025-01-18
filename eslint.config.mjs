import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ),
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettier.rules,
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'warn',
    },
  },
];

export default eslintConfig;
