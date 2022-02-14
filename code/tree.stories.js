import React from 'react';
import { Tree } from 'react-tree-graph';

export default {
	title: 'Tree',
	component: Tree,
	parameters: {
		docs: {
			description: {
				component: 'The Tree component should be used when animations are not needed.'
			}
		}
	}
};

export function Simple(args) {
	return <Tree {...args}/>;
}

Simple.args = {
	data: {
		name: 'Parent',
		children: [{
			name: 'Child One'
		}, {
			name: 'Child Two'
		}]
	},
	height: 400,
	width: 600
};

// Simple.parameters = {
// 	docs: {
// 		description: {
// 			story: 'The only required props are data, height and width.'
// 		}
// 	}
// };