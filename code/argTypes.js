const categories = {
	data: 'Data',
	properties: 'SVG Properties',
	rendering: 'Tree Rendering'
};

export const TreeArgTypes = {
	data: {
		table: { category: categories.data },
		type: { name: 'object', required: true },
		description: 'The data to be rendered as a tree. Must be in a format accepted by d3.hierarchy.'
	},
	getChildren: {
		control: { disable: true },
		table: {
			category: categories.data,
			defaultValue: { summary: 'node => node.children' }
		},
		description: 'A function that returns the children for a node, or null/undefined if no children exist.'
	},
	keyProp: {
		table: {
			category: categories.data,
			defaultValue: { summary: 'name' }
		},
		type: { name: 'string' },
		description: 'The property on each node to use as a key.'
	},
	labelProp: {
		table: {
			category: categories.data,
			defaultValue: { summary: 'name' }
		},
		type: { name: 'string' },
		description: 'The property on each node to render as a label.'
	},
	height: {
		table: { category: categories.rendering },
		type: { name: 'number', required: true },
		description: 'The height of the rendered tree, including margins.'
	},
	width: {
		table: { category: categories.rendering },
		type: { name: 'number', required: true },
		description: 'The width of the rendered tree, including margins.'
	},
	margins: {
		table: {
			category: categories.rendering,
			defaultValue: { summary: '{ bottom: 10, left: 20, right: 150, top: 10 }' }
		},
		type: { name: 'object' },
		description: 'The margins around the content. The right margin should be larger to include the rendered label text.'
	},
	children: {
		table: { category: categories.rendering },
		control: { disable: true },
		description: 'Will be rendered as children of the SVG, before the links and nodes.'
	},
	nodeShape: {
		options: ['circle', 'image', 'polygon', 'rect'],
		table: {
			category: categories.rendering,
			defaultValue: { summary: 'circle' }
		},
		type: { name: 'select' },
		description: 'The shape of the node icons. Additional nodeProps must be specifed for polygon and rect.'
	},
	pathFunc: {
		control: { disable: true },
		table: {
			category: categories.rendering,
			defaultValue: { summary: 'function(x1,y1,x2,y2)' }
		},
		description: 'Function to calculate the co-ordinates of the path between nodes.'
	},
	gProps: {
		table: {
			category: categories.properties,
			defaultValue: { summary: '{ className: \'node\' }' }
		},
		type: { name: 'object' },
		description: 'Props to be added to the `<g>` element. The default className will still be applied if a className property is not set.'
	},
	nodeProps: {
		table: { category: categories.properties },
		type: { name: 'object' },
		description: 'Props to be added to the `<circle>`, <image>, <polygon> or <rect> element. These will take priority over the default r added to circle and height, width, x and y added to image and rect.'
	},
	pathProps: {
		table: {
			category: categories.properties,
			defaultValue: { summary: '{ className: \'link\' }' }
		},
		type: { name: 'object' },
		description: 'Props to be added to the `<path>` element. The default className will still be applied if a className property is not set.'
	},
	svgProps: {
		table: { category: categories.properties },
		type: { name: 'object' },
		description: 'Props to be added to the `<svg>` element.'
	},
	textProps: {
		table: { category: categories.properties },
		type: { name: 'object' },
		description: 'Props to be added to the `<text>` element.'
	}
};