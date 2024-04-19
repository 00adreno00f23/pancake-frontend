/**
 * @type {import("stylelint").ConfigRules}
 */
const commonRules = {
  'alpha-value-notation': null,
  'color-function-notation': null,
  'comment-empty-line-before': null,
  'custom-property-empty-line-before': null,
  'declaration-empty-line-before': null,
  'function-whitespace-after': null,

}

/**
 * @type {import("stylelint").Config}
 */
module.exports = {
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended',
        'stylelint-config-styled-components',
        'stylelint-config-prettier',
      ],
      customSyntax: '@stylelint/postcss-css-in-js',
      rules: {
        ...commonRules,
        'function-no-unknown': null,
      },
    },
  ],
}
