import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
	source: PropTypes.object.isRequired,
	target: PropTypes.object.isRequired,
	className: PropTypes.string,
	keyProp: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	x1: PropTypes.number.isRequired,
	x2: PropTypes.number.isRequired,
	y1: PropTypes.number.isRequired,
	y2: PropTypes.number.isRequired
};

function diagonal(x1, y1, x2, y2) {
	return `M${y1},${x1}C${(y1+y2)/2},${x1} ${(y1+y2)/2},${x2} ${y2},${x2}`;
}

export default class Link extends React.PureComponent{
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event) {
		this.props.onClick && this.props.onClick(this.props.source.data[this.props.keyProp], this.props.target.data[this.props.keyProp], event);
	}
	render() {
		let d = diagonal(
			this.props.x1,
			this.props.y1,
			this.props.x2,
			this.props.y2);

		return (
			<path className={this.props.className} d={d} onClick={this.handleClick}/>);
	}
}

Link.propTypes = propTypes;