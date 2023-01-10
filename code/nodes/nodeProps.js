import React from 'react';
import { Tree } from 'react-tree-graph';
import './nodeProps.css';

export function CustomNodeProps(args) {
	return <Tree {...args}/>;
}

CustomNodeProps.args = {
	height: 400,
	width: 600,
	data: {
		name: 'Parent',
		children: [{
			label: 'First Child',
			labelProp: 'label',
			name: 'Child One',
			shape: 'rect'
		}, {
			name: 'Child Two',
			gProps: {
				className: 'red-node'
			}
		}]
	},
	gProps: {
		onClick: (event, node) => alert(`Clicked ${node}!`)
	}
};

CustomNodeProps.parameters = {
	controls: { include: ['data', 'nodeProps', 'gProps', 'pathProps', 'textProps', 'labelProp', 'keyProp', 'nodeShape'] },
	docs: {
		description: {
			story: 'You can override props for individual nodes by setting them inside the `data` prop. `nodeProps`, `gProps`, `pathProps` (taken from the target node) and `textProps` on each node will be combined with those passed into `<Tree>`. `keyProp`, `labelProp` and `shape` (overrides `nodeShape`) will override those passed into `<Tree>`'
		}
	}
};