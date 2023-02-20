import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import clear from 'rollup-plugin-clear';
import ignore from 'rollup-plugin-ignore';
import postcss from 'rollup-plugin-postcss';
import prettier from 'rollup-plugin-prettier';
import progress from 'rollup-plugin-progress';
import rfdc from 'rfdc';

const clone = rfdc();

const defaultOutput = {
	globals: {
		'@babel/runtime/helpers/extends': '_extends',
		'd3-ease': 'd3',
		'd3-hierarchy': 'd3',
		'prop-types': 'PropTypes',
		react: 'React'
	},
	interop: 'auto'
};

const defaultConfig = {
	external: [
		'@babel/runtime/helpers/extends',
		'd3-hierarchy',
		'd3-ease',
		'prop-types',
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

const devConfig = clone(defaultConfig);
devConfig.output = {
	...defaultOutput,
	file: 'dist/index.js',
	format: 'umd',
	name: 'ReactTreeGraph'
};
devConfig.plugins.push(prettier({
	singleQuote: true,
	useTabs: true
}));
devConfig.plugins.unshift(postcss({
	extract: 'style.css'
}));

const moduleConfig = clone(defaultConfig);
moduleConfig.output = {
	...defaultOutput,
	dir: 'dist/module',
	format: 'esm',
	preserveModules: true
};
moduleConfig.plugins.unshift(ignore(['../styles/style.css']));

const prodConfig = clone(defaultConfig);
prodConfig.output = {
	...defaultOutput,
	file: 'dist/index.min.js',
	format: 'umd',
	name: 'ReactTreeGraph'
};
prodConfig.plugins.push(terser());
prodConfig.plugins.unshift(postcss({
	extract: 'style.min.css',
	minimize: true
}));

export default [
	devConfig,
	moduleConfig,
	prodConfig
];