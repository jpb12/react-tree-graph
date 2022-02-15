import React from 'react';
import { Tree } from 'react-tree-graph';

export function Transformations(args) {
	return <Tree {...args}/>;
}

Transformations.args = {
	height: 400,
	width: 400,
	data: {
		name: 'Parent',
		children: [{
			name: 'Child One'
		}, {
			name: 'Child Two'
		}]
	},
	svgProps: { transform: 'rotate(90)' }
};

Transformations.parameters = {
	controls: { include: ['data', 'svgProps'] },
	docs: {
		description: {
			story: 'You can apply transformations to the tree, such as rotating it to display vertically.'
		}
	}
};