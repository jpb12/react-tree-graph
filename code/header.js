import React from 'react';

export default class Header extends React.PureComponent {
	render() {
		return (
			<div className="header">
				<span>react-tree-graph</span>
				<a href="https://github.com/jpb12/react-tree-graph">Github</a>
				<a href="https://www.npmjs.com/package/react-tree-graph">NPM</a>
			</div>);
	}
}