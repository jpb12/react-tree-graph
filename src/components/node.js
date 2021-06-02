import PropTypes from 'prop-types';
import React from 'react';
import wrapHandlers from '../wrapHandlers';

const propTypes = {
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	keyProp: PropTypes.string.isRequired,
	labelProp: PropTypes.string.isRequired,
	shape: PropTypes.string.isRequired,
	nodeProps: PropTypes.object.isRequired,
	partner: PropTypes.object,
	gProps: PropTypes.object.isRequired,
	textProps: PropTypes.object.isRequired
};

export default class Node extends React.PureComponent {
	getTransform() {
		return `translate(${this.props.y}, ${this.props.x})`;
	}

	render() {
		let offset = 0;
		let nodePropsWithDefaults = this.props.nodeProps;
		switch (this.props.shape) {
			case 'circle':
				nodePropsWithDefaults = { r: 5, ...nodePropsWithDefaults };
				offset = nodePropsWithDefaults.r;
				break;
			case 'image':
			case 'rect':
				nodePropsWithDefaults = { height: 10, width: 10, ...nodePropsWithDefaults };
				nodePropsWithDefaults = { x: -nodePropsWithDefaults.width / 2, y: -nodePropsWithDefaults.height / 2, ...nodePropsWithDefaults };
				offset = nodePropsWithDefaults.width / 2;
				break;
		}

		const wrappedNodeProps = wrapHandlers(
			nodePropsWithDefaults,
			this.props[this.props.keyProp]
		);

		const wrappedGProps = wrapHandlers(
			this.props.gProps,
			this.props[this.props.keyProp]
		);

		const wrappedTextProps = wrapHandlers(
			this.props.textProps,
			this.props[this.props.keyProp]
		);

		const fontSize = wrappedTextProps.fontSize;
		return (
			<g {...wrappedGProps} transform={this.getTransform()} id={this.props[this.props.keyProp]}>
				<this.props.shape {...wrappedNodeProps}/>
				<text {...wrappedTextProps} dx={offset + 0.5}>
					{(!this.props.partner.name || !this.props.partner.name.length) && <tspan dy={fontSize / 2.5}>{this.props[this.props.labelProp]}</tspan>}
					{this.props.partner.name && this.props.partner.name.length && <tspan dy={-fontSize / 2.5}>{this.props[this.props.labelProp]}</tspan>}
					{this.props.partner.name && this.props.partner.name.length && <tspan x={offset + 0.5} dy={fontSize + 0.5}>{this.props.partner.name}</tspan>}
				</text>
			</g>);
	}
}

Node.propTypes = propTypes;