import React, { useEffect, useState } from 'react';
import { AnimatedTree } from 'react-tree-graph';
import { AnimatedTreeArgTypes } from './argTypes';

export default {
	title: 'AnimatedTree',
	component: AnimatedTree,
	argTypes: AnimatedTreeArgTypes,
	parameters: {
		docs: {
			description: {
				component: 'The AnimatedTree component has all the same props as the Tree component, and additional props to customise animation behaviour.'
			}
		}
	}
};

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

export function Simple(args) {
	const [position, setPosition] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			if (position >= order.length - 1) {
				return setPosition(0);
			}
			return setPosition(position + 1);
		}, 2000);
	});

	return <AnimatedTree data={data[order[position]]} {...args}/>;
}

Simple.args = {
	height: 400,
	width: 600
};

Simple.parameters = {
	controls: { include: ['duration', 'easing', 'steps'] }
};