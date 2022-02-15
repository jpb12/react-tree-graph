import React from 'react';
import { Tree } from 'react-tree-graph';
import './styles.css';

export function CustomStyles(args) {
	return <div className="custom-container"><Tree {...args}/></div>;
}

CustomStyles.args = {
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
	svgProps: { className: 'custom' }
};

CustomStyles.parameters = {
	controls: { include: ['data', 'svgProps'] }
};