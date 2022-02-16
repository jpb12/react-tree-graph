const custom = require('../webpack.config.js');

module.exports = {
	addons: [
		{
			name: '@storybook/addon-essentials',
			options: {
				actions: false,
				backgrounds: false,
				measure: false,
				outline: false,
				viewport: false,
			}
		}
	],
	framework: '@storybook/react',
	staticDirs: ['./images'],
	stories: ['../code/**/*.stories.js'],
	webpackFinal: config => {
		return {
			...config,
			module: {
				...config.module,
				rules: [...custom.module.rules, ...config.module.rules]
			}
		};
	},
}