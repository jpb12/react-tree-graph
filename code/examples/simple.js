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
`const data = {
	name: 'Parent',
	children: [{
		name: 'Child One'
	}, {
		name: 'Child Two'
	}]
};

<Tree
	data={data}
	height={200}
	width={400}/>`;

export default class SimpleExample extends React.PureComponent {
	render() {
		return (
			<Example code={code}>
				<Tree
					data={data}
					height={200}
					width={400}/>
			</Example>);
	}
}