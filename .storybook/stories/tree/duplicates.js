import React from 'react';
import { Tree } from '../../../src';

function CustomLabel() {
	return <text>Custom component</text>;
}

export function CustomLabels(args) {
	return <Tree {...args}/>;
}

CustomLabels.args = {
	height: 400,
	width: 600,
	data: {
		name: 'Parent',
		label: 'String',
		children: [{
			label: <><rect height="18" width="30" y="-15"/><text>JSX</text></>,
			name: 'Child One'
		}, {
			label: <CustomLabel/>,
			name: 'Child Two'
		}]
	},
	labelProp: 'label'
};

CustomLabels.parameters = {
	controls: { include: ['data', 'labelProp'] },
	docs: {
		description: {
			story: 'Specifying a `labelProp` allows labels to be JSX. They must return valid SVG elements.'
		}
	}
};