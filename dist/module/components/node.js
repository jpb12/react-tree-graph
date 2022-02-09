import { extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import PropTypes from 'prop-types';
import React from 'react';
import wrapHandlers from '../wrapHandlers.js';

class Node extends React.PureComponent {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    keyProp: PropTypes.string.isRequired,
    labelProp: PropTypes.string.isRequired,
    shape: PropTypes.string.isRequired,
    nodeProps: PropTypes.object.isRequired,
    gProps: PropTypes.object.isRequired,
    textProps: PropTypes.object.isRequired
  };

  getTransform() {
    return `translate(${this.props.y}, ${this.props.x})`;
  }

  render() {
    let offset = 0;
    let nodePropsWithDefaults = this.props.nodeProps;

    switch (this.props.shape) {
      case 'circle':
        nodePropsWithDefaults = {
          r: 5,
          ...nodePropsWithDefaults
        };
        offset = nodePropsWithDefaults.r;
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
        offset = nodePropsWithDefaults.width / 2;
        break;
    }

    const wrappedNodeProps = wrapHandlers(nodePropsWithDefaults, this.props[this.props.keyProp]);
    const wrappedGProps = wrapHandlers(this.props.gProps, this.props[this.props.keyProp]);
    const wrappedTextProps = wrapHandlers(this.props.textProps, this.props[this.props.keyProp]);
    const label = typeof this.props[this.props.labelProp] === 'string' ? /*#__PURE__*/React.createElement("text", _extends({
      dx: offset + 0.5,
      dy: 5
    }, wrappedTextProps), this.props[this.props.labelProp]) : /*#__PURE__*/React.createElement("g", _extends({
      transform: `translate(${offset + 0.5}, 5)`
    }, wrappedTextProps), this.props[this.props.labelProp]);
    return /*#__PURE__*/React.createElement("g", _extends({}, wrappedGProps, {
      transform: this.getTransform()
    }), /*#__PURE__*/React.createElement(this.props.shape, wrappedNodeProps), label);
  }

}

export { Node as default };
