import React from 'react';
import { shallow } from 'enzyme';

import Link from '../../Components/link';

describe('<Link>', () => {
	test('renders correctly', () => {
		const props = {
			source: {},
			target: {},
			keyProp: '',
			pathProps: {
				className: 'Link'
			},
			x1: 1,
			x2: 5,
			y1: 2,
			y2: 9
		};

		const tree = shallow(<Link {...props}/>);
		expect(tree).toMatchSnapshot();
	});

	test('click event has correct parameters', () => {
		const clickMock = jest.fn();
		const event = {};

		const props = {
			source: {
				data: {
					id: 'origin'
				}
			},
			target: {
				data: {
					id: 'target'
				}
			},
			keyProp: 'id',
			pathProps: {
				onClick: clickMock
			},
			x1: 1,
			x2: 5,
			y1: 2,
			y2: 9
		};

		const tree = shallow(<Link {...props}/>);
		tree.find('path').simulate('click', event);

		expect(clickMock).toHaveBeenCalledTimes(1);
		expect(clickMock).toHaveBeenCalledWith('origin', 'target', event);
	});
	test('right click event has correct parameters', () => {
		const clickMock = jest.fn();
		const event = {};

		const props = {
			source: {
				data: {
					id: 'origin'
				}
			},
			target: {
				data: {
					id: 'target'
				}
			},
			keyProp: 'id',
			pathProps: {
				onContextMenu: clickMock
			},
			x1: 1,
			x2: 5,
			y1: 2,
			y2: 9
		};

		const tree = shallow(<Link {...props}/>);
		tree.find('path').simulate('contextmenu', event);

		expect(clickMock).toHaveBeenCalledTimes(1);
		expect(clickMock).toHaveBeenCalledWith('origin', 'target', event);
	});
	test('clicking with no prop handler does nothing', () => {
		const props = {
			source: {
				data: {
					id: 'origin'
				}
			},
			target: {
				data: {
					id: 'target'
				}
			},
			keyProp: 'id',
			pathProps: {},
			x1: 1,
			x2: 5,
			y1: 2,
			y2: 9
		};

		const tree = shallow(<Link {...props}/>);
		tree.find('path').simulate('click');
	});
});