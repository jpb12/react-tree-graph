import React from 'react';
import { Tree } from 'react-tree-graph';
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
	width={400}
	pathFunc={(x1, y1, x2, y2) =>
		\`M\${y1},\${x1} \${y2},\${x2}\`}/>`;

const description = 'You can pass in a custom function for calculating the shape of a path between two nodes.';

export default class StraightExample extends React.PureComponent {
	render() {
		return (
			<Example code={code} id="customPath" title="Custom path" description={description}>
				<Tree
					data={data}
					height={200}
					width={400}
					pathFunc={(x1, y1, x2, y2) => `M${y1},${x1} ${y2},${x2}`}/>
			</Example>);
	}
}