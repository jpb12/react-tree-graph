import { extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { easeQuadOut } from 'd3-ease';
import PropTypes from 'prop-types';
import React from 'react';
import getTreeData from '../d3.js';
import Animated from './animated.js';

class AnimatedTree extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    children: PropTypes.node,
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
    }).isRequired,
    pathFunc: PropTypes.func,
    nodeShape: PropTypes.oneOf(['circle', 'image', 'polygon', 'rect']).isRequired,
    nodeProps: PropTypes.object.isRequired,
    gProps: PropTypes.object.isRequired,
    pathProps: PropTypes.object.isRequired,
    svgProps: PropTypes.object.isRequired,
    textProps: PropTypes.object.isRequired
  };
  static defaultProps = {
    duration: 500,
    easing: easeQuadOut,
    getChildren: n => n.children,
    steps: 20,
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

  render() {
    return /*#__PURE__*/React.createElement(Animated, _extends({
      duration: this.props.duration,
      easing: this.props.easing,
      getChildren: this.props.getChildren,
      height: this.props.height,
      keyProp: this.props.keyProp,
      labelProp: this.props.labelProp,
      nodeShape: this.props.nodeShape,
      nodeProps: this.props.nodeProps,
      pathFunc: this.props.pathFunc,
      steps: this.props.steps,
      width: this.props.width,
      gProps: {
        className: 'node',
        ...this.props.gProps
      },
      pathProps: {
        className: 'link',
        ...this.props.pathProps
      },
      svgProps: this.props.svgProps,
      textProps: this.props.textProps
    }, getTreeData(this.props)), this.props.children);
  }

}

export { AnimatedTree as default };
