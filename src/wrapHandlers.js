const regex = /on[A-Z]/;

function wrapper(func, args) {
	return event => func(event, ...args);
}

// Wraps any event handlers passed in as props with a function that passes additional arguments
export default function wrapHandlers(props, ...args) {
	const handlers = Object.keys(props).filter(propName => regex.test(propName) && typeof props[propName] === 'function');
	const wrappedHandlers = handlers.reduce((acc, handler) => {
		acc[handler] = wrapper(props[handler], args);
		return acc;
	}, {});
	return { ...props, ...wrappedHandlers };
}