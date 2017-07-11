import PropTypes from 'prop-types';
import React from 'react';
import Container from './container';

const propTypes = {
	animated: PropTypes.bool.isRequired,
	keyProp: PropTypes.string.isRequired,
	links: PropTypes.array.isRequired,
	nodes: PropTypes.array.isRequired,
	duration: PropTypes.number.isRequired,
	easing: PropTypes.func.isRequired,
	steps: PropTypes.number.isRequired
};

export default class Animated extends React.PureComponent{
	constructor(props) {
		super(props);
		if (props.animated) {
			// If we are animating, we set the initial positions of the nodes and links to be the position of the root node
			// and animate from there
			let initialX = props.nodes[0].x;
			let initialY = props.nodes[0].y;
			this.state = {
				nodes: props.nodes.map(n => Object.assign({}, n, { x: initialX, y: initialY })),
				links: props.links.map(l => ({
					source: Object.assign({}, l.source, { x: initialX, y: initialY }),
					target: Object.assign({}, l.target, { x: initialX, y: initialY })
				}))
			};
		} else {
			this.state = {
				nodes: props.nodes,
				links: props.links
			};
		}
	}
	componentDidMount() {
		if (this.props.animated) {
			this.animate(this.props);
		}
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.nodes === this.props.nodes && nextProps.links === this.props.links) {
			return;
		}

		if (!nextProps.animated) {
			this.setState({ nodes: nextProps.nodes, links: nextProps.links });
			return;
		}

		this.animate(nextProps);
	}
	animate(props) {
		// Stop previous animation if one is already in progress.  We will start the next animation
		// from the position we are currently in
		clearInterval(this.animation);

		let counter = 0;

		// Do as much one-time calculation outside of the animation step, which needs to be fast
		let animationContext = this.getAnimationContext(this.state, props);

		this.animation = setInterval(() => {
			counter++;

			if (counter === props.steps) {
				clearInterval(this.animation);
				this.animation = null;
				this.setState({ nodes: props.nodes, links: props.links });
				return;
			}
			
			this.setState(this.calculateNewState(animationContext, counter / props.steps));
		}, props.duration / props.steps);
	}
	getAnimationContext(initialState, newState) {
		// We need to match changed nodes from the new and old props for the animation.  New nodes will be animated from the root node
		// TODO: added nodes/links should be animated from the closest ancestor that previously existed
		// TODO: removed nodes/links should be animated to the closest ancestor that has not been removed
		return {
			oldRoot: initialState.nodes[0],
			changedNodes: initialState.nodes
				.filter(n1 => newState.nodes.some(n2 => this.areNodesSame(n1, n2)))
				.map(n1 => ({ old: n1, new: newState.nodes.find(n2 => this.areNodesSame(n1, n2)) })),
			addedNodes: newState.nodes.filter(n1 => initialState.nodes.every(n2 => !this.areNodesSame(n1, n2))),
			changedLinks: initialState.links
				.filter(l1 => newState.links.some(l2 => this.areLinksSame(l1, l2)))
				.map(l1 => ({ old: l1, new: newState.links.find(l2 => this.areLinksSame(l1, l2)) })),
			addedLinks: newState.links.filter(l1 => initialState.links.every(l2 => !this.areLinksSame(l1, l2))),
		};
	}
	areNodesSame(a, b) {
		return a.data[this.props.keyProp] === b.data[this.props.keyProp];
	}
	areLinksSame(a, b) {
		return a.source.data[this.props.keyProp] === b.source.data[this.props.keyProp] && a.target.data[this.props.keyProp] === b.target.data[this.props.keyProp];
	}
	calculateNewState(animationContext, interval) {
		// TODO: Optimise this further.  This is the bulk of the execution time during an animation step and needs to be fast
		return {
			nodes: animationContext.changedNodes.map(n => this.calculateNodePosition(n.new, n.old, n.new, interval))
				.concat(animationContext.addedNodes.map(n => this.calculateNodePosition(n, animationContext.oldRoot, n, interval))),
			links: animationContext.changedLinks.map(l => this.calculateLinkPosition(l.new, l.old, l.new, interval))
				.concat(animationContext.addedLinks.map(l => this.calculateLinkPosition(l, animationContext.oldRoot, l, interval))),
		};
	}
	calculateNodePosition(node, start, end, interval) {
		return Object.assign(
			{},
			node,
			{
				x: this.calculateNewValue(start.x, end.x, interval),
				y: this.calculateNewValue(start.y, end.y, interval),
			});
	}
	calculateLinkPosition(link, start, end, interval) {
		return {
			source: Object.assign(
				{},
				link.source,
				{
					x: this.calculateNewValue(start.source ? start.source.x : start.x, end.source.x, interval),
					y: this.calculateNewValue(start.source ? start.source.y: start.y, end.source.y, interval)
				}),
			target: Object.assign(
				{},
				link.target,
				{
					x: this.calculateNewValue(start.target ? start.target.x : start.x, end.target.x, interval),
					y: this.calculateNewValue(start.target ? start.target.y: start.y, end.target.y, interval)
				}),
		};
	}
	calculateNewValue(start, end, interval) {
		return start + (end - start) * this.props.easing(interval);
	}
	render() {
		return (
			<Container {...this.props} {...this.state}/>);
	}
}

Animated.propTypes = propTypes;