import React from 'react';
import Tree from 'react-tree-graph';
import Example from './example';

const data = {
	name: 'Parent',
	children: [{
		name: 'Child One'
	}, {
		name: 'Child Two'
	}]
};

const code = 
`div.custom-container {
	background-color: #242424;
}

svg.custom .node circle {
	fill: #F3F3FF;
	stroke: #2593B8;
	stroke-width: 1.5px;
}

svg.custom .node text {
	font-size: 11px;
	background-color: #444;
	fill: #F4F4F4;
	text-shadow: 0 1px 4px black;
}

svg.custom .node {
	cursor: pointer;
}

svg.custom path.link {
	fill: none;
	stroke: #2593B8;
	stroke-width: 1.5px;
}

<div className="custom-container">
	<Tree
		data={data}
		height={200}
		width={400}
		treeClass="custom"/>
</div>`;

export default class StylesExample extends React.PureComponent {
	render() {
		return (
			<Example code={code} mode="css" id="styles" title="Custom styles">
				<div className="custom-container">
					<Tree
						data={data}
						height={200}
						width={400}
						treeClass="custom"/>
				</div>
			</Example>);
	}
}