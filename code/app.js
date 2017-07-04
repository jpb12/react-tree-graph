import React from 'react';
import ReactDOM from 'react-dom';

import AnimatedExample from './examples/animated';
import SimpleExample from './examples/simple';

import 'react-tree-graph/dist/style.css';
import './app.css';

class App extends React.PureComponent {
	render() {
		return (
			<div>
				<SimpleExample/>
				<AnimatedExample/>
			</div>);
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));