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

const code = `const data = {
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

const description = 'The only required props are data, height and width.';

export default class SimpleExample extends React.PureComponent {
	render() {
		return (
			<Example code={code} id="basic" title="Basic" description={description}>
				<Tree
					data={data}
					height={200}
					width={400}/>
			</Example>);
	}
}