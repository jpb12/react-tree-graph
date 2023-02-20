import React from 'react';
import { Tree } from '../../../src';

function CustomLabel() {
	return <text>Custom component</text>;
}

export function JSX(args) {
	return <Tree {...args}/>;
}

JSX.args = {
	height: 400,
	width: 600,
	data: {
		name: 'Parent',
		label: 'String',
		children: [{
			label: <><rect height="18" width="32" y="-15"/><text dx="2">JSX</text></>,
			name: 'Child One'
		}, {
			label: <CustomLabel/>,
			name: 'Child Two'
		}]
	},
	labelProp: 'label'
};

JSX.parameters = {
	controls: { include: ['data', 'labelProp'] },
	docs: {
		description: {
			story: 'Setting a `labelProp` allows labels to be JSX. They must return valid SVG elements.'
		}
	}
};