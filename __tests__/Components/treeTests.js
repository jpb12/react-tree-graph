import React from 'react';
import { shallow } from 'enzyme';

import Link from '../../Components/link';
import Node from '../../Components/node';
import Tree from '../../Components/tree';

const data = {
	name: 'Colour',
	childs: [{
		name: 'Black'
	}]
};

describe('<Tree>', () => {
	test('renders correctly', () => {
		const props = {
			data: data,
			// Must not use children prop due to special meaning in react causing shallow renderer errors
			getChildren: d => d.childs,
			height: 100,
			width: 200,
		};

		const tree = shallow(<Tree {...props}/>);

		expect(tree).toMatchSnapshot();
	});
});