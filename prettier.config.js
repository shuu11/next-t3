/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
	printWidth: 100,
	tabWidth: 2,
	useTabs: true,
	semi: false,
	singleQuote: true,
	quoteProps: 'as-needed',
	jsxSingleQuote: false,
	trailingComma: 'all',
	bracketSpacing: true,
	bracketSameLine: true,
	// jsxBracketSameLine: true,
	arrowParens: 'always',
	rangeStart: 0,
	rangeEnd: Infinity,
	// parser:None,
	// filepath:None,
	requirePragma: false,
	insertPragma: false,
	proseWrap: 'preserve',
	htmlWhitespaceSensitivity: 'css',
	vueIndentScriptAndStyle: false,
	endOfLine: 'lf',
	embeddedLanguageFormatting: 'auto',
	singleAttributePerLine: false,

	// plugins: ['prettier-plugin-tailwindcss'],
}

export default config
