import React from 'react';
import ReactDOM from 'react-dom';

import AnimatedExample from './examples/animated';
import ChildrenExample from './examples/children';
import ClickingExample from './examples/clicking';
import EasingExample from './examples/easing';
import NodePropsExample from './examples/nodeProps';
import SimpleExample from './examples/simple';
import StylesExample from './examples/styles';
import VerticalExample from './examples/vertical';
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
					<ChildrenExample/>
					<NodePropsExample/>
					<AnimatedExample/>
					<EasingExample/>
					<VerticalExample/>
					<StylesExample/>
				</div>
			</div>);
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));