import React from 'react';
import { Tree } from '../../../src';
import './styles.css';

export function RightToLeft(args) {
	return <Tree {...args}/>;
}

RightToLeft.args = {
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
	direction: 'rtl'
};

RightToLeft.parameters = {
	controls: { include: ['data', 'direction'] },
	docs: {
		description: {
			story: 'The tree can be rendered right-to-left.'
		}
	}
};