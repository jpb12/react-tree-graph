import React from 'react';
import { Tree } from 'react-tree-graph';

export function CustomChildren(args) {
	return <Tree {...args}/>;
}

CustomChildren.args = {
	height: 400,
	width: 600,
	data: {
		name: 'Parent',
		children: [{
			name: 'Child One'
		}, {
			name: 'Child Two'
		}]
	},
	children: (
		<text
			dy="15"
			dx="5"
			stroke="#000000"
			fill="#000000">
			Custom Title
		</text>)
};

CustomChildren.parameters = {
	controls: { include: ['data', 'children'] },
	docs: {
		description: {
			story: 'Children will be rendered before the tree.'
		}
	}
};