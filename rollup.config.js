import babel from 'rollup-plugin-babel';
import clear from 'rollup-plugin-clear';
import postcss from 'rollup-plugin-postcss';
import prettier from 'rollup-plugin-prettier';
import progress from 'rollup-plugin-progress';
import { uglify } from 'rollup-plugin-uglify';

import clone from 'clone';

const defaultConfig = {
	external: [
		'clone',
		'core-js/fn/array/find',
		'core-js/fn/object/assign',
		'd3-hierarchy',
		'd3-ease',
		'prop-types',
		'react'
	],
	input: 'index.js',
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
			babelrc: false,
			exclude: 'node_modules/**',
			presets: [
				[
					'@babel/env',
					{
						'modules': false
					}
				],
				'@babel/react'
			]
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
	extract: 'dist/style.css'
}));

const prodConfig = clone(defaultConfig);
prodConfig.output.file = 'dist/index.min.js';
prodConfig.plugins.push(uglify());
prodConfig.plugins.unshift(postcss({
	extract: 'dist/style.min.css',
	minimize: true
}));

export default [
	devConfig,
	prodConfig
];