import _extends from '@babel/runtime/helpers/extends';
import PropTypes from 'prop-types';
import React from 'react';
import wrapHandlers from '../wrapHandlers.js';

function Node(props) {
  function getTransform() {
    return `translate(${props.x}, ${props.y})`;
  }
  let offset = 0.5;
  let nodePropsWithDefaults = props.nodeProps;
  switch (props.shape) {
    case 'circle':
      nodePropsWithDefaults = {
        r: 5,
        ...nodePropsWithDefaults
      };
      offset += nodePropsWithDefaults.r;
      break;
    case 'image':
    case 'rect':
      nodePropsWithDefaults = {
        height: 10,
        width: 10,
        ...nodePropsWithDefaults
      };
      nodePropsWithDefaults = {
        x: -nodePropsWithDefaults.width / 2,
        y: -nodePropsWithDefaults.height / 2,
        ...nodePropsWithDefaults
      };
      offset += nodePropsWithDefaults.width / 2;
      break;
  }
  if (props.direction === 'rtl') {
    offset = -offset;
  }
  const wrappedNodeProps = wrapHandlers(nodePropsWithDefaults, props[props.keyProp]);
  const wrappedGProps = wrapHandlers(props.gProps, props[props.keyProp]);
  const wrappedTextProps = wrapHandlers(props.textProps, props[props.keyProp]);
  const label = typeof props[props.labelProp] === 'string' ? /*#__PURE__*/React.createElement("text", _extends({
    dx: offset,
    dy: 5
  }, wrappedTextProps), props[props.labelProp]) : /*#__PURE__*/React.createElement("g", _extends({
    transform: `translate(${offset}, 5)`
  }, wrappedTextProps), props[props.labelProp]);
  return /*#__PURE__*/React.createElement("g", _extends({}, wrappedGProps, {
    transform: getTransform(),
    direction: props.direction === 'rtl' ? 'rtl' : null
  }), /*#__PURE__*/React.createElement(props.shape, wrappedNodeProps), label);
}
Node.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  keyProp: PropTypes.string.isRequired,
  labelProp: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['ltr', 'rtl']).isRequired,
  shape: PropTypes.string.isRequired,
  nodeProps: PropTypes.object.isRequired,
  gProps: PropTypes.object.isRequired,
  textProps: PropTypes.object.isRequired
};

export { Node as default };
