// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */

// eslint-disable-next-line prettier/prettier
const config = {
	plugins: ["prettier-plugin-tailwindcss"],
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	trailingComma: "es5",
	printWidth: 100,
	arrowParens: "always",
	bracketSpacing: true,
	jsxSingleQuote: false,
	htmlWhitespaceSensitivity: "ignore",
	vueIndentScriptAndStyle: true,
};

export default config;
