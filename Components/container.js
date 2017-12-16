import PropTypes from 'prop-types';
import React from 'react';
import Link from './link';
import Node from './node';

const propTypes = {
	height: PropTypes.number.isRequired,
	htmlProps: PropTypes.object.isRequired,
	keyProp: PropTypes.string.isRequired,
	labelProp: PropTypes.string.isRequired,
	links: PropTypes.array.isRequired,
	linkClassName: PropTypes.string,
	linkClickHandler: PropTypes.func,
	nodes: PropTypes.array.isRequired,
	nodeClassName: PropTypes.string,
	nodeClickHandler: PropTypes.func,
	nodeOffset: PropTypes.number.isRequired,
	nodeRadius: PropTypes.number.isRequired,
	treeClassName: PropTypes.string,
	treeClickHandler: PropTypes.func,
	width: PropTypes.number.isRequired
};

export default class Container extends React.PureComponent {
	render() {
		return (
			<svg
				className={this.props.treeClassName}
				onClick={this.props.treeClickHandler}
				height={this.props.height}
				width={this.props.width}>
				{ this.props.links.map(link =>
					<Link
						key={link.target.data[this.props.keyProp]}
						className={this.props.linkClassName}
						htmlProps={this.props.htmlProps}
						keyProp={this.props.keyProp}
						onClick={this.props.linkClickHandler}
						source={link.source}
						target={link.target}
						x1={link.source.x}
						x2={link.target.x}
						y1={link.source.y}
						y2={link.target.y}
						{...link.data}/>)
				}
				{ this.props.nodes.map(node =>
					<Node
						key={node.data[this.props.keyProp]}
						className={this.props.nodeClassName}
						htmlProps={this.props.htmlProps}
						keyProp={this.props.keyProp}
						labelProp={this.props.labelProp}
						onClick={this.props.nodeClickHandler}
						offset={this.props.nodeOffset}
						radius={this.props.nodeRadius}
						x={node.x}
						y={node.y}
						{...node.data}/>)
				}
			</svg>);
	}
}

Container.propTypes = propTypes;