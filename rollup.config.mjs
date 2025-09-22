import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import clear from 'rollup-plugin-clear';
import ignore from 'rollup-plugin-ignore';
import postcss from 'rollup-plugin-postcss';
import prettier from 'rollup-plugin-prettier';
import progress from 'rollup-plugin-progress';

const defaultOutput = {
	globals: {
		'@babel/runtime/helpers/extends': '_extends',
		'd3-ease': 'd3',
		'd3-hierarchy': 'd3',
		react: 'React'
	},
	interop: 'auto'
};

const defaultConfig = {
	external: [
		'@babel/runtime/helpers/extends',
		'd3-hierarchy',
		'd3-ease',
		'react'
	],
	input: 'src/index.js',
	plugins: [
		babel({
			babelHelpers: 'runtime',
			exclude: 'node_modules/**',
			plugins: ['@babel/plugin-transform-runtime']
		}),
		clear({
			targets: ['dist']
		}),
		progress()
	]
};

const devConfig = {
	...defaultConfig,
	output: {
		...defaultOutput,
		file: 'dist/index.js',
		format: 'umd',
		name: 'ReactTreeGraph'
	},
	plugins: [
		postcss({
			extract: 'style.css'
		}),
		...defaultConfig.plugins,
		prettier({
			parser: 'babel',
			singleQuote: true,
			useTabs: true
		})
	]
};

const moduleConfig = {
	...defaultConfig,
	output: {
		...defaultOutput,
		dir: 'dist/module',
		format: 'esm',
		preserveModules: true
	},
	plugins: [
		ignore(['../styles/style.css']),
		...defaultConfig.plugins
	]
};

const prodConfig = {
	...defaultConfig,
	output: {
		...defaultOutput,
		file: 'dist/index.min.js',
		format: 'umd',
		name: 'ReactTreeGraph'
	},
	plugins: [
		postcss({
			extract: 'style.min.css',
			minimize: true
		}),
		...defaultConfig.plugins,
		terser()
	]
};

export default [
	devConfig,
	moduleConfig,
	prodConfig
];