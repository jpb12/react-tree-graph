import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
	source: PropTypes.object.isRequired,
	target: PropTypes.object.isRequired,
	className: PropTypes.string,
	keyProp: PropTypes.string.isRequired,
	onClick: PropTypes.func
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
			this.props.source.x,
			this.props.source.y,
			this.props.target.x,
			this.props.target.y);

		return (
			<path className={this.props.className} d={d} onClick={this.handleClick}/>);
	}
}

Link.propTypes = propTypes;