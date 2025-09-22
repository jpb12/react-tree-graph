import wrapHandlers from '../src/wrapHandlers';

describe('wrapHandlers', () => {
	test('does nothing if no events', () => {
		const result = wrapHandlers({ x: 5 }, 1, 2);
		expect(result).toMatchObject({ x: 5 });
	});

	test.each(['onBlur', 'onClick', 'onContextMenu', 'onFocus'])(
		'wraps %s',
		name => {
			const handlerMock = jest.fn();
			const result = wrapHandlers({ [name]: handlerMock }, 1, 2);
			result[name](0);
			expect(handlerMock).toHaveBeenCalledWith(0, 1, 2);
		}
	);
});