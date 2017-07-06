import React from 'react';
import Tree from 'react-tree-graph';
import Example from './example';

const data = {
	name: 'Parent',
	children: [{
		name: 'Child One'
	}, {
		name: 'Child Two',
		className: 'red-node',
		onClick: () => alert('Clicked!')
	}]
};

const code = 
`.red-node {
	fill: red;
	stroke: red;
}

const data = {
	name: 'Parent',
	children: [{
		name: 'Child One'
	}, {
		name: 'Child Two',
		className: 'red',
		onClick: () => alert('Clicked!')
	}]
};

<Tree
	data={data}
	height={200}
	width={400}/>`;

const description = 'You can override props for individual nodes.';

export default class NodePropsExample extends React.PureComponent {
	render() {
		return (
			<Example code={code} id="nodeProps" title="Custom node props" description={description}>
				<Tree
					data={data}
					height={200}
					width={400}/>
			</Example>);
	}
}