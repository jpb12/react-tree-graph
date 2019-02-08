import React from 'react';
import { shallow } from 'enzyme';

import Container from '../../Components/container';
import Link from '../../Components/link';
import Node from '../../Components/node';

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

const defaultProps = {
	nodes: [],
	links: [],
	height: 100,
	keyProp: 'name',
	labelProp: 'name',
	nodeOffset: 3.5,
	nodeRadius: 5,
	width: 200,
	circleProps: {},
	gProps: {},
	pathProps: {},
	svgProps: {},
	textProps: {}
};

describe('<Container>', () => {
	test('renders correctly', () => {
		const props = {
			nodes: nodes,
			links: [{
				source: nodes[0],
				target: nodes[1]
			}]
		};

		const tree = shallow(<Container {...defaultProps} {...props}/>);

		expect(tree).toMatchSnapshot();
	});

	test('renders children', () => {
		const props = {
			nodes: nodes,
			links: [{
				source: nodes[0],
				target: nodes[1]
			}]
		};

		const tree = shallow(<Container {...defaultProps} {...props}><text>Extra child</text></Container>);

		expect(tree).toMatchSnapshot();
	});

	test('html tree props added', () => {
		const props = {
			svgProps: {
				className: 'test-class',
				stoke: 'none'
			}
		};

		const tree = shallow(<Container {...defaultProps} {...props}/>);

		expect(tree).toMatchSnapshot();
	});

	test('path props combined', () => {
		const props = {
			links: [{

				source: nodes[0],
				target: { ...nodes[1], data: { name: 1 } }
			}, {
				name: 2,
				source: nodes[0],
				target: { ...nodes[1], data: { name: 1, pathProps: { className: 'override' } } }
			}],
			pathProps: {
				className: 'default'
			}
		};

		const tree = shallow(<Container {...defaultProps} {...props}/>);

		const links = tree.find(Link);
		expect(links.length).toBe(2);
		expect(links.at(0).props().pathProps).toEqual({ className: 'default' });
		expect(links.at(1).props().pathProps).toEqual({ className: 'override' });
	});

	test('node props combined', () => {
		const props = {
			nodes: [
				{ ...nodes[0], data: { name: 1, gProps: { className: 'default' } } },
				{ ...nodes[1], data: { name: 2, gProps: { className: 'override' } } }
			]
		};

		const tree = shallow(<Container {...defaultProps} {...props}/>);

		const domNodes = tree.find(Node);
		expect(domNodes.length).toBe(2);
		expect(domNodes.at(0).props().gProps).toEqual({ className: 'default' });
		expect(domNodes.at(1).props().gProps).toEqual({ className: 'override' });
	});
});