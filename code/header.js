import React from 'react';

export default class Header extends React.PureComponent {
	render() {
		return (
			<div className="header">
				<h1>react-tree-graph</h1>
				<a href="https://github.com/jpb12/react-tree-graph">Github</a>
				<a href="https://www.npmjs.com/package/react-tree-graph">NPM</a>
			</div>);
	}
}