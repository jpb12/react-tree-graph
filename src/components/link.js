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

	const pathFunc = props.pathFunc || diagonal;
	const d = pathFunc(
		props.x1,
		props.y1,
		props.x2,
		props.y2
	);

	return <path {...wrappedProps} d={d}/>;
}