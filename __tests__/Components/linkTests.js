import React from 'react';
import { shallow } from 'enzyme';

import Link from '../../src/components/link';

const defaultProps = {
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
		className: 'Link'
	},
	x1: 1,
	x2: 5,
	y1: 2,
	y2: 9
};

describe('<Link>', () => {
	test('renders correctly', () => {
		const tree = shallow(<Link {...defaultProps}/>);
		expect(tree).toMatchSnapshot();
	});

	test('renders correctly with custom path', () => {
		function straightPath(x1, y1, x2, y2) {
			return `M${y1},${x1} ${y2},${x2}`;
		}
		const tree = shallow(<Link {...defaultProps} pathFunc={straightPath}/>);
		expect(tree).toMatchSnapshot();
	});

	test('click event has correct parameters', () => {
		const clickMock = jest.fn();
		const event = {};

		const props = {
			pathProps: {
				onClick: clickMock
			}
		};

		const tree = shallow(<Link {...defaultProps} {...props}/>);
		tree.find('path').simulate('click', event);

		expect(clickMock).toHaveBeenCalledTimes(1);
		expect(clickMock).toHaveBeenCalledWith(event, 'origin', 'target');
	});

	test('right click event has correct parameters', () => {
		const rightClickMock = jest.fn();
		const event = {};

		const props = {
			pathProps: {
				onContextMenu: rightClickMock
			}
		};

		const tree = shallow(<Link {...defaultProps} {...props}/>);
		tree.find('path').simulate('contextmenu', event);

		expect(rightClickMock).toHaveBeenCalledTimes(1);
		expect(rightClickMock).toHaveBeenCalledWith(event, 'origin', 'target');
	});

	test('clicking with no prop handler does nothing', () => {
		const tree = shallow(<Link {...defaultProps}/>);
		tree.find('path').simulate('click');
	});
});