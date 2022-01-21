import { extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import PropTypes from 'prop-types';
import React from 'react';
import Link from './link.js';
import Node from './node.js';

class Container extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    height: PropTypes.number.isRequired,
    keyProp: PropTypes.string.isRequired,
    labelProp: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired,
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

  render() {
    return /*#__PURE__*/React.createElement("svg", _extends({}, this.props.svgProps, {
      height: this.props.height,
      width: this.props.width
    }), this.props.children, /*#__PURE__*/React.createElement("g", null, this.props.links.map(link => /*#__PURE__*/React.createElement(Link, {
      key: link.target.data[this.props.keyProp],
      keyProp: this.props.keyProp,
      pathFunc: this.props.pathFunc,
      source: link.source,
      target: link.target,
      x1: link.source.x,
      x2: link.target.x,
      y1: link.source.y,
      y2: link.target.y,
      pathProps: { ...this.props.pathProps,
        ...link.target.data.pathProps
      }
    })), this.props.nodes.map(node => /*#__PURE__*/React.createElement(Node, _extends({
      key: node.data[this.props.keyProp],
      keyProp: this.props.keyProp,
      labelProp: this.props.labelProp,
      shape: this.props.nodeShape,
      x: node.x,
      y: node.y,
      nodeProps: { ...this.props.nodeProps,
        ...node.data.nodeProps
      },
      gProps: { ...this.props.gProps,
        ...node.data.gProps
      },
      textProps: { ...this.props.textProps,
        ...node.data.textProps
      }
    }, node.data)))));
  }

}

export { Container as default };
