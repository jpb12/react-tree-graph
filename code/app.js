import React from 'react';
import ReactDOM from 'react-dom';

import AnimatedExample from './examples/animated';
import ChildrenExample from './examples/children';
import ClickingExample from './examples/clicking';
import CustomLabelsExample from './examples/customLabels';
import EasingExample from './examples/easing';
import ImageExample from './examples/image';
import NodePropsExample from './examples/nodeProps';
import PolygonExample from './examples/polygon';
import RectExample from './examples/rect';
import SimpleExample from './examples/simple';
import StraightExample from './examples/straight';
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
					<CustomLabelsExample/>
					<RectExample/>
					<PolygonExample/>
					<ImageExample/>
					<ChildrenExample/>
					<NodePropsExample/>
					<StraightExample/>
					<AnimatedExample/>
					<EasingExample/>
					<VerticalExample/>
					<StylesExample/>
				</div>
			</div>);
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));