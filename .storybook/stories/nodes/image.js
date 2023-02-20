import React from 'react';
import { Tree } from '../../../src';

export function ImageNodes(args) {
	return <Tree {...args}/>;
}

ImageNodes.args = {
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
	nodeShape: 'image',
	nodeProps: {
		height: 20,
		width: 20,
		href: 'disc.png'
	}
};

ImageNodes.parameters = {
	controls: { include: ['data', 'nodeShape', 'nodeProps'] }
};