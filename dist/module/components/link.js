import _extends from '@babel/runtime/helpers/extends';
import PropTypes from 'prop-types';
import React from 'react';
import wrapHandlers from '../wrapHandlers.js';

function diagonal(x1, y1, x2, y2) {
  return `M${x1},${y1}C${(x1 + x2) / 2},${y1} ${(x1 + x2) / 2},${y2} ${x2},${y2}`;
}
function Link(props) {
  const wrappedProps = wrapHandlers(props.pathProps, props.source.data[props.keyProp], props.target.data[props.keyProp]);
  const pathFunc = props.pathFunc || diagonal;
  const d = pathFunc(props.x1, props.y1, props.x2, props.y2);
  return /*#__PURE__*/React.createElement("path", _extends({}, wrappedProps, {
    d: d
  }));
}
Link.propTypes = {
  source: PropTypes.object.isRequired,
  target: PropTypes.object.isRequired,
  keyProp: PropTypes.string.isRequired,
  x1: PropTypes.number.isRequired,
  x2: PropTypes.number.isRequired,
  y1: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired,
  pathFunc: PropTypes.func,
  pathProps: PropTypes.object.isRequired
};

export { Link as default };
