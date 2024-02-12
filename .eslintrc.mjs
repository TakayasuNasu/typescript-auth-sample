module.exports = {
  ignorePatterns: ['*.d.ts'],
  extends: ['eslint:recommended', 'plugin:import/typescript', 'prettier'],
  plugins: ['unused-imports'],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent'],
          ['sibling', 'index'],
        ],
        pathGroups: [
          {
            pattern: '{react,react-dom/**,react-router-dom}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@src/**',
            group: 'parent',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between-groups': 'always',
        'newlines-between-subgroups': 'never',
      },
    ],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    'unused-imports/no-unused-imports': 'error',
  },
}
