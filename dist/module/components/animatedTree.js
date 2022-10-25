import _extends from '@babel/runtime/helpers/extends';
import { easeQuadOut } from 'd3-ease';
import PropTypes from 'prop-types';
import React from 'react';
import getTreeData from '../d3.js';
import Animated from './animated.js';

function AnimatedTree(props) {
  return /*#__PURE__*/React.createElement(Animated, _extends({
    duration: props.duration,
    easing: props.easing,
    getChildren: props.getChildren,
    direction: props.direction,
    height: props.height,
    keyProp: props.keyProp,
    labelProp: props.labelProp,
    nodeShape: props.nodeShape,
    nodeProps: props.nodeProps,
    pathFunc: props.pathFunc,
    steps: props.steps,
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
AnimatedTree.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.node,
  direction: PropTypes.oneOf(['ltr', 'rtl']).isRequired,
  duration: PropTypes.number.isRequired,
  easing: PropTypes.func.isRequired,
  steps: PropTypes.number.isRequired,
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
  }),
  pathFunc: PropTypes.func,
  nodeShape: PropTypes.oneOf(['circle', 'image', 'polygon', 'rect']).isRequired,
  nodeProps: PropTypes.object.isRequired,
  gProps: PropTypes.object.isRequired,
  pathProps: PropTypes.object.isRequired,
  svgProps: PropTypes.object.isRequired,
  textProps: PropTypes.object.isRequired
};
AnimatedTree.defaultProps = {
  direction: 'ltr',
  duration: 500,
  easing: easeQuadOut,
  getChildren: n => n.children,
  steps: 20,
  keyProp: 'name',
  labelProp: 'name',
  nodeShape: 'circle',
  nodeProps: {},
  gProps: {},
  pathProps: {},
  svgProps: {},
  textProps: {}
};

export { AnimatedTree as default };
