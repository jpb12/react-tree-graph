import React from 'react';
import { mount, shallow } from 'enzyme';

import { easeQuadOut } from 'd3-ease';
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
			animatedProps: [
				{
					name: 'x'
				}, {
					name: 'y'
				}
			],
			component: DummyComponent,
			duration: 1,
			easing: easeQuadOut,
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
			animatedProps: [
				{
					name: 'x'
				}, {
					name: 'y'
				}
			],
			component: DummyComponent,
			duration: 100,
			easing: easeQuadOut,
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

	test('animates from inital value on mount', () => {
		const props = {
			animatedProps: [
				{
					name: 'x',
					initialValue: 1
				}, {
					name: 'y',
					initialValue: 1
				}
			],
			component: DummyComponent,
			duration: 100,
			easing: easeQuadOut,
			enabled: true,
			steps: 1,
			x: 2,
			y: 3
		};

		const tree = mount(<Animated {...props}/>);
		
		expect(tree.state()).toMatchObject({
			x: 1,
			y: 1
		});

		jest.runTimersToTime(100);

		expect(tree.state()).toMatchObject({
			x: 2,
			y: 3
		});
	});

	test('does nothing when not enabled', () => {
		const props = {
			animatedProps: [
				{
					name: 'x'
				}, {
					name: 'y'
				}
			],
			component: DummyComponent,
			duration: 1,
			easing: easeQuadOut,
			enabled: false,
			steps: 1,
			x: 2,
			y: 3
		};

		const tree = shallow(<Animated {...props}/>);
		
		tree.setProps({x: 5, y: 6});

		expect(tree).toMatchSnapshot();
	});

	test('does nothing when props change does not change animated value', () => {
		const props = {
			animatedProps: [
				{
					name: 'x'
				}, {
					name: 'y'
				}
			],
			component: DummyComponent,
			duration: 100,
			easing: easeQuadOut,
			enabled: true,
			steps: 2,
			x: 2,
			y: 3,
			z: 4
		};

		const tree = shallow(<Animated {...props}/>);
		
		tree.setProps({z: 7});

		expect(tree.state()).toMatchObject({
			x: 2,
			y: 3
		});
	});
});