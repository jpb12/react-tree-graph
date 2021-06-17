(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined'
		? (module.exports = factory(
				require('clone'),
				require('d3-ease'),
				require('d3-hierarchy'),
				require('prop-types'),
				require('react')
		  ))
		: typeof define === 'function' && define.amd
		? define(
				['clone', 'd3-ease', 'd3-hierarchy', 'prop-types', 'react'],
				factory
		  )
		: ((global =
				typeof globalThis !== 'undefined' ? globalThis : global || self),
		  (global.ReactTreeGraph = factory(
				global.clone,
				global.d3,
				global.d3,
				global.PropTypes,
				global.React
		  )));
})(this, function (clone, d3Ease, d3Hierarchy, PropTypes, React) {
	'use strict';

	function _extends() {
		_extends =
			Object.assign ||
			function (target) {
				for (var i = 1; i < arguments.length; i++) {
					var source = arguments[i];

					for (var key in source) {
						if (Object.prototype.hasOwnProperty.call(source, key)) {
							target[key] = source[key];
						}
					}
				}

				return target;
			};

		return _extends.apply(this, arguments);
	}

	const regex = /on[A-Z]/;

	function wrapper(func, args) {
		return (event) => func(event, ...args);
	} // Wraps any event handlers passed in as props with a function that passes additional arguments

	function wrapHandlers(props, ...args) {
		const handlers = Object.keys(props).filter(
			(propName) =>
				regex.test(propName) && typeof props[propName] === 'function'
		);
		const wrappedHandlers = handlers.reduce((acc, handler) => {
			acc[handler] = wrapper(props[handler], args);
			return acc;
		}, {});
		return { ...props, ...wrappedHandlers };
	}

	const propTypes$4 = {
		source: PropTypes.object.isRequired,
		target: PropTypes.object.isRequired,
		keyProp: PropTypes.string.isRequired,
		x1: PropTypes.number.isRequired,
		x2: PropTypes.number.isRequired,
		y1: PropTypes.number.isRequired,
		y2: PropTypes.number.isRequired,
		pathFunc: PropTypes.func.isRequired,
		pathProps: PropTypes.object.isRequired,
	};

	function diagonal(x1, y1, x2, y2) {
		return `M${y1},${x1}C${(y1 + y2) / 2},${x1} ${(y1 + y2) / 2},${x2} ${y2},${x2}`;
	}

	const defaultProps$1 = {
		pathFunc: diagonal,
	};
	class Link extends React.PureComponent {
		render() {
			const wrappedProps = wrapHandlers(
				this.props.pathProps,
				this.props.source.data[this.props.keyProp],
				this.props.target.data[this.props.keyProp]
			);
			const d = this.props.pathFunc(
				this.props.x1,
				this.props.y1,
				this.props.x2,
				this.props.y2
			);
			return /*#__PURE__*/ React.createElement(
				'path',
				_extends({}, wrappedProps, {
					d: d,
				})
			);
		}
	}
	Link.defaultProps = defaultProps$1;
	Link.propTypes = propTypes$4;

	const propTypes$3 = {
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
		keyProp: PropTypes.string.isRequired,
		labelProp: PropTypes.string.isRequired,
		shape: PropTypes.string.isRequired,
		nodeProps: PropTypes.object.isRequired,
		gProps: PropTypes.object.isRequired,
		textProps: PropTypes.object.isRequired,
	};
	class Node extends React.PureComponent {
		getTransform() {
			return `translate(${this.props.y}, ${this.props.x})`;
		}

		render() {
			let offset = 0;
			let nodePropsWithDefaults = this.props.nodeProps;

			switch (this.props.shape) {
				case 'circle':
					nodePropsWithDefaults = {
						r: 5,
						...nodePropsWithDefaults,
					};
					offset = nodePropsWithDefaults.r;
					break;

				case 'image':
				case 'rect':
					nodePropsWithDefaults = {
						height: 10,
						width: 10,
						...nodePropsWithDefaults,
					};
					nodePropsWithDefaults = {
						x: -nodePropsWithDefaults.width / 2,
						y: -nodePropsWithDefaults.height / 2,
						...nodePropsWithDefaults,
					};
					offset = nodePropsWithDefaults.width / 2;
					break;
			}

			const wrappedNodeProps = wrapHandlers(
				nodePropsWithDefaults,
				this.props[this.props.keyProp]
			);
			const wrappedGProps = wrapHandlers(
				this.props.gProps,
				this.props[this.props.keyProp]
			);
			const wrappedTextProps = wrapHandlers(
				this.props.textProps,
				this.props[this.props.keyProp]
			);
			return /*#__PURE__*/ React.createElement(
				'g',
				_extends({}, wrappedGProps, {
					transform: this.getTransform(),
				}),
				/*#__PURE__*/ React.createElement(this.props.shape, wrappedNodeProps),
				/*#__PURE__*/ React.createElement(
					'text',
					_extends(
						{
							dx: offset + 0.5,
							dy: 5,
						},
						wrappedTextProps
					),
					this.props[this.props.labelProp]
				)
			);
		}
	}
	Node.propTypes = propTypes$3;

	const propTypes$2 = {
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
		textProps: PropTypes.object.isRequired,
	};
	class Container extends React.PureComponent {
		render() {
			return /*#__PURE__*/ React.createElement(
				'svg',
				_extends({}, this.props.svgProps, {
					height: this.props.height,
					width: this.props.width,
				}),
				this.props.children,
				/*#__PURE__*/ React.createElement(
					'g',
					null,
					this.props.links.map((link) =>
						/*#__PURE__*/ React.createElement(Link, {
							key: link.target.data[this.props.keyProp],
							keyProp: this.props.keyProp,
							pathFunc: this.props.pathFunc,
							source: link.source,
							target: link.target,
							x1: link.source.x,
							x2: link.target.x,
							y1: link.source.y,
							y2: link.target.y,
							pathProps: {
								...this.props.pathProps,
								...link.target.data.pathProps,
							},
						})
					),
					this.props.nodes.map((node) =>
						/*#__PURE__*/ React.createElement(
							Node,
							_extends(
								{
									key: node.data[this.props.keyProp],
									keyProp: this.props.keyProp,
									labelProp: this.props.labelProp,
									shape: this.props.nodeShape,
									x: node.x,
									y: node.y,
									nodeProps: {
										...this.props.nodeProps,
										...node.data.nodeProps,
									},
									gProps: { ...this.props.gProps, ...node.data.gProps },
									textProps: {
										...this.props.textProps,
										...node.data.textProps,
									},
								},
								node.data
							)
						)
					)
				)
			);
		}
	}
	Container.propTypes = propTypes$2;

	const propTypes$1 = {
		animated: PropTypes.bool.isRequired,
		getChildren: PropTypes.func.isRequired,
		keyProp: PropTypes.string.isRequired,
		links: PropTypes.array.isRequired,
		nodes: PropTypes.array.isRequired,
		duration: PropTypes.number.isRequired,
		easing: PropTypes.func.isRequired,
		steps: PropTypes.number.isRequired,
	};
	class Animated extends React.PureComponent {
		constructor(props) {
			super(props);

			if (props.animated) {
				// If we are animating, we set the initial positions of the nodes and links to be the position of the root node
				// and animate from there
				let initialX = props.nodes[0].x;
				let initialY = props.nodes[0].y;
				this.state = {
					nodes: props.nodes.map((n) => ({ ...n, x: initialX, y: initialY })),
					links: props.links.map((l) => ({
						source: { ...l.source, x: initialX, y: initialY },
						target: { ...l.target, x: initialX, y: initialY },
					})),
				};
			} else {
				this.state = {
					nodes: props.nodes,
					links: props.links,
				};
			}
		}

		componentDidMount() {
			if (this.props.animated) {
				this.animate(this.props);
			}
		}

		componentWillReceiveProps(nextProps) {
			if (
				nextProps.nodes === this.props.nodes &&
				nextProps.links === this.props.links
			) {
				return;
			}

			if (!nextProps.animated) {
				this.setState({
					nodes: nextProps.nodes,
					links: nextProps.links,
				});
				return;
			}

			this.animate(nextProps);
		}

		animate(props) {
			// Stop previous animation if one is already in progress.  We will start the next animation
			// from the position we are currently in
			clearInterval(this.animation);
			let counter = 0; // Do as much one-time calculation outside of the animation step, which needs to be fast

			let animationContext = this.getAnimationContext(this.state, props);
			this.animation = setInterval(() => {
				counter++;

				if (counter === props.steps) {
					clearInterval(this.animation);
					this.animation = null;
					this.setState({
						nodes: props.nodes,
						links: props.links,
					});
					return;
				}

				this.setState(
					this.calculateNewState(animationContext, counter / props.steps)
				);
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
				.filter((n1) =>
					initialState.nodes.every((n2) => !this.areNodesSame(n1, n2))
				)
				.map((n1) => ({
					base: n1,
					old: this.getClosestAncestor(n1, newState, initialState),
					new: n1,
				}));
			let changedNodes = newState.nodes
				.filter((n1) =>
					initialState.nodes.some((n2) => this.areNodesSame(n1, n2))
				)
				.map((n1) => ({
					base: n1,
					old: initialState.nodes.find((n2) => this.areNodesSame(n1, n2)),
					new: n1,
				}));
			let removedNodes = initialState.nodes
				.filter((n1) =>
					newState.nodes.every((n2) => !this.areNodesSame(n1, n2))
				)
				.map((n1) => ({
					base: n1,
					old: n1,
					new: this.getClosestAncestor(n1, initialState, newState),
				}));
			let addedLinks = newState.links
				.filter((l1) =>
					initialState.links.every((l2) => !this.areLinksSame(l1, l2))
				)
				.map((l1) => ({
					base: l1,
					old: this.getClosestAncestor(l1.target, newState, initialState),
					new: l1,
				}));
			let changedLinks = newState.links
				.filter((l1) =>
					initialState.links.some((l2) => this.areLinksSame(l1, l2))
				)
				.map((l1) => ({
					base: l1,
					old: initialState.links.find((l2) => this.areLinksSame(l1, l2)),
					new: l1,
				}));
			let removedLinks = initialState.links
				.filter((l1) =>
					newState.links.every((l2) => !this.areLinksSame(l1, l2))
				)
				.map((l1) => ({
					base: l1,
					old: l1,
					new: this.getClosestAncestor(l1.target, initialState, newState),
				}));
			return {
				nodes: changedNodes.concat(addedNodes).concat(removedNodes),
				links: changedLinks.concat(addedLinks).concat(removedLinks),
			};
		}

		getClosestAncestor(node, stateWithNode, stateWithoutNode) {
			let oldParent = node;

			while (oldParent) {
				let newParent = stateWithoutNode.nodes.find((n) =>
					this.areNodesSame(oldParent, n)
				);

				if (newParent) {
					return newParent;
				}

				oldParent = stateWithNode.nodes.find((n) =>
					(this.props.getChildren(n) || []).some((c) =>
						this.areNodesSame(oldParent, c)
					)
				);
			}

			return stateWithoutNode.nodes[0];
		}

		areNodesSame(a, b) {
			return a.data[this.props.keyProp] === b.data[this.props.keyProp];
		}

		areLinksSame(a, b) {
			return (
				a.source.data[this.props.keyProp] ===
					b.source.data[this.props.keyProp] &&
				a.target.data[this.props.keyProp] === b.target.data[this.props.keyProp]
			);
		}

		calculateNewState(animationContext, interval) {
			return {
				nodes: animationContext.nodes.map((n) =>
					this.calculateNodePosition(n.base, n.old, n.new, interval)
				),
				links: animationContext.links.map((l) =>
					this.calculateLinkPosition(l.base, l.old, l.new, interval)
				),
			};
		}

		calculateNodePosition(node, start, end, interval) {
			return {
				...node,
				x: this.calculateNewValue(start.x, end.x, interval),
				y: this.calculateNewValue(start.y, end.y, interval),
			};
		}

		calculateLinkPosition(link, start, end, interval) {
			return {
				source: {
					...link.source,
					x: this.calculateNewValue(
						start.source ? start.source.x : start.x,
						end.source ? end.source.x : end.x,
						interval
					),
					y: this.calculateNewValue(
						start.source ? start.source.y : start.y,
						end.source ? end.source.y : end.y,
						interval
					),
				},
				target: {
					...link.target,
					x: this.calculateNewValue(
						start.target ? start.target.x : start.x,
						end.target ? end.target.x : end.x,
						interval
					),
					y: this.calculateNewValue(
						start.target ? start.target.y : start.y,
						end.target ? end.target.y : end.y,
						interval
					),
				},
			};
		}

		calculateNewValue(start, end, interval) {
			return start + (end - start) * this.props.easing(interval);
		}

		render() {
			return /*#__PURE__*/ React.createElement(
				Container,
				_extends({}, this.props, this.state)
			);
		}
	}
	Animated.propTypes = propTypes$1;

	const propTypes = {
		data: PropTypes.object.isRequired,
		animated: PropTypes.bool.isRequired,
		children: PropTypes.node,
		duration: PropTypes.number.isRequired,
		easing: PropTypes.func.isRequired,
		steps: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
		width: PropTypes.number.isRequired,
		keyProp: PropTypes.string.isRequired,
		labelProp: PropTypes.string.isRequired,
		getChildren: PropTypes.func.isRequired,
		margins: PropTypes.shape({
			bottom: PropTypes.number.isRequired,
			left: PropTypes.number.isRequired,
			right: PropTypes.number.isRequired,
			top: PropTypes.number.isRequired,
		}).isRequired,
		pathFunc: PropTypes.func,
		nodeShape: PropTypes.oneOf(['circle', 'image', 'polygon', 'rect'])
			.isRequired,
		nodeProps: PropTypes.object.isRequired,
		gProps: PropTypes.object.isRequired,
		pathProps: PropTypes.object.isRequired,
		svgProps: PropTypes.object.isRequired,
		textProps: PropTypes.object.isRequired,
	};
	const defaultProps = {
		animated: false,
		duration: 500,
		easing: d3Ease.easeQuadOut,
		getChildren: (n) => n.children,
		steps: 20,
		keyProp: 'name',
		labelProp: 'name',
		margins: {
			bottom: 10,
			left: 20,
			right: 150,
			top: 10,
		},
		nodeShape: 'circle',
		nodeProps: {},
		gProps: {},
		pathProps: {},
		svgProps: {},
		textProps: {},
	};
	class Tree extends React.PureComponent {
		render() {
			const contentWidth =
				this.props.width - this.props.margins.left - this.props.margins.right;
			const contentHeight =
				this.props.height - this.props.margins.top - this.props.margins.bottom; // data is cloned because d3 will mutate the object passed in

			let data = d3Hierarchy.hierarchy(
				clone(this.props.data),
				this.props.getChildren
			);
			let root = d3Hierarchy.tree().size([contentHeight, contentWidth])(data);
			let nodes = root.descendants();
			let links = root.links();
			nodes.forEach((node) => {
				node.y += this.props.margins.top;
			});
			return /*#__PURE__*/ React.createElement(
				Animated,
				{
					animated: this.props.animated,
					duration: this.props.duration,
					easing: this.props.easing,
					getChildren: this.props.getChildren,
					height: this.props.height,
					keyProp: this.props.keyProp,
					labelProp: this.props.labelProp,
					links: links,
					nodes: nodes,
					nodeShape: this.props.nodeShape,
					nodeProps: this.props.nodeProps,
					pathFunc: this.props.pathFunc,
					steps: this.props.steps,
					width: this.props.width,
					gProps: {
						className: 'node',
						...this.props.gProps,
					},
					pathProps: {
						className: 'link',
						...this.props.pathProps,
					},
					svgProps: this.props.svgProps,
					textProps: this.props.textProps,
				},
				this.props.children
			);
		}
	}
	Tree.propTypes = propTypes;
	Tree.defaultProps = defaultProps;

	return Tree;
});
