import clone from 'clone';
import d3 from 'd3';
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
	}
};

export default class Tree extends React.PureComponent{
	render() {
		const contentWidth = this.props.width - this.props.margins.left - this.props.margins.right;
		const contentHeight = this.props.height - this.props.margins.top - this.props.margins.bottom;

		// data is cloned because d3 will mutate the object passed in
		let data = clone(this.props.data);

		let tree =  d3.layout.tree().size([contentHeight, contentWidth]);
		let nodes = tree.nodes(data);
		
		nodes.forEach(node => {
			node.y += this.props.margins.top;
		});
		
		let links = tree.links(nodes);

		return (
			<svg height={this.props.height} width={this.props.width}>
				{ links.map(link =>
					<Link
						key={link.target[this.props.keyProp]}
						className={this.props.linkClass}
						keyProp={this.props.keyProp}
						onClick={this.props.linkClickHandler}
						{...link}/>)
				}
				{ nodes.map(node =>
					<Node
						key={node[this.props.keyProp]}
						className={this.props.nodeClass}
						keyProp={this.props.keyProp}
						labelProp={this.props.labelProp}
						onClick={this.props.nodeClickHandler}
						offset={this.props.nodeOffset}
						radius={this.props.nodeRadius}
						{...node}/>)
				}
			</svg>);
	}
}

Tree.propTypes = propTypes;
Tree.defaultProps = defaultProps;