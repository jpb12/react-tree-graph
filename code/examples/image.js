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
	nodeShape="image"
	nodeProps={{
		height: 20,
		width: 20,
		href: 'frisbee.png'
	}}/>`;

export default class ImageExample extends React.PureComponent {
	render() {
		return (
			<Example code={code} id="image" title="Image nodes">
				<Tree
					data={data}
					height={200}
					width={400}
					nodeShape="image"
					nodeProps={{
						height: 20,
						width: 20,
						href: 'disc.png'
					}}/>
			</Example>);
	}
}