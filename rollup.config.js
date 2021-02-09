import babel from 'rollup-plugin-babel';
import clear from 'rollup-plugin-clear';
import postcss from 'rollup-plugin-postcss';
import prettier from 'rollup-plugin-prettier';
import progress from 'rollup-plugin-progress';
import { terser } from 'rollup-plugin-terser';

import clone from 'clone';

const defaultConfig = {
	external: [
		'clone',
		'd3-hierarchy',
		'd3-ease',
		'prop-types',
		'react'
	],
	input: 'src/index.js',
	output: {
		format: 'umd',
		globals: {
			'prop-types': 'PropTypes',
			react: 'React',
			clone: 'clone',
			'd3-ease': 'd3',
			'd3-hierarchy': 'd3'
		},
		interop: false,
		name: 'ReactTreeGraph'
	},
	plugins: [
		babel({
			exclude: 'node_modules/**'
		}),
		clear({
			targets: ['dist']
		}),
		progress()
	]
};

const devConfig = clone(defaultConfig);
devConfig.output.file = 'dist/index.js';
devConfig.plugins.push(prettier({
	singleQuote: true,
	useTabs: true
}));
devConfig.plugins.unshift(postcss({
	extract: 'style.css'
}));

const prodConfig = clone(defaultConfig);
prodConfig.output.file = 'dist/index.min.js';
prodConfig.plugins.push(terser());
prodConfig.plugins.unshift(postcss({
	extract: 'style.min.css',
	minimize: true
}));

export default [
	devConfig,
	prodConfig
];