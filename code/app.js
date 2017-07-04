import React from 'react';
import ReactDOM from 'react-dom';

import AnimatedExample from './examples/animated';
import ClickingExample from './examples/clicking';
import EasingExample from './examples/easing';
import SimpleExample from './examples/simple';
import StylesExample from './examples/styles';

import 'react-tree-graph/dist/style.css';
import './app.css';

class App extends React.PureComponent {
	render() {
		return (
			<div>
				<SimpleExample/>
				<ClickingExample/>
				<AnimatedExample/>
				<EasingExample/>
				<StylesExample/>
			</div>);
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));