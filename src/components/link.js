import PropTypes from 'prop-types';
import React from 'react';
import wrapHandlers from '../wrapHandlers';

function diagonal(x1, y1, x2, y2) {
	return `M${x1},${y1}C${(x1 + x2) / 2},${y1} ${(x1 + x2) / 2},${y2} ${x2},${y2}`;
}

export default function Link(props) {
	const wrappedProps = wrapHandlers(
		props.pathProps,
		props.source.data[props.keyProp],
		props.target.data[props.keyProp]
	);

	const d = props.pathFunc(
		props.x1,
		props.y1,
		props.x2,
		props.y2
	);

	return <path {...wrappedProps} d={d}/>;
}

Link.propTypes = {
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

Link.defaultProps = {
	pathFunc: diagonal
};