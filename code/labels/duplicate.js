import React from 'react';
import { Tree } from 'react-tree-graph';

export function Duplicate(args) {
	return <Tree {...args}/>;
}

Duplicate.args = {
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
};

Duplicate.parameters = {
	controls: { include: ['data', 'labelProp'] }
};