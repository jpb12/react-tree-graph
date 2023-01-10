import _extends from '@babel/runtime/helpers/extends';
import PropTypes from 'prop-types';
import React from 'react';
import Link from './link.js';
import Node from './node.js';

function Container(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props.svgProps, {
    height: props.height,
    width: props.width
  }), props.children, /*#__PURE__*/React.createElement("g", {
    transform: `translate(${props.margins.left}, ${props.margins.top})`
  }, props.links.map(link => /*#__PURE__*/React.createElement(Link, {
    key: link.target.data[props.keyProp],
    keyProp: props.keyProp,
    pathFunc: props.pathFunc,
    source: link.source,
    target: link.target,
    x1: link.source.x,
    x2: link.target.x,
    y1: link.source.y,
    y2: link.target.y,
    pathProps: {
      ...props.pathProps,
      ...link.target.data.pathProps
    }
  })), props.nodes.map(node => /*#__PURE__*/React.createElement(Node, _extends({
    key: node.data[props.keyProp],
    keyProp: props.keyProp,
    labelProp: props.labelProp,
    direction: props.direction,
    shape: props.nodeShape,
    x: node.x,
    y: node.y
  }, node.data, {
    nodeProps: {
      ...props.nodeProps,
      ...node.data.nodeProps
    },
    gProps: {
      ...props.gProps,
      ...node.data.gProps
    },
    textProps: {
      ...props.textProps,
      ...node.data.textProps
    }
  })))));
}
Container.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf(['ltr', 'rtl']).isRequired,
  height: PropTypes.number.isRequired,
  keyProp: PropTypes.string.isRequired,
  labelProp: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  margins: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired
  }).isRequired,
  nodes: PropTypes.array.isRequired,
  nodeClassName: PropTypes.string,
  nodeShape: PropTypes.string.isRequired,
  nodeProps: PropTypes.object.isRequired,
  pathFunc: PropTypes.func,
  width: PropTypes.number.isRequired,
  gProps: PropTypes.object.isRequired,
  pathProps: PropTypes.object.isRequired,
  svgProps: PropTypes.object.isRequired,
  textProps: PropTypes.object.isRequired
};

export { Container as default };
