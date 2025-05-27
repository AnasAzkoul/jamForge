const {
  defineConfig,
  globalIgnores,
} = require("eslint/config");
const {
  FlatCompat,
} = require("@eslint/eslintrc");
const js = require("@eslint/js");
const pluginVue = require("eslint-plugin-vue");
const parserVue = require("vue-eslint-parser");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = defineConfig([
  // 1) Global ignores:
  globalIgnores([
    "**/node_modules/",
    "**/dist/",
    "**/public/",
  ]),

  // 2) Main config:
  {
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2021,
        sourceType: "module",
      },
      globals: {
        ...require("globals").browser,
        ...require("globals").node,
      },
    },
    plugins: {
      vue: pluginVue,
      // add other plugins if needed
    },
    // 3) Extend configs through compat:
    extends: compat.extends(
      "eslint:recommended",
      "plugin:vue/vue3-recommended",
      "plugin:prettier/recommended"
    ),
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/no-v-html": "off",
    },
  },
]);
