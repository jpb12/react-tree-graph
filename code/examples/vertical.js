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
	height={400}
	width={400}
	svgProps={{
		transform: 'rotate(90)'
	}}/>/>`;

const description = 'You can apply transformations to the tree, such as rotating it to display vertically.';

export default class VerticalExample extends React.PureComponent {
	render() {
		return (
			<Example code={code} id="vertical" title="Vertical" description={description}>
				<Tree
					data={data}
					height={400}
					width={400}
					svgProps={{
						transform: 'rotate(90)'
					}}/>
			</Example>);
	}
}