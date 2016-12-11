import d3 from 'd3';
import React from 'react';

const propTypes = {
	source: React.PropTypes.object.isRequired,
	target: React.PropTypes.object.isRequired,
	className: React.PropTypes.string,
	keyProp: React.PropTypes.string.isRequired,
	onClick: React.PropTypes.func
};

const defaultProps = {
	className: 'link'
};

const diagonal = d3.svg.diagonal().projection(d => [d.y, d.x]);

export default class Link extends React.PureComponent{
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.props.onClick && this.props.onClick(this.props.source[this.props.keyProp], this.props.target[this.props.keyProp]);
	}
	render() {
		let d = diagonal({
			source: this.props.source,
			target: this.props.target
		});

		return (
			<path className={this.props.className} d={d} onClick={this.handleClick}/>);
	}
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;