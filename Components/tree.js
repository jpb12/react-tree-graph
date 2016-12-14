import clone from 'clone';
import { hierarchy, tree } from 'd3';
import React from 'react';
import Link from './link';
import Node from './node';

const propTypes = {
	data: React.PropTypes.object.isRequired,
	height: React.PropTypes.number.isRequired,
	width: React.PropTypes.number.isRequired,
	keyProp: React.PropTypes.string.isRequired,
	labelProp: React.PropTypes.string.isRequired,
	linkClass: React.PropTypes.string,
	linkClickHandler: React.PropTypes.func,
	margins: React.PropTypes.shape({
		bottom: React.PropTypes.number.isRequired,
		left: React.PropTypes.number.isRequired,
		right: React.PropTypes.number.isRequired,
		top: React.PropTypes.number.isRequired
	}).isRequired,
	nodeClass: React.PropTypes.string,
	nodeClickHandler: React.PropTypes.func,
	nodeOffset: React.PropTypes.number,
	nodeRadius: React.PropTypes.number
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
		let data = hierarchy(clone(this.props.data));

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