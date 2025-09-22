export default {
	addons: ['@storybook/addon-docs', '@storybook/addon-webpack5-compiler-babel'],
	framework: {
		name: '@storybook/react-webpack5'
	},
	staticDirs: ['./images'],
	stories: ['./stories/**/*.(stories.js|mdx)'],
	webpackFinal(config) {
		config.target = 'web';
		return config;
	},
	features: {
		actions: false,
		backgrounds: false,
		measure: false,
		outline: false,
		viewport: false
	}
};