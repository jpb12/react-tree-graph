import clone from 'clone';
import { easeQuadOut } from 'd3-ease';
import { hierarchy, tree } from 'd3-hierarchy';
import PropTypes from 'prop-types';
import React from 'react';
import Animated from './animated';

const propTypes = {
	data: PropTypes.object.isRequired,
	animated: PropTypes.bool.isRequired,
	duration: PropTypes.number.isRequired,
	easing: PropTypes.func.isRequired,
	steps: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	keyProp: PropTypes.string.isRequired,
	labelProp: PropTypes.string.isRequired,
	getChildren: PropTypes.func.isRequired,
	treeClassName: PropTypes.string,
	treeClickHandler: PropTypes.func,
	linkClassName: PropTypes.string,
	linkClickHandler: PropTypes.func,
	margins: PropTypes.shape({
		bottom: PropTypes.number.isRequired,
		left: PropTypes.number.isRequired,
		right: PropTypes.number.isRequired,
		top: PropTypes.number.isRequired
	}).isRequired,
	nodeClassName: PropTypes.string,
	nodeClickHandler: PropTypes.func,
	nodeOffset: PropTypes.number.isRequired,
	nodeRadius: PropTypes.number.isRequired
};

const defaultProps = {
	animated: false,
	duration: 500,
	easing: easeQuadOut,
	getChildren: n => n.children,
	steps: 20,
	keyProp: 'name',
	labelProp: 'name',
	margins: {
		bottom: 10,
		left: 20,
		right: 150,
		top: 10
	},
	linkClassName: 'link',
	nodeClassName: 'node',
	nodeOffset: 3.5,
	nodeRadius: 5
};

export default class Tree extends React.PureComponent {
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
			<Animated
				animated={this.props.animated}
				duration={this.props.duration}
				easing={this.props.easing}
				getChildren={this.props.getChildren}
				height={this.props.height}
				keyProp={this.props.keyProp}
				labelProp={this.props.labelProp}
				links={links}
				linkClassName={this.props.linkClassName}
				linkClickHandler={this.props.linkClickHandler}
				nodes={nodes}
				nodeClassName={this.props.nodeClassName}
				nodeClickHandler={this.props.nodeClickHandler}
				nodeOffset={this.props.nodeOffset}
				nodeRadius={this.props.nodeRadius}
				steps={this.props.steps}
				treeClassName={this.props.treeClassName}
				treeClickHandler={this.props.treeClickHandler}
				width={this.props.width}/>);
	}
}

Tree.propTypes = propTypes;
Tree.defaultProps = defaultProps;