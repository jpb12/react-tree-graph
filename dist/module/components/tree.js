import { extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import PropTypes from 'prop-types';
import React from 'react';
import getTreeData from '../d3.js';
import Container from './container.js';

class Tree extends React.PureComponent {
  static propTypes = {
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
  static defaultProps = {
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

  render() {
    return /*#__PURE__*/React.createElement(Container, _extends({
      animated: this.props.animated,
      getChildren: this.props.getChildren,
      height: this.props.height,
      keyProp: this.props.keyProp,
      labelProp: this.props.labelProp,
      nodeShape: this.props.nodeShape,
      nodeProps: this.props.nodeProps,
      pathFunc: this.props.pathFunc,
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

export { Tree as default };
