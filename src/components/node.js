import React from 'react';
import wrapHandlers from '../wrapHandlers';

export default function Node(props) {
	function getTransform() {
		return `translate(${props.x}, ${props.y})`;
	}

	let offset = 0.5;
	let nodePropsWithDefaults = props.nodeProps;
	switch (props.shape) {
		case 'circle':
			nodePropsWithDefaults = { r: 5, ...nodePropsWithDefaults };
			offset += nodePropsWithDefaults.r;
			break;
		case 'image':
		case 'rect':
			nodePropsWithDefaults = { height: 10, width: 10, ...nodePropsWithDefaults };
			nodePropsWithDefaults = { x: -nodePropsWithDefaults.width / 2, y: -nodePropsWithDefaults.height / 2, ...nodePropsWithDefaults };
			offset += nodePropsWithDefaults.width / 2;
			break;
	}

	if (props.direction === 'rtl') {
		offset = -offset;
	}

	const wrappedNodeProps = wrapHandlers(
		nodePropsWithDefaults,
		props[props.keyProp]
	);

	const wrappedGProps = wrapHandlers(
		props.gProps,
		props[props.keyProp]
	);

	const wrappedTextProps = wrapHandlers(
		props.textProps,
		props[props.keyProp]
	);

	const label = typeof props[props.labelProp] === 'string'
		? <text dx={offset} dy={5} {...wrappedTextProps}>{props[props.labelProp]}</text>
		: <g transform={`translate(${offset}, 5)`} {...wrappedTextProps}>{props[props.labelProp]}</g>;


	return (
		<g {...wrappedGProps} transform={getTransform()} direction={props.direction === 'rtl' ? 'rtl' : null}>
			<props.shape {...wrappedNodeProps}/>
			{ label }
		</g>
	);
}