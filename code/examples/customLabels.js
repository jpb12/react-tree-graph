import React from 'react';
import { Tree } from 'react-tree-graph';
import Example from './example';

function CustomLabel() {
	return <text>Custom component</text>;
}

const data = {
	name: 'Parent',
	label: 'String',
	children: [{
		label: <><rect height="18" width="30" y="-15"/><text>JSX</text></>,
		name: 'Child One'
	}, {
		label: <CustomLabel/>,
		name: 'Child Two'
	}]
};

const code = `function CustomLabel() {
	return <text>Custom component</text>;
}

const data = {
	name: 'Parent',
	label: 'String',
	children: [{
		label: <>
			<rect height="18" width="30" y="-15"/>
			<text>JSX</text>
		</>,
		name: 'Child One'
	}, {
		label: <CustomLabel/>,
		name: 'Child Two'
	}]
};

<Tree
	data={data}
	height={200}
	width={400}
	labelProp="label"/>`;

export default class CustomLabelsExample extends React.PureComponent {
	render() {
		return (
			<Example code={code} id="custom-labels" title="Custom Labels">
				<Tree
					data={data}
					height={200}
					width={400}
					labelProp="label"/>
			</Example>);
	}
}