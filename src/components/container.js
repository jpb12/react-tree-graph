import PropTypes from 'prop-types';
import React from 'react';
import Link from './link';
import Node from './node';

export default function Container(props) {
	return (
		<svg {...props.svgProps} height={props.height} width={props.width}>
			{ props.children }
			<g>
				{ props.links.map(link =>
					<Link
						key={link.target.data[props.keyProp]}
						keyProp={props.keyProp}
						pathFunc={props.pathFunc}
						source={link.source}
						target={link.target}
						x1={link.source.x}
						x2={link.target.x}
						y1={link.source.y}
						y2={link.target.y}
						pathProps={{ ...props.pathProps, ...link.target.data.pathProps }}/>)
				}
				{ props.nodes.map(node =>
					<Node
						key={node.data[props.keyProp]}
						keyProp={props.keyProp}
						labelProp={props.labelProp}
						shape={props.nodeShape}
						x={node.x}
						y={node.y}
						nodeProps={{ ...props.nodeProps, ...node.data.nodeProps }}
						gProps={{ ...props.gProps, ...node.data.gProps }}
						textProps={{ ...props.textProps, ...node.data.textProps }}
						{...node.data}/>)
				}
			</g>
		</svg>
	);
}

Container.propTypes = {
	children: PropTypes.node,
	height: PropTypes.number.isRequired,
	keyProp: PropTypes.string.isRequired,
	labelProp: PropTypes.string.isRequired,
	links: PropTypes.array.isRequired,
	nodes: PropTypes.array.isRequired,
	nodeClassName: PropTypes.string,
	nodeShape: PropTypes.string.isRequired,
	nodeProps: PropTypes.object.isRequired,
	pathFunc: PropTypes.func,
	width: PropTypes.number.isRequired,
	gProps: PropTypes.object.isRequired,
	pathProps: PropTypes.object.isRequired,
	svgProps: PropTypes.object.isRequired,
	textProps: PropTypes.object.isRequired
};