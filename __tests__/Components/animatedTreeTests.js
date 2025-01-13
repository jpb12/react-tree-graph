import React from 'react';
import { shallow } from 'enzyme';

import AnimatedTree from '../../src/components/animatedTree';

describe('<AnimatedTree>', () => {
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

		const tree = shallow(<AnimatedTree {...props}/>);

		expect(tree).toMatchSnapshot();
	});
});