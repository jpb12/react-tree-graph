import React from 'react';
import { Tree } from 'react-tree-graph';

export function CustomPaths(args) {
	return <Tree {...args}/>;
}

CustomPaths.args = {
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
	pathFunc: (x1, y1, x2, y2) => `M${y1},${x1} ${y2},${x2}`
};

CustomPaths.parameters = {
	controls: { include: ['data', 'pathFunc'] },
	docs: {
		description: {
			story: 'You can pass in a custom function for calculating the shape of a path between two nodes.'
		}
	}
};