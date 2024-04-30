import React, { act } from 'react';
import { mount, shallow } from 'enzyme';

import { easeQuadOut } from 'd3-ease';
import Animated from '../../src/components/animated';
import Container from '../../src/components/container';

jest.useFakeTimers();

const nodes = [
	{
		x: 1,
		y: 2,
		data: {
			name: 'Colour'
		}
	}, {
		x: 100,
		y: 50,
		data: {
			name: 'Black'
		}
	}
];

const links = [{
	source: nodes[0],
	target: nodes[1]
}];

const defaultProps = {
	direction: 'ltr',
	getChildren: n => n.children,
	height: 100,
	width: 100,
	keyProp: 'name',
	labelProp: 'name',
	nodeShape: 'circle',
	duration: 1,
	easing: easeQuadOut,
	links: links,
	nodes: nodes,
	margins: { top: 10, left: 20 },
	steps: 1,
	nodeProps: {},
	gProps: {},
	pathProps: {},
	svgProps: {},
	textProps: {}
};

describe('<Animated>', () => {
	test('renders correctly and sets initial state', () => {
		const tree = shallow(<Animated {...defaultProps}/>);

		expect(tree).toMatchSnapshot();

		expect(tree.find(Container).props().nodes[1].x).toBe(1);
		expect(tree.find(Container).props().nodes[1].y).toBe(2);

		expect(tree.find(Container).props().links[0].target.x).toBe(1);
		expect(tree.find(Container).props().links[0].target.y).toBe(2);
	});

	test('animates node when moved', () => {
		const tree = mount(<Animated {...defaultProps} steps={2} duration={100}/>);

		act(() => jest.advanceTimersByTime(100));
		tree.update();

		expect(tree.find(Container).props().nodes[1].x).toBe(100);
		expect(tree.find(Container).props().nodes[1].y).toBe(50);

		tree.setProps({
			nodes: [
				nodes[0],
				{
					x: 120,
					y: 80,
					data: {
						name: 'Black'
					}
				}
			]
		});

		act(() => jest.advanceTimersByTime(50));
		tree.update();

		expect(tree.find(Container).props().nodes[1].x).toBe(115);
		expect(tree.find(Container).props().nodes[1].y).toBe(72.5);

		act(() => jest.advanceTimersByTime(50));
		tree.update();

		expect(tree.find(Container).props().nodes[1].x).toBe(120);
		expect(tree.find(Container).props().nodes[1].y).toBe(80);
	});

	test('animates link when moved', () => {
		const tree = mount(<Animated {...defaultProps} steps={2} duration={100}/>);

		act(() => jest.advanceTimersByTime(100));
		tree.update();

		expect(tree.find(Container).props().links[0].source.x).toBe(1);
		expect(tree.find(Container).props().links[0].source.y).toBe(2);
		expect(tree.find(Container).props().links[0].target.x).toBe(100);
		expect(tree.find(Container).props().links[0].target.y).toBe(50);

		tree.setProps({
			links: [{
				source: {
					x: 5,
					y: 10,
					data: {
						name: 'Colour'
					}
				},
				target: {
					x: 200,
					y: 100,
					data: {
						name: 'Black'
					}
				}
			}]
		});

		act(() => jest.advanceTimersByTime(50));
		tree.update();

		expect(tree.find(Container).props().links[0].source.x).toBe(4);
		expect(tree.find(Container).props().links[0].source.y).toBe(8);
		expect(tree.find(Container).props().links[0].target.x).toBe(175);
		expect(tree.find(Container).props().links[0].target.y).toBe(87.5);

		act(() => jest.advanceTimersByTime(50));
		tree.update();

		expect(tree.find(Container).props().links[0].source.x).toBe(5);
		expect(tree.find(Container).props().links[0].source.y).toBe(10);
		expect(tree.find(Container).props().links[0].target.x).toBe(200);
		expect(tree.find(Container).props().links[0].target.y).toBe(100);
	});

	test('animates node when added', () => {
		const tree = mount(<Animated {...defaultProps} steps={2} duration={100}/>);

		tree.setProps({
			nodes: [
				nodes[0],
				nodes[1],
				{
					x: 120,
					y: 80,
					data: {
						name: 'Purple'
					}
				}
			]
		});

		act(() => jest.advanceTimersByTime(50));
		tree.update();

		expect(tree.find(Container).props().nodes[2].x).toBe(90.25);
		expect(tree.find(Container).props().nodes[2].y).toBe(60.5);

		act(() => jest.advanceTimersByTime(50));
		tree.update();

		expect(tree.find(Container).props().nodes[2].x).toBe(120);
		expect(tree.find(Container).props().nodes[2].y).toBe(80);
	});

	test('animates node from parent when added', () => {
		const tree = mount(<Animated {...defaultProps} steps={2} duration={100}/>);

		act(() => jest.advanceTimersByTime(100));

		tree.setProps({
			nodes: [
				nodes[0],
				{
					x: 100,
					y: 50,
					data: {
						name: 'Black'
					},
					children: [{
						data: {
							name: 'Purple'
						}
					}]
				},
				{
					x: 120,
					y: 80,
					data: {
						name: 'Purple'
					}
				}
			]
		});

		act(() => jest.advanceTimersByTime(50));
		tree.update();

		expect(tree.find(Container).props().nodes[2].x).toBe(115);
		expect(tree.find(Container).props().nodes[2].y).toBe(72.5);

		act(() => jest.advanceTimersByTime(50));
		tree.update();

		expect(tree.find(Container).props().nodes[2].x).toBe(120);
		expect(tree.find(Container).props().nodes[2].y).toBe(80);
	});

	test('animates link when added', () => {
		const tree = mount(<Animated {...defaultProps} steps={2} duration={100}/>);

		tree.setProps({
			links: [
				links[0],
				{
					source: {
						x: 5,
						y: 10,
						data: {
							name: 'Colour'
						}
					},
					target: {
						x: 200,
						y: 100,
						data: {
							name: 'Purple'
						}
					}
				}
			]
		});

		act(() => jest.advanceTimersByTime(50));
		tree.update();

		expect(tree.find(Container).props().links[1].source.x).toBe(4);
		expect(tree.find(Container).props().links[1].source.y).toBe(8);
		expect(tree.find(Container).props().links[1].target.x).toBe(150.25);
		expect(tree.find(Container).props().links[1].target.y).toBe(75.5);

		act(() => jest.advanceTimersByTime(50));
		tree.update();

		expect(tree.find(Container).props().links[1].source.x).toBe(5);
		expect(tree.find(Container).props().links[1].source.y).toBe(10);
		expect(tree.find(Container).props().links[1].target.x).toBe(200);
		expect(tree.find(Container).props().links[1].target.y).toBe(100);
	});

	test('animates node when removed', () => {
		const tree = mount(<Animated {...defaultProps} steps={2} duration={100}/>);

		act(() => jest.advanceTimersByTime(100));

		tree.setProps({
			nodes: [
				nodes[0]
			]
		});

		act(() => jest.advanceTimersByTime(50));
		tree.update();

		expect(tree.find(Container).props().nodes[1].x).toBe(25.75);
		expect(tree.find(Container).props().nodes[1].y).toBe(14);

		act(() => jest.advanceTimersByTime(50));
		tree.update();

		expect(tree.find(Container).props().nodes.length).toBe(1);
	});

	test('animates link when removed', () => {
		const tree = mount(<Animated {...defaultProps} steps={2} duration={100}/>);

		act(() => jest.advanceTimersByTime(100));

		tree.setProps({
			links: []
		});

		act(() => jest.advanceTimersByTime(50));
		tree.update();

		expect(tree.find(Container).props().links[0].source.x).toBe(75.25);
		expect(tree.find(Container).props().links[0].source.y).toBe(38);
		expect(tree.find(Container).props().links[0].target.x).toBe(100);
		expect(tree.find(Container).props().links[0].target.y).toBe(50);

		act(() => jest.advanceTimersByTime(50));
		tree.update();

		expect(tree.find(Container).props().links.length).toBe(0);
	});

	test('animates from inital value on mount', () => {
		const tree = mount(<Animated {...defaultProps} duration={100}/>);

		expect(tree.find(Container).props().nodes[1].x).toBe(1);
		expect(tree.find(Container).props().nodes[1].y).toBe(2);

		act(() => jest.advanceTimersByTime(100));
		tree.update();

		expect(tree.find(Container).props().nodes[1].x).toBe(100);
		expect(tree.find(Container).props().nodes[1].y).toBe(50);
	});

	test('does not animate when props other than nodes or links change', () => {
		const tree = shallow(<Animated {...defaultProps}/>);

		tree.setProps({ nodeShape: 'rect' });

		expect(tree).toMatchSnapshot();
	});
});