import PropTypes from 'prop-types';
import React from 'react';
import Link from './link';
import Node from './node';

const propTypes = {
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

export default class Container extends React.PureComponent {
	render() {
		return (
			<svg {...this.props.svgProps} height={this.props.height} width={this.props.width}>
				{ this.props.children }
				<g>
					{ this.props.links.map(link =>
						<Link
							key={link.target.data[this.props.keyProp]}
							keyProp={this.props.keyProp}
							pathFunc={this.props.pathFunc}
							source={link.source}
							target={link.target}
							x1={link.source.x}
							x2={link.target.x}
							y1={link.source.y}
							y2={link.target.y}
							pathProps={{ ...this.props.pathProps, ...link.target.data.pathProps }}/>)
					}
					{ this.props.nodes.map(node =>
						<Node
							key={node.data[this.props.keyProp]}
							keyProp={this.props.keyProp}
							labelProp={this.props.labelProp}
							shape={this.props.nodeShape}
							x={node.x}
							y={node.y}
							nodeProps={{ ...this.props.nodeProps, ...node.data.nodeProps }}
							gProps={{ ...this.props.gProps, ...node.data.gProps }}
							textProps={{ ...this.props.textProps, ...node.data.textProps }}
							{...node.data}/>)
					}
				</g>
			</svg>);
	}
}

Container.propTypes = propTypes;