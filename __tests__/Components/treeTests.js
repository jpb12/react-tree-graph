import React from 'react';
import { shallow } from 'enzyme';

import Tree from '../../src/components/tree';

describe('<Tree>', () => {
	test('renders correctly', () => {
		const props = {
			data: {
				name: 'Colour',
				children: [{
					name: 'Black'
				}]
			},
			height: 100,
			width: 200
		};

		const tree = shallow(<Tree {...props}/>);

		expect(tree).toMatchSnapshot();
	});
});