import clone from 'clone';
import getTreeData from '../src/d3';

const defaultProps = {
	getChildren: n => n.children,
	margins: {
		bottom: 10,
		left: 20,
		right: 150,
		top: 10
	},
	height: 100,
	width: 100
};

describe('getTreeData', () => {
	test('does not mutate prop data', () => {
		const data = {
			name: 'Colour',
			children: [{
				name: 'Black'
			}]
		};
		const clonedData = clone(data);
		getTreeData({ ...defaultProps, data });
		expect(data).toMatchObject(clonedData);
	});

	test('calculates tree data correctly', () => {
		const data = {
			name: 'Colour',
			children: [{
				name: 'Black'
			}]
		};
		const result = getTreeData({ ...defaultProps, data });
		expect(result).toMatchObject({
			nodes: [{
				x: 40,
				y: 10
			}, {
				x: 40,
				y: -60
			}]
		});
	});
});