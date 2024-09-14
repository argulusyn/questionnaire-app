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
      arrays: "always",
      objects: "always",
    },],
    "semi": ["error", "always",],
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
