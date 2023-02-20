import React from 'react';
import { Tree } from '../../../src';

function onClick(event, nodeKey) {
	alert(`Left clicked ${nodeKey}`);
}

function onRightClick(event, nodeKey) {
	event.preventDefault();
	alert(`Right clicked ${nodeKey}`);
}

export function Events(args) {
	return <Tree {...args}/>;
}

Events.args = {
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
	gProps: {
		onClick,
		onContextMenu: onRightClick
	}
};

Events.parameters = {
	controls: { include: ['data', 'gProps', 'pathProps', 'svgProps', 'textProps'] },
	docs: {
		description: {
			story: 'Click on a node to trigger the custom event. You can also configure custom events on any of the rendered SVG elements.'
		}
	}
};