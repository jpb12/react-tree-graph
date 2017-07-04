import { easeElastic } from 'd3-ease';
import React from 'react';
import Tree from 'react-tree-graph';
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

const code = 
`import { easeElastic } from 'd3-ease';

<Tree
	data={data}
	height={200}
	width={400}
	animated
	duration={1000}
	easing={easeElastic}/>`;

const description = 'You can customise the animation by specifying an easing function, duration and number of steps.';

export default class EasingExample extends React.PureComponent {
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
			<Example code={code} id="easing" title="Custom easing" description={description}>
				<Tree
					data={this.state.data}
					height={200}
					width={400}
					animated
					duration={1000}
					easing={easeElastic}/>
			</Example>);
	}
}