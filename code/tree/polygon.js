import React from 'react';
import { Tree } from 'react-tree-graph';
import './polygon.css';

export function PolygonNodes(args) {
	return <Tree {...args}/>;
}

const points = [
	10,
	0,
	12.351141009169893,
	6.76393202250021,
	19.510565162951536,
	6.9098300562505255,
	13.804226065180615,
	11.23606797749979,
	15.877852522924734,
	18.090169943749473,
	10,
	14,
	4.12214747707527,
	18.090169943749473,
	6.195773934819385,
	11.23606797749979,
	0.4894348370484636,
	6.909830056250527,
	7.648858990830107,
	6.76393202250021
].join(',');

PolygonNodes.args = {
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
	nodeShape: 'polygon',
	nodeProps: {
		points,
		transform: 'translate(-10,-10)'
	},
	svgProps: { className: 'star' },
	textProps: { dx: 10.5 }
};

PolygonNodes.parameters = {
	controls: { include: ['data', 'nodeShape', 'nodeProps', 'svgProps', 'textProps'] },
	docs: {
		description: {
			story: 'For polygons, you will have to pass additional props to position the polygon and text. The polygon should be translated by half it\'s width and height, and the text should be offset by half the polygon\'s width plus some spacing for a gap.'
		}
	}
};