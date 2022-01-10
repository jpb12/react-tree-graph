const regex = /on[A-Z]/;

function wrapper(func, args) {
  return event => func(event, ...args);
} // Wraps any event handlers passed in as props with a function that passes additional arguments


function wrapHandlers(props) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  const handlers = Object.keys(props).filter(propName => regex.test(propName) && typeof props[propName] === 'function');
  const wrappedHandlers = handlers.reduce((acc, handler) => {
    acc[handler] = wrapper(props[handler], args);
    return acc;
  }, {});
  return { ...props,
    ...wrappedHandlers
  };
}

export { wrapHandlers as default };
