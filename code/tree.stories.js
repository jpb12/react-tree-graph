import React from 'react';
import { Tree } from 'react-tree-graph';
import { TreeArgTypes } from './argTypes';

export default {
	title: 'Tree',
	component: Tree,
	argTypes: TreeArgTypes,
	parameters: {
		docs: {
			description: {
				component: 'The Tree component should be used when animations are not needed. The only required props are data, height and width.'
			}
		}
	}
};

export function Simple(args) {
	return <Tree {...args}/>;
}

Simple.args = {
	height: 400,
	width: 600,
	data: {
		name: 'Parent',
		children: [{
			name: 'Child One'
		}, {
			name: 'Child Two'
		}]
	}
};

export { Events } from './tree/events';
export { CustomLabels } from './tree/labels';
export { RectangularNodes } from './tree/rect';
export { PolygonNodes } from './tree/polygon';
export { ImageNodes } from './tree/image';
export { CustomChildren } from './tree/children';
export { CustomNodeProps } from './tree/nodeProps';
export { CustomPaths } from './tree/path';
export { Transformations } from './tree/transformations';
export { CustomStyles } from './tree/styles';