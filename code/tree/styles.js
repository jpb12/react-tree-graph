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
	controls: { include: ['data', 'svgProps'] },
	docs: {
		description: {
			story: 'CSS used here is available at https://github.com/jpb12/react-tree-graph/blob/gh-pages/code/tree/styles.css'
		}
	}
};