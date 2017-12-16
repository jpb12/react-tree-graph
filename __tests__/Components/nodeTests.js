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
			htmlProps: {
				g: {
					className: 'test'
				}
			},
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
			htmlProps: {
				g: {
					onClick: clickMock
				}
			},
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

	test('clicking with no prop handler does nothing', () => {
		const props = {
			x: 1,
			y: 2,
			keyProp: 'id',
			labelProp: 'name',
			htmlProps: {},
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
			htmlProps: {
				g: {
					className: 'g'
				},
				circle: {
					className: 'circle'
				},
				text: {
					className: 'text'
				}
			},
			offset: 3,
			radius: 4,
			name: 'Test Node'
		};

		const tree = shallow(<Node {...props}/>);
		expect(tree).toMatchSnapshot();
	});
});