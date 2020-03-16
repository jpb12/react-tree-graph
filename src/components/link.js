import PropTypes from 'prop-types';
import React from 'react';
import wrapHandlers from '../wrapHandlers';

const propTypes = {
	source: PropTypes.object.isRequired,
	target: PropTypes.object.isRequired,
	keyProp: PropTypes.string.isRequired,
	x1: PropTypes.number.isRequired,
	x2: PropTypes.number.isRequired,
	y1: PropTypes.number.isRequired,
	y2: PropTypes.number.isRequired,
	pathFunc: PropTypes.func.isRequired,
	pathProps: PropTypes.object.isRequired
};

function diagonal(x1, y1, x2, y2) {
	return `M${y1},${x1}C${(y1 + y2) / 2},${x1} ${(y1 + y2) / 2},${x2} ${y2},${x2}`;
}

const defaultProps = {
	pathFunc: diagonal
};

export default class Link extends React.PureComponent {
	render() {
		const wrappedProps = wrapHandlers(
			this.props.pathProps,
			this.props.source.data[this.props.keyProp],
			this.props.target.data[this.props.keyProp]
		);

		const d = this.props.pathFunc(
			this.props.x1,
			this.props.y1,
			this.props.x2,
			this.props.y2
		);

		return <path {...wrappedProps} d={d}/>;
	}
}

Link.defaultProps = defaultProps;
Link.propTypes = propTypes;