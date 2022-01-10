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
	nodeShape="rect"
	nodeProps={{ rx: 2 }}/>`;

export default class RectExample extends React.PureComponent {
	render() {
		return (
			<Example code={code} id="rect" title="Rectangular nodes">
				<Tree
					data={data}
					height={200}
					width={400}
					nodeShape="rect"
					nodeProps={{ rx: 2 }}/>
			</Example>);
	}
}