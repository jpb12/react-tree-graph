import React from 'react';
import { shallow } from 'enzyme';

import Node from '../../src/components/node';

const defaultProps = {
	x: 1,
	y: 2,
	keyProp: '',
	labelProp: 'name',
	shape: 'circle',
	gProps: {
		className: 'test'
	},
	nodeProps: {},
	textProps: {},
	name: 'Test Node'
};

describe('<Node>', () => {
	test('renders circle correctly', () => {
		const tree = shallow(<Node {...defaultProps}/>);
		expect(tree).toMatchSnapshot();
	});

	test('renders circle correctly with custom radius', () => {
		const tree = shallow(<Node {...defaultProps} nodeProps={{ r: 10 }}/>);
		expect(tree).toMatchSnapshot();
	});

	test('renders rect correctly', () => {
		const tree = shallow(<Node {...defaultProps} shape="rect"/>);
		expect(tree).toMatchSnapshot();
	});

	test('renders rect correctly with custom size', () => {
		const tree = shallow(<Node {...defaultProps} shape="rect" nodeProps={{ height: 20, width: 30 }}/>);
		expect(tree).toMatchSnapshot();
	});

	test('click event has correct parameters', () => {
		const clickMock = jest.fn();
		const event = {};

		const props = {
			keyProp: 'id',
			gProps: {
				onClick: clickMock
			},
			id: 'testKey'
		};

		const tree = shallow(<Node {...defaultProps} {...props}/>);
		tree.find('g').simulate('click', event);

		expect(clickMock).toHaveBeenCalledTimes(1);
		expect(clickMock).toHaveBeenCalledWith(event, 'testKey');
	});

	test('right click event has correct parameters', () => {
		const rightClickMock = jest.fn();
		const event = {};

		const props = {
			keyProp: 'id',
			gProps: {
				onContextMenu: rightClickMock
			},
			id: 'testKey'
		};

		const tree = shallow(<Node {...defaultProps} {...props}/>);
		tree.find('g').simulate('contextmenu', event);

		expect(rightClickMock).toHaveBeenCalledTimes(1);
		expect(rightClickMock).toHaveBeenCalledWith(event, 'testKey');
	});


	test('clicking with no prop handler does nothing', () => {
		const props = {
			keyProp: 'id',
			id: 'testKey'
		};

		const tree = shallow(<Node {...defaultProps} {...props}/>);
		tree.find('g').simulate('click');
	});

	test('htmlProps applied to all elements', () => {
		const props = {
			gProps: {
				className: 'g'
			},
			nodeProps: {
				className: 'circle'
			},
			textProps: {
				className: 'text'
			}
		};

		const tree = shallow(<Node {...defaultProps} {...props}/>);
		expect(tree).toMatchSnapshot();
	});
});