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

const code = 
`function onClick(nodeKey) {
	alert(nodeKey);
}

<Tree
	data={data}
	height={200}
	width={400}
	nodeClickHandler={onClick}/>`;

function onClick(nodeKey) {
	alert(nodeKey);
}

const description = 'Click on a node to trigger the custom event.  You can also configure custom events for clicking on links or the whole tree';

export default class ClickingExample extends React.PureComponent {
	render() {
		return (
			<Example code={code} id="clicking" title="Click events" description={description}>
				<Tree
					data={data}
					height={200}
					width={400}
					nodeClickHandler={onClick}/>
			</Example>);
	}
}