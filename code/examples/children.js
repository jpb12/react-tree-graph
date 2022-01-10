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
	width={400}>
	<text
		dy="15"
		dx="5"
		stroke="#000000"
		fill="#000000">
		Custom Title
	</text>
</Tree>`;

const description = 'Children will be rendered before the tree.';

export default class ChildrenExample extends React.PureComponent {
	render() {
		return (
			<Example code={code} id="children" title="Custom Children" description={description}>
				<Tree
					data={data}
					height={200}
					width={400}>
					<text
						dy="15"
						dx="5"
						stroke="#000000"
						fill="#000000">
						Custom Title
					</text>
				</Tree>
			</Example>);
	}
}