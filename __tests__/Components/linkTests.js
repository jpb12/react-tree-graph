import React from 'react';
import { shallow } from 'enzyme';

import Link from '../../Components/link';

describe('<Link>', () => {
	test('renders correctly', () => {
		const props = {
			source: {
				x: 1,
				y: 2
			},
			target: {
				x: 5,
				y: 9
			},
			className: 'Link',
			keyProp: ''
		};

		const tree = shallow(<Link {...props}/>);
		expect(tree).toMatchSnapshot();
	});

	test('click event has correct parameters', () => {
		const clickMock = jest.fn();
		const event = {};

		const props = {
			source: {
				x: 1,
				y: 2,
				data: {
					id: 'origin'
				}
			},
			target: {
				x: 5,
				y: 9,
				data: {
					id: 'target'
				}
			},
			className: 'Link',
			keyProp: 'id',
			onClick: clickMock
		};

		const tree = shallow(<Link {...props}/>);
		tree.find('path').simulate('click', event);

		expect(clickMock).toHaveBeenCalledTimes(1);
		expect(clickMock).toHaveBeenCalledWith('origin', 'target', event);
	});
});