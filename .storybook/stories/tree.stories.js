import React from 'react';
import { Tree } from '../../src';
import { TreeArgTypes } from './argTypes';
import '../styles/styles.css';

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

export const Simple = {
	args: {
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
	}
};

export const Events = {
	args: {
		...Simple.args,
		gProps: {
			onClick: (event, nodeKey) => alert(`Left clicked ${nodeKey}`),
			onContextMenu: (event, nodeKey) => {
				event.preventDefault();
				alert(`Right clicked ${nodeKey}`);
			}
		}
	},
	parameters: {
		controls: { include: ['data', 'gProps', 'pathProps', 'svgProps', 'textProps'] },
		docs: {
			description: {
				story: 'Click on a node to trigger the custom event. You can also configure custom events on any of the rendered SVG elements.'
			}
		}
	}
};

export const CustomChildren = {
	args: {
		...Simple.args,
		children: <text dy="15" dx="5">Custom Title</text>
	},
	parameters: {
		controls: { include: ['data', 'children'] },
		docs: {
			description: {
				story: 'Children will be rendered before the tree.'
			}
		}
	}
};

export const CustomPaths = {
	args: {
		...Simple.args,
		pathFunc: (x1, y1, x2, y2) => `M${x1},${y1} ${x2},${y2}`
	},
	parameters: {
		controls: { include: ['data', 'pathFunc'] },
		docs: {
			description: {
				story: 'You can pass in a custom function for calculating the shape of a path between two nodes.'
			}
		}
	}
};

export const RightToLeft = {
	args: {
		...Simple.args,
		direction: 'rtl'
	},
	parameters: {
		controls: { include: ['data', 'direction'] },
		docs: {
			description: {
				story: 'The tree can be rendered right-to-left.'
			}
		}
	}
};

export const Transformations = {
	args: {
		...Simple.args,
		width: 400,
		svgProps: { transform: 'rotate(90)' }
	},
	parameters: {
		controls: { include: ['data', 'svgProps'] },
		docs: {
			description: {
				story: 'You can apply transformations to the tree, such as rotating it to display vertically.'
			}
		}
	}
};

export const CustomStyles = {
	args: {
		...Simple.args,
		svgProps: { className: 'custom' }
	},
	parameters: {
		controls: { include: ['data', 'svgProps'] },
		docs: {
			description: {
				story: 'CSS used here is available at https://github.com/jpb12/react-tree-graph/blob/master/code/.storybook/styles/styles.css'
			}
		}
	},
	render: args => <div className="custom-container"><Tree {...args}/></div>
};