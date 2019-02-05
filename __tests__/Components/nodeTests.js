import React from 'react';
import { shallow } from 'enzyme';

import Node from '../../Components/node';

describe('<Node>', () => {
	test('renders correctly', () => {
		const props = {
			x: 1,
			y: 2,
			keyProp: '',
			labelProp: 'name',
			gProps: {
				className: 'test'
			},
			circleProps: {},
			textProps: {},
			offset: 3,
			radius: 4,
			name: 'Test Node'
		};

		const tree = shallow(<Node {...props}/>);
		expect(tree).toMatchSnapshot();
	});

	test('click event has correct parameters', () => {
		const clickMock = jest.fn();
		const event = {};

		const props = {
			x: 1,
			y: 2,
			keyProp: 'id',
			labelProp: 'name',
			gProps: {
				onClick: clickMock
			},
			circleProps: {},
			textProps: {},
			offset: 3,
			radius: 4,
			id: 'testKey',
			name: 'Test Node'
		};

		const tree = shallow(<Node {...props}/>);
		tree.find('g').simulate('click', event);

		expect(clickMock).toHaveBeenCalledTimes(1);
		expect(clickMock).toHaveBeenCalledWith('testKey', event);
	});

	test('right click event has correct parameters', () => {
		const clickMock = jest.fn();
		const event = {};

		const props = {
			x: 1,
			y: 2,
			keyProp: 'id',
			labelProp: 'name',
			gProps: {
				onContextMenu: clickMock
			},
			circleProps: {},
			textProps: {},
			offset: 3,
			radius: 4,
			id: 'testKey',
			name: 'Test Node'
		};

		const tree = shallow(<Node {...props}/>);
		tree.find('g').simulate('contextmenu', event);

		expect(clickMock).toHaveBeenCalledTimes(1);
		expect(clickMock).toHaveBeenCalledWith('testKey', event);
	});


	test('clicking with no prop handler does nothing', () => {
		const props = {
			x: 1,
			y: 2,
			keyProp: 'id',
			labelProp: 'name',
			gProps: {},
			circleProps: {},
			textProps: {},
			offset: 3,
			radius: 4,
			id: 'testKey',
			name: 'Test Node'
		};

		const tree = shallow(<Node {...props}/>);
		tree.find('g').simulate('click');
	});

	test('htmlProps applied to all elements', () => {
		const props = {
			x: 1,
			y: 2,
			keyProp: '',
			labelProp: 'name',
			gProps: {
				className: 'g'
			},
			circleProps: {
				className: 'circle'
			},
			textProps: {
				className: 'text'
			},
			offset: 3,
			radius: 4,
			name: 'Test Node'
		};

		const tree = shallow(<Node {...props}/>);
		expect(tree).toMatchSnapshot();
	});
});