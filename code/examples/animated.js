import React from 'react';
import { AnimatedTree } from 'react-tree-graph';
import Example from './example';

const order = [0, 1, 0, 2];

const data = [
	{
		name: 'Parent',
		children: [{
			name: 'Child One'
		}, {
			name: 'Child Two'
		}, {
			name: 'Child Three',
			children: [{
				name: 'Grandchild One'
			}, {
				name: 'Grandchild Two'
			}]
		}]
	},
	{
		name: 'Child Three',
		children: [{
			name: 'Grandchild One'
		}, {
			name: 'Grandchild Two'
		}]
	},
	{
		name: 'Parent',
		children: [{
			name: 'Child One'
		}, {
			name: 'Child Two'
		}]
	}
];

const code = `<AnimatedTree
	data={data}
	height={200}
	width={400}/>`;

export default class AnimatedExample extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			data: data[0]
		};
	}

	componentDidMount() {
		let position = 0;
		setInterval(() => {
			position ++;
			if (position >= order.length) {
				position = 0;
			}
			this.setState({ data: data[order[position]] });
		}, 2000);
	}

	render() {
		return (
			<Example code={code} id="animation" title="Animation">
				<AnimatedTree
					data={this.state.data}
					height={200}
					width={400}/>
			</Example>);
	}
}