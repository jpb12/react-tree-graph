import PropTypes from 'prop-types';
import React from 'react';
import Link from './link';
import Node from './node';

const propTypes = {
	height: PropTypes.number.isRequired,
	keyProp: PropTypes.string.isRequired,
	labelProp: PropTypes.string.isRequired,
	links: PropTypes.array.isRequired,
	nodes: PropTypes.array.isRequired,
	nodeClassName: PropTypes.string,
	nodeOffset: PropTypes.number.isRequired,
	nodeRadius: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	circleProps: PropTypes.object.isRequired,
	gProps: PropTypes.object.isRequired,
	pathProps: PropTypes.object.isRequired,
	svgProps: PropTypes.object.isRequired,
	textProps: PropTypes.object.isRequired
};

export default class Container extends React.PureComponent {
	render() {
		return (
			<svg {...this.props.svgProps} height={this.props.height} width={this.props.width}>
				{ this.props.links.map(link =>
					<Link
						key={link.target.data[this.props.keyProp]}
						keyProp={this.props.keyProp}
						source={link.source}
						target={link.target}
						x1={link.source.x}
						x2={link.target.x}
						y1={link.source.y}
						y2={link.target.y}
						pathProps={Object.assign({}, this.props.pathProps, link.target.data.pathProps)}/>)
				}
				{ this.props.nodes.map(node =>
					<Node
						key={node.data[this.props.keyProp]}
						keyProp={this.props.keyProp}
						labelProp={this.props.labelProp}
						offset={this.props.nodeOffset}
						radius={this.props.nodeRadius}
						x={node.x}
						y={node.y}
						circleProps={Object.assign({}, this.props.circleProps, node.data.circleProps)}
						gProps={Object.assign({}, this.props.gProps, node.data.gProps)}
						textProps={Object.assign({}, this.props.textProps, node.data.textProps)}
						{...node.data}/>)
				}
			</svg>);
	}
}

Container.propTypes = propTypes;