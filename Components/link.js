import React from 'react';

const propTypes = {
	source: React.PropTypes.object.isRequired,
	target: React.PropTypes.object.isRequired,
	className: React.PropTypes.string,
	keyProp: React.PropTypes.string.isRequired,
	onClick: React.PropTypes.func
};

function diagonal(x1, y1, x2, y2) {
	return `M${y1},${x1}C${(y1+y2)/2},${x1} ${(y1+y2)/2},${x2} ${y2},${x2}`;
}

export default class Link extends React.PureComponent{
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.props.onClick && this.props.onClick(this.props.source.data[this.props.keyProp], this.props.target.data[this.props.keyProp]);
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