export default {
	addons: [
		{
			name: '@storybook/addon-essentials',
			options: {
				actions: false,
				backgrounds: false,
				measure: false,
				outline: false,
				viewport: false
			}
		}
	],
	docs: {
		autodocs: true
	},
	framework: {
		name: '@storybook/react-webpack5',
		options: {}
	},
	staticDirs: ['./images'],
	stories: ['./stories/**/*.stories.(js|mdx)'],
	webpackFinal(config) {
		config.target = 'web';
		return config;
	}
};