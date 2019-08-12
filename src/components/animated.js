import PropTypes from 'prop-types';
import React from 'react';
import Container from './container';

const propTypes = {
	animated: PropTypes.bool.isRequired,
	getChildren: PropTypes.func.isRequired,
	keyProp: PropTypes.string.isRequired,
	links: PropTypes.array.isRequired,
	nodes: PropTypes.array.isRequired,
	duration: PropTypes.number.isRequired,
	easing: PropTypes.func.isRequired,
	steps: PropTypes.number.isRequired
};

export default class Animated extends React.PureComponent {
	constructor(props) {
		super(props);
		if (props.animated) {
			// If we are animating, we set the initial positions of the nodes and links to be the position of the root node
			// and animate from there
			let initialX = props.nodes[0].x;
			let initialY = props.nodes[0].y;
			this.state = {
				nodes: props.nodes.map(n => ({ ...n, x: initialX, y: initialY })),
				links: props.links.map(l => ({
					source: { ...l.source, x: initialX, y: initialY },
					target: { ...l.target, x: initialX, y: initialY }
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
		// Nodes/links that are in both states need to be moved from the old position to the new one
		// Nodes/links only in the initial state are being removed, and should be moved to the position
		// of the closest ancestor that still exists, or the new root
		// Nodes/links only in the new state are being added, and should be moved from the position of
		// the closest ancestor that previously existed, or the old root

		// The base determines which node/link the data (like classes and labels) comes from for rendering

		// We only run this once at the start of the animation, so optimization is less important
		let addedNodes = newState.nodes
			.filter(n1 => initialState.nodes.every(n2 => !this.areNodesSame(n1, n2)))
			.map(n1 => ({ base: n1, old: this.getClosestAncestor(n1, newState, initialState), new: n1 }));
		let changedNodes = newState.nodes
			.filter(n1 => initialState.nodes.some(n2 => this.areNodesSame(n1, n2)))
			.map(n1 => ({ base: n1, old: initialState.nodes.find(n2 => this.areNodesSame(n1, n2)), new: n1 }));
		let removedNodes = initialState.nodes
			.filter(n1 => newState.nodes.every(n2 => !this.areNodesSame(n1, n2)))
			.map(n1 => ({ base: n1, old: n1, new: this.getClosestAncestor(n1, initialState, newState) }));

		let addedLinks = newState.links
			.filter(l1 => initialState.links.every(l2 => !this.areLinksSame(l1, l2)))
			.map(l1 => ({ base: l1, old: this.getClosestAncestor(l1.target, newState, initialState), new: l1 }));
		let changedLinks = newState.links
			.filter(l1 => initialState.links.some(l2 => this.areLinksSame(l1, l2)))
			.map(l1 => ({ base: l1, old: initialState.links.find(l2 => this.areLinksSame(l1, l2)), new: l1 }));
		let removedLinks = initialState.links
			.filter(l1 => newState.links.every(l2 => !this.areLinksSame(l1, l2)))
			.map(l1 => ({ base: l1, old: l1, new: this.getClosestAncestor(l1.target, initialState, newState) }));

		return {
			nodes: changedNodes.concat(addedNodes).concat(removedNodes),
			links: changedLinks.concat(addedLinks).concat(removedLinks)
		};
	}

	getClosestAncestor(node, stateWithNode, stateWithoutNode) {
		let oldParent = node;

		while (oldParent) {
			let newParent = stateWithoutNode.nodes.find(n => this.areNodesSame(oldParent, n));

			if (newParent) {
				return newParent;
			}

			oldParent = stateWithNode.nodes.find(n => (this.props.getChildren(n) || []).some(c => this.areNodesSame(oldParent, c)));
		}

		return stateWithoutNode.nodes[0];
	}

	areNodesSame(a, b) {
		return a.data[this.props.keyProp] === b.data[this.props.keyProp];
	}

	areLinksSame(a, b) {
		return a.source.data[this.props.keyProp] === b.source.data[this.props.keyProp] && a.target.data[this.props.keyProp] === b.target.data[this.props.keyProp];
	}

	calculateNewState(animationContext, interval) {
		return {
			nodes: animationContext.nodes.map(n => this.calculateNodePosition(n.base, n.old, n.new, interval)),
			links: animationContext.links.map(l => this.calculateLinkPosition(l.base, l.old, l.new, interval))
		};
	}

	calculateNodePosition(node, start, end, interval) {
		return {
			...node,
			x: this.calculateNewValue(start.x, end.x, interval),
			y: this.calculateNewValue(start.y, end.y, interval)
		};
	}

	calculateLinkPosition(link, start, end, interval) {
		return {
			source: {
				...link.source,
				x: this.calculateNewValue(start.source ? start.source.x : start.x, end.source ? end.source.x : end.x, interval),
				y: this.calculateNewValue(start.source ? start.source.y : start.y, end.source ? end.source.y : end.y, interval)
			},
			target: {
				...link.target,
				x: this.calculateNewValue(start.target ? start.target.x : start.x, end.target ? end.target.x : end.x, interval),
				y: this.calculateNewValue(start.target ? start.target.y : start.y, end.target ? end.target.y : end.y, interval)
			}
		};
	}

	calculateNewValue(start, end, interval) {
		return start + (end - start) * this.props.easing(interval);
	}

	render() {
		return <Container {...this.props} {...this.state}/>;
	}
}

Animated.propTypes = propTypes;