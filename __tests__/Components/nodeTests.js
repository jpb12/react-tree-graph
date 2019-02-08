import React from 'react';
import { shallow } from 'enzyme';

import Node from '../../Components/node';

const defaultProps = {
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

describe('<Node>', () => {
	test('renders correctly', () => {
		const tree = shallow(<Node {...defaultProps}/>);
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
		expect(clickMock).toHaveBeenCalledWith('testKey', event);
	});

	test('right click event has correct parameters', () => {
		const clickMock = jest.fn();
		const event = {};

		const props = {
			keyProp: 'id',
			gProps: {
				onContextMenu: clickMock
			},
			id: 'testKey'
		};

		const tree = shallow(<Node {...defaultProps} {...props}/>);
		tree.find('g').simulate('contextmenu', event);

		expect(clickMock).toHaveBeenCalledTimes(1);
		expect(clickMock).toHaveBeenCalledWith('testKey', event);
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
			circleProps: {
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