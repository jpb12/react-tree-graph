import { Tree } from 'react-tree-graph';
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

export { Duplicate } from './labels/duplicate';
export { JSX } from './labels/jsx';