import React from 'react';
import { shallow } from 'enzyme';

import AnimatedTree from '../../src/components/animatedTree';

describe('<AnimatedTree>', () => {
	test('renders correctly', () => {
		const props = {
			data: {
				name: 'Colour',
				childs: [{
					name: 'Black'
				}]
			},
			// Must not use children prop due to special meaning in react causing shallow renderer errors
			getChildren: d => d.childs,
			height: 100,
			width: 200
		};

		const tree = shallow(<AnimatedTree {...props}/>);

		expect(tree).toMatchSnapshot();
	});

	test('default getChildren looks at children prop', () => {
		const node = {
			children: [{
				name: 'child'
			}]
		};

		const children = AnimatedTree.defaultProps.getChildren(node);

		expect(children).toBe(node.children);
	});
});