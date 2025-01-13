import _extends from '@babel/runtime/helpers/extends';
import { easeQuadOut } from 'd3-ease';
import React from 'react';
import getTreeData from '../d3.js';
import Animated from './animated.js';

function AnimatedTree(props) {
  const propsWithDefaults = {
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
    textProps: {},
    ...props
  };
  return /*#__PURE__*/React.createElement(Animated, _extends({
    duration: propsWithDefaults.duration,
    easing: propsWithDefaults.easing,
    getChildren: propsWithDefaults.getChildren,
    direction: propsWithDefaults.direction,
    height: propsWithDefaults.height,
    keyProp: propsWithDefaults.keyProp,
    labelProp: propsWithDefaults.labelProp,
    nodeShape: propsWithDefaults.nodeShape,
    nodeProps: propsWithDefaults.nodeProps,
    pathFunc: propsWithDefaults.pathFunc,
    steps: propsWithDefaults.steps,
    width: propsWithDefaults.width,
    gProps: {
      className: 'node',
      ...propsWithDefaults.gProps
    },
    pathProps: {
      className: 'link',
      ...propsWithDefaults.pathProps
    },
    svgProps: propsWithDefaults.svgProps,
    textProps: propsWithDefaults.textProps
  }, getTreeData(propsWithDefaults)), propsWithDefaults.children);
}

export { AnimatedTree as default };
