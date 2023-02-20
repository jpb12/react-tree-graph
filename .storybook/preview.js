import { addParameters } from '@storybook/client-api';
import '../styles/style.css';

addParameters({
	viewMode: 'docs'
});

export const parameters = {
	controls: { expanded: true },
	options: {
		storySort: {
			order: ['Introduction', 'Tree', 'AnimatedTree']
		}
	}
};