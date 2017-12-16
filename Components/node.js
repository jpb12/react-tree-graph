import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	htmlProps: PropTypes.object.isRequired,
	keyProp: PropTypes.string.isRequired,
	labelProp: PropTypes.string.isRequired,
	offset: PropTypes.number.isRequired,
	radius: PropTypes.number.isRequired
};

export default class Node extends React.PureComponent{
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event) {
		this.props.htmlProps.g
			&& this.props.htmlProps.g.onClick
			&& this.props.htmlProps.g.onClick(this.props[this.props.keyProp], event);
	}
	getTransform() {
		return 'translate(' + this.props.y + ', ' + this.props.x + ')';
	}
	render() {
		return (
			<g {...this.props.htmlProps.g} transform={this.getTransform()} onClick={this.handleClick}>
				<circle {...this.props.htmlProps.circle} r={this.props.radius}/>
				<text {...this.props.htmlProps.text} dx={this.props.radius + 0.5} dy={this.props.offset}>
					{this.props[this.props.labelProp]}
				</text>
			</g>);
	}
}

Node.propTypes = propTypes;