/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  rules: {
    "comma-dangle": ["error", {
      arrays: "always-multiline",
      objects: "always-multiline",
      functions: "always-multiline"
    },],
    "semi": ["error", "always",],
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
