import React from 'react';
import { shallow } from 'enzyme';

import Container from '../../Components/container';

const nodes = [
	{
		x: 1,
		y: 2,
		data: {
			name: 'Colour'
		}
	}, {
		x: 100,
		y: 50,
		data: {
			name: 'Black'
		}
	}
];

describe('<Container>', () => {
	test('renders correctly', () => {
		const props = {
			nodes: nodes,
			links: [{
				source: nodes[0],
				target: nodes[1]
			}],
			height: 100,
			keyProp: 'name',
			labelProp: 'name',			
			htmlProps: {},
			nodeOffset: 3.5,
			nodeRadius: 5,
			width: 200
		};

		const tree = shallow(<Container {...props}/>);

		expect(tree).toMatchSnapshot();
	});

	test('html tree props added', () => {
		const props = {
			nodes: [],
			links: [],
			height: 100,
			keyProp: 'name',
			labelProp: 'name',			
			htmlProps: {
				tree: {
					className: 'test-class',
					stoke: 'none'
				}
			},
			nodeOffset: 3.5,
			nodeRadius: 5,
			width: 200
		};

		const tree = shallow(<Container {...props}/>);

		expect(tree).toMatchSnapshot();
	});
});