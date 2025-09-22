import getTreeData from '../src/d3';

const defaultProps = {
	getChildren: n => n.children,
	direction: 'ltr',
	height: 100,
	width: 300
};

describe('getTreeData', () => {
	test('does not mutate prop data', () => {
		const data = {
			name: 'Colour',
			children: [{
				name: 'Black'
			}]
		};
		const clonedData = structuredClone(data);
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
				x: 0,
				y: 40
			}, {
				x: 130,
				y: 40
			}]
		});
	});

	test('calculates rtl tree data correctly', () => {
		const data = {
			name: 'Colour',
			children: [{
				name: 'Black'
			}]
		};
		const result = getTreeData({ ...defaultProps, data, direction: 'rtl' });
		expect(result).toMatchObject({
			nodes: [{
				x: 130,
				y: 40
			}, {
				x: 0,
				y: 40
			}]
		});
	});
});