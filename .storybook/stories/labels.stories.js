import { Tree } from '../../src';
import { TreeArgTypes } from './argTypes';

export default {
	title: 'Tree/Labels',
	component: Tree,
	argTypes: TreeArgTypes,
	parameters: {
		docs: {
			description: {
				component: 'Setting a `labelProp` allows multiple nodes to have the same label. You can also achieve the same result by setting a `keyProp` instead.'
			}
		}
	}
};

export const Duplicate = {
	args: {
		height: 400,
		width: 600,
		data: {
			name: 'Parent',
			label: 'Parent',
			children: [{
				label: 'Child',
				name: 'Child One'
			}, {
				label: 'Child',
				name: 'Child Two'
			}]
		},
		labelProp: 'label'
	},
	parameters: {
		controls: { include: ['data', 'labelProp'] }
	}
};

export const JSX = {
	args: {
		height: 400,
		width: 600,
		data: {
			name: 'Parent',
			label: 'String',
			children: [{
				label: <><rect height="18" width="32" y="-15"/><text dx="2">JSX</text></>,
				name: 'Child One'
			}, {
				label: () => <text>Custom component</text>,
				name: 'Child Two'
			}]
		},
		labelProp: 'label'
	},
	parameters: {
		controls: { include: ['data', 'labelProp'] },
		docs: {
			description: {
				story: 'Setting a `labelProp` allows labels to be JSX. They must return valid SVG elements.'
			}
		}
	}
};