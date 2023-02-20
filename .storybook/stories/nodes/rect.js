import React from 'react';
import { Tree } from '../../../src';

export function RectangularNodes(args) {
	return <Tree {...args}/>;
}

RectangularNodes.args = {
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
	nodeShape: 'rect',
	nodeProps: { rx: 2 }
};

RectangularNodes.parameters = {
	controls: { include: ['data', 'nodeShape', 'nodeProps'] }
};