module.exports = {
  extends: ['gitmoji'],
  rules: {
    'type-case': [2, 'always', 'sentence-case'],
    'type-enum': [
      2,
      'always',
      [
        'Feat', // A new feature
        'Fix', // A bug fix
        'Docs', // Documentation only changes
        'Style', // Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
        'Refactor', // A code change that neither fixes a bug nor adds a feature
        'Perf', // A code change that improves performance
        'Test', // Adding missing tests
        'Chore', // Changes to the build process or auxiliary tools and libraries such as documentation generation
        'Revert', // Reverts a previous commit
        'Deps', // Updates dependencies
      ],
    ],
  },
};
