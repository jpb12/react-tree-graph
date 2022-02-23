import { addParameters } from '@storybook/client-api';
import 'react-tree-graph/dist/style.css';

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