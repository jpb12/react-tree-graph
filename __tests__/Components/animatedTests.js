import React from 'react';
import { shallow } from 'enzyme';

import Animated from '../../Components/animated';

jest.useFakeTimers();

class DummyComponent extends React.PureComponent{
	render() {
		return <div/>;
	}
}

describe('<Animated>', () => {
	test('renders correctly and sets initial state', () => {
		const props = {
			animatedProps: ['x', 'y'],
			component: DummyComponent,
			duration: 1,
			enabled: true,
			steps: 1,
			x: 2,
			y: 3
		};

		const tree = shallow(<Animated {...props}/>);
		expect(tree).toMatchSnapshot();

		expect(tree.state()).toMatchObject({
			x: 2,
			y: 3
		});
	});

	test('animates when props change', () => {
		const props = {
			animatedProps: ['x', 'y'],
			component: DummyComponent,
			duration: 100,
			enabled: true,
			steps: 2,
			x: 2,
			y: 3
		};

		const tree = shallow(<Animated {...props}/>);
		
		tree.setProps({x: 5, y: 6});

		jest.runTimersToTime(50);

		expect(tree.state()).toMatchObject({
			x: 4.25,
			y: 5.25
		});
		expect(tree).toMatchSnapshot();

		jest.runTimersToTime(50);

		expect(tree.state()).toMatchObject({
			x: 5,
			y: 6
		});
		expect(tree).toMatchSnapshot();
	});

	test('does nothing when not enabled', () => {
		const props = {
			animatedProps: ['x', 'y'],
			component: DummyComponent,
			duration: 1,
			enabled: false,
			steps: 1,
			x: 2,
			y: 3
		};

		const tree = shallow(<Animated {...props}/>);
		
		tree.setProps({x: 5, y: 6});

		expect(tree).toMatchSnapshot();
	});
});