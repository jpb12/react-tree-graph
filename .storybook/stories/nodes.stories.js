import { Tree } from '../../src';
import { TreeArgTypes } from './argTypes';
import '../styles/nodeProps.css';
import '../styles/polygon.css';

export default {
	title: 'Tree/Nodes',
	subtitle: 'Rectangular Nodes',
	component: Tree,
	argTypes: TreeArgTypes
};

const defaultArgs = {
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

export const RectangularNodes = {
	args: {
		...defaultArgs,
		nodeShape: 'rect',
		nodeProps: { rx: 2 }
	},
	parameters: {
		componentSubtitle: 'Rectangular Nodes',
		controls: { include: ['data', 'nodeShape', 'nodeProps'] }
	}
};

export const PolygonNodes = {
	args: {
		...defaultArgs,
		nodeShape: 'polygon',
		nodeProps: {
			points: [
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
			].join(','),
			transform: 'translate(-10,-10)'
		},
		svgProps: { className: 'star' },
		textProps: { dx: 10.5 }
	},
	parameters: {
		controls: { include: ['data', 'nodeShape', 'nodeProps', 'svgProps', 'textProps'] },
		docs: {
			description: {
				story: 'For polygons, you will have to pass additional props to position the polygon and text. The polygon should be translated by half it\'s width and height, and the text should be offset by half the polygon\'s width plus some spacing for a gap.'
			}
		}
	}
};

export const ImageNodes = {
	args: {
		...defaultArgs,
		nodeShape: 'image',
		nodeProps: {
			height: 20,
			width: 20,
			href: 'disc.png'
		}
	},
	parameters: {
		controls: { include: ['data', 'nodeShape', 'nodeProps'] }
	}
};

export const CustomNodeProps = {
	args: {
		...defaultArgs,
		data: {
			name: 'Parent',
			children: [
				{
					label: 'First Child',
					labelProp: 'label',
					name: 'Child One',
					shape: 'rect'
				}, {
					name: 'Child Two',
					gProps: {
						className: 'red-node'
					}
				}
			]
		},
		gProps: {
			onClick: (event, node) => alert(`Clicked ${node}!`)
		}
	},
	parameters: {
		controls: { include: ['data', 'nodeProps', 'gProps', 'pathProps', 'textProps', 'labelProp', 'keyProp', 'nodeShape'] },
		docs: {
			description: {
				story: 'You can override props for individual nodes by setting them inside the `data` prop. `nodeProps`, `gProps`, `pathProps` (taken from the target node) and `textProps` on each node will be combined with those passed into `<Tree>`. `keyProp`, `labelProp` and `shape` (overrides `nodeShape`) will override those passed into `<Tree>`'
			}
		}
	}
};