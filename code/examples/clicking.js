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

const code = `function onClick(event, nodeKey) {
	alert(\`Left clicked \${nodeKey}\`);
}

function onRightClick(event, nodeKey) {
	event.preventDefault();
	alert(\`Right clicked \${nodeKey}\`);
}

<Tree
	data={data}
	height={200}
	width={400}
	gProps={{
		onClick: onClick,
		onContextMenu: onRightClick
	}}/>`;

function onClick(event, nodeKey) {
	alert(`Left clicked ${nodeKey}`);
}

function onRightClick(event, nodeKey) {
	event.preventDefault();
	alert(`Right clicked ${nodeKey}`);
}

const description = 'Click on a node to trigger the custom event.  You can also configure custom events for clicking on any of the rendered SVG elements.';

export default class ClickingExample extends React.PureComponent {
	render() {
		return (
			<Example code={code} id="clicking" title="Click events" description={description}>
				<Tree
					data={data}
					height={200}
					width={400}
					gProps={{
						onClick: onClick,
						onContextMenu: onRightClick
					}}/>
			</Example>);
	}
}