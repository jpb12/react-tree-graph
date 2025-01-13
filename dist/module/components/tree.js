import _extends from '@babel/runtime/helpers/extends';
import React from 'react';
import getTreeData from '../d3.js';
import Container from './container.js';

function Tree(props) {
  const propsWithDefaults = {
    direction: 'ltr',
    getChildren: n => n.children,
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
  return /*#__PURE__*/React.createElement(Container, _extends({
    getChildren: propsWithDefaults.getChildren,
    direction: propsWithDefaults.direction,
    height: propsWithDefaults.height,
    keyProp: propsWithDefaults.keyProp,
    labelProp: propsWithDefaults.labelProp,
    nodeShape: propsWithDefaults.nodeShape,
    nodeProps: propsWithDefaults.nodeProps,
    pathFunc: propsWithDefaults.pathFunc,
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

export { Tree as default };
