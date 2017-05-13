import clone from 'clone';
import { hierarchy, tree } from 'd3-hierarchy';
import PropTypes from 'prop-types';
import React from 'react';
import Link from './link';
import Node from './node';

const propTypes = {
	data: PropTypes.object.isRequired,
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	keyProp: PropTypes.string.isRequired,
	labelProp: PropTypes.string.isRequired,
	getChildren: PropTypes.func,
	linkClass: PropTypes.string,
	linkClickHandler: PropTypes.func,
	margins: PropTypes.shape({
		bottom: PropTypes.number.isRequired,
		left: PropTypes.number.isRequired,
		right: PropTypes.number.isRequired,
		top: PropTypes.number.isRequired
	}).isRequired,
	nodeClass: PropTypes.string,
	nodeClickHandler: PropTypes.func,
	nodeOffset: PropTypes.number,
	nodeRadius: PropTypes.number
};

const defaultProps = {
	keyProp: 'name',
	labelProp: 'name',
	margins: {
		bottom: 10,
		left: 20,
		right: 150,
		top: 10
	},
	linkClass: 'link',
	nodeClass: 'node',
	nodeOffset: 3.5,
	nodeRadius: 5
};

export default class Tree extends React.PureComponent{
	render() {
		const contentWidth = this.props.width - this.props.margins.left - this.props.margins.right;
		const contentHeight = this.props.height - this.props.margins.top - this.props.margins.bottom;

		// data is cloned because d3 will mutate the object passed in
		let data = hierarchy(clone(this.props.data), this.props.getChildren);

		let root =  tree().size([contentHeight, contentWidth])(data);
		let nodes = root.descendants();
		let links = root.links();

		nodes.forEach(node => {
			node.y += this.props.margins.top;
		});

		return (
			<svg height={this.props.height} width={this.props.width}>
				{ links.map(link =>
					<Link
						key={link.target.data[this.props.keyProp]}
						className={this.props.linkClass}
						keyProp={this.props.keyProp}
						onClick={this.props.linkClickHandler}
						source={link.source}
						target={link.target}
						{...link.data}/>)
				}
				{ nodes.map(node =>
					<Node
						key={node.data[this.props.keyProp]}
						className={this.props.nodeClass}
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

Tree.propTypes = propTypes;
Tree.defaultProps = defaultProps;