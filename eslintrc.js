module.exports = {
    // Other ESLint configurations...
    overrides: [
      {
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
          'no-console': 'off',
          // Disable all ESLint rules
          '@typescript-eslint/no-unused-vars': 'off',
          "react/react-in-jsx-scope": "off"
          // Add other rules to disable as needed
        },
      },
    ],
  };