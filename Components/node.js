import React from 'react';

const propTypes = {
	x: React.PropTypes.number.isRequired,
	y: React.PropTypes.number.isRequired,
	className: React.PropTypes.string,
	keyProp: React.PropTypes.string.isRequired,
	labelProp: React.PropTypes.string.isRequired,
	onClick: React.PropTypes.func,
	offset: React.PropTypes.number.isRequired,
	radius: React.PropTypes.number.isRequired
};

export default class Node extends React.PureComponent{
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.props.onClick && this.props.onClick(this.props[this.props.keyProp]);
	}
	getTransform() {
		return 'translate(' + this.props.y + ', ' + this.props.x + ')';
	}
	render() {
		return (
			<g className={this.props.className} transform={this.getTransform()} onClick={this.handleClick}>
				<circle r={this.props.radius}/>
				<text dx={this.props.radius + 0.5} dy={this.props.offset}>
					{this.props[this.props.labelProp]}
				</text>
			</g>);
	}
}

Node.propTypes = propTypes;