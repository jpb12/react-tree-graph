import _extends from '@babel/runtime/helpers/extends';
import PropTypes from 'prop-types';
import React from 'react';
import getTreeData from '../d3.js';
import Container from './container.js';

function Tree(props) {
  return /*#__PURE__*/React.createElement(Container, _extends({
    animated: props.animated,
    getChildren: props.getChildren,
    height: props.height,
    keyProp: props.keyProp,
    labelProp: props.labelProp,
    nodeShape: props.nodeShape,
    nodeProps: props.nodeProps,
    pathFunc: props.pathFunc,
    width: props.width,
    gProps: {
      className: 'node',
      ...props.gProps
    },
    pathProps: {
      className: 'link',
      ...props.pathProps
    },
    svgProps: props.svgProps,
    textProps: props.textProps
  }, getTreeData(props)), props.children);
}
Tree.propTypes = {
  data: PropTypes.object.isRequired,
  animated: PropTypes.bool.isRequired,
  children: PropTypes.node,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  keyProp: PropTypes.string.isRequired,
  labelProp: PropTypes.string.isRequired,
  getChildren: PropTypes.func.isRequired,
  margins: PropTypes.shape({
    bottom: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired
  }).isRequired,
  pathFunc: PropTypes.func,
  nodeShape: PropTypes.oneOf(['circle', 'image', 'polygon', 'rect']).isRequired,
  nodeProps: PropTypes.object.isRequired,
  gProps: PropTypes.object.isRequired,
  pathProps: PropTypes.object.isRequired,
  svgProps: PropTypes.object.isRequired,
  textProps: PropTypes.object.isRequired
};
Tree.defaultProps = {
  animated: false,
  getChildren: n => n.children,
  keyProp: 'name',
  labelProp: 'name',
  margins: {
    bottom: 10,
    left: 20,
    right: 150,
    top: 10
  },
  nodeShape: 'circle',
  nodeProps: {},
  gProps: {},
  pathProps: {},
  svgProps: {},
  textProps: {}
};

export { Tree as default };
