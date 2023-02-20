module.exports = {
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
	framework: '@storybook/react',
	staticDirs: ['./images'],
	stories: ['./stories/**/*.stories.(js|mdx)']
};