import React from 'react';
import ReactDOM from 'react-dom';

import AnimatedExample from './examples/animated';
import ClickingExample from './examples/clicking';
import EasingExample from './examples/easing';
import SimpleExample from './examples/simple';
import StylesExample from './examples/styles';
import Header from './header';
import SidePanel from './sidepanel';

import 'react-tree-graph/dist/style.css';
import './app.css';

class App extends React.PureComponent {
	render() {
		return (
			<div>
				<Header/>
				<SidePanel/>
				<div className="centre">
					<SimpleExample/>
					<ClickingExample/>
					<AnimatedExample/>
					<EasingExample/>
					<StylesExample/>
				</div>
			</div>);
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));