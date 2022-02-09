(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined'
		? factory(
				exports,
				require('d3-ease'),
				require('prop-types'),
				require('react'),
				require('d3-hierarchy')
		  )
		: typeof define === 'function' && define.amd
		? define(
				['exports', 'd3-ease', 'prop-types', 'react', 'd3-hierarchy'],
				factory
		  )
		: ((global =
				typeof globalThis !== 'undefined' ? globalThis : global || self),
		  factory(
				(global.ReactTreeGraph = {}),
				global.d3,
				global.PropTypes,
				global.React,
				global.d3
		  ));
})(this, function (exports, d3Ease, PropTypes, React, d3Hierarchy) {
	'use strict';

	function _interopDefault(e) {
		return e && e.__esModule ? e : { default: e };
	}

	var PropTypes__default = /*#__PURE__*/ _interopDefault(PropTypes);
	var React__default = /*#__PURE__*/ _interopDefault(React);

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

	function getTreeData(props) {
		const contentWidth = props.width - props.margins.left - props.margins.right;
		const contentHeight =
			props.height - props.margins.top - props.margins.bottom;
		let data = d3Hierarchy.hierarchy(props.data, props.getChildren);
		let root = d3Hierarchy.tree().size([contentHeight, contentWidth])(data);
		let nodes = root.descendants();
		let links = root.links();
		nodes.forEach((node) => {
			node.y += props.margins.top;
		});
		return {
			nodes,
			links,
		};
	}

	const regex = /on[A-Z]/;

	function wrapper(func, args) {
		return (event) => func(event, ...args);
	} // Wraps any event handlers passed in as props with a function that passes additional arguments

	function wrapHandlers(props) {
		for (
			var _len = arguments.length,
				args = new Array(_len > 1 ? _len - 1 : 0),
				_key = 1;
			_key < _len;
			_key++
		) {
			args[_key - 1] = arguments[_key];
		}

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

	function diagonal(x1, y1, x2, y2) {
		return `M${y1},${x1}C${(y1 + y2) / 2},${x1} ${(y1 + y2) / 2},${x2} ${y2},${x2}`;
	}

	class Link extends React__default['default'].PureComponent {
		static propTypes = {
			source: PropTypes__default['default'].object.isRequired,
			target: PropTypes__default['default'].object.isRequired,
			keyProp: PropTypes__default['default'].string.isRequired,
			x1: PropTypes__default['default'].number.isRequired,
			x2: PropTypes__default['default'].number.isRequired,
			y1: PropTypes__default['default'].number.isRequired,
			y2: PropTypes__default['default'].number.isRequired,
			pathFunc: PropTypes__default['default'].func.isRequired,
			pathProps: PropTypes__default['default'].object.isRequired,
		};
		static defaultProps = {
			pathFunc: diagonal,
		};

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
			return /*#__PURE__*/ React__default['default'].createElement(
				'path',
				_extends({}, wrappedProps, {
					d: d,
				})
			);
		}
	}

	class Node extends React__default['default'].PureComponent {
		static propTypes = {
			x: PropTypes__default['default'].number.isRequired,
			y: PropTypes__default['default'].number.isRequired,
			keyProp: PropTypes__default['default'].string.isRequired,
			labelProp: PropTypes__default['default'].string.isRequired,
			shape: PropTypes__default['default'].string.isRequired,
			nodeProps: PropTypes__default['default'].object.isRequired,
			gProps: PropTypes__default['default'].object.isRequired,
			textProps: PropTypes__default['default'].object.isRequired,
		};

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
			const label =
				typeof this.props[this.props.labelProp] === 'string'
					? /*#__PURE__*/ React__default['default'].createElement(
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
					: /*#__PURE__*/ React__default['default'].createElement(
							'g',
							_extends(
								{
									transform: `translate(${offset + 0.5}, 5)`,
								},
								wrappedTextProps
							),
							this.props[this.props.labelProp]
					  );
			return /*#__PURE__*/ React__default['default'].createElement(
				'g',
				_extends({}, wrappedGProps, {
					transform: this.getTransform(),
				}),
				/*#__PURE__*/ React__default['default'].createElement(
					this.props.shape,
					wrappedNodeProps
				),
				label
			);
		}
	}

	class Container extends React__default['default'].PureComponent {
		static propTypes = {
			children: PropTypes__default['default'].node,
			height: PropTypes__default['default'].number.isRequired,
			keyProp: PropTypes__default['default'].string.isRequired,
			labelProp: PropTypes__default['default'].string.isRequired,
			links: PropTypes__default['default'].array.isRequired,
			nodes: PropTypes__default['default'].array.isRequired,
			nodeClassName: PropTypes__default['default'].string,
			nodeShape: PropTypes__default['default'].string.isRequired,
			nodeProps: PropTypes__default['default'].object.isRequired,
			pathFunc: PropTypes__default['default'].func,
			width: PropTypes__default['default'].number.isRequired,
			gProps: PropTypes__default['default'].object.isRequired,
			pathProps: PropTypes__default['default'].object.isRequired,
			svgProps: PropTypes__default['default'].object.isRequired,
			textProps: PropTypes__default['default'].object.isRequired,
		};

		render() {
			return /*#__PURE__*/ React__default['default'].createElement(
				'svg',
				_extends({}, this.props.svgProps, {
					height: this.props.height,
					width: this.props.width,
				}),
				this.props.children,
				/*#__PURE__*/ React__default['default'].createElement(
					'g',
					null,
					this.props.links.map((link) =>
						/*#__PURE__*/ React__default['default'].createElement(Link, {
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
						/*#__PURE__*/ React__default['default'].createElement(
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

	class Animated extends React__default['default'].PureComponent {
		static propTypes = {
			getChildren: PropTypes__default['default'].func.isRequired,
			keyProp: PropTypes__default['default'].string.isRequired,
			links: PropTypes__default['default'].array.isRequired,
			nodes: PropTypes__default['default'].array.isRequired,
			duration: PropTypes__default['default'].number.isRequired,
			easing: PropTypes__default['default'].func.isRequired,
			steps: PropTypes__default['default'].number.isRequired,
		};

		constructor(props) {
			super(props); // If we are animating, we set the initial positions of the nodes and links to be the position of the root node
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
		}

		componentDidMount() {
			this.animate();
		}

		componentDidUpdate(prevProps) {
			if (
				prevProps.nodes === this.props.nodes &&
				prevProps.links === this.props.links
			) {
				return;
			}

			this.animate();
		}

		animate() {
			// Stop previous animation if one is already in progress.  We will start the next animation
			// from the position we are currently in
			clearInterval(this.animation);
			let counter = 0; // Do as much one-time calculation outside of the animation step, which needs to be fast

			let animationContext = this.getAnimationContext(this.state, this.props);
			this.animation = setInterval(() => {
				counter++;

				if (counter === this.props.steps) {
					clearInterval(this.animation);
					this.animation = null;
					this.setState({
						nodes: this.props.nodes,
						links: this.props.links,
					});
					return;
				}

				this.setState(
					this.calculateNewState(animationContext, counter / this.props.steps)
				);
			}, this.props.duration / this.props.steps);
		}

		getAnimationContext(initialState, newState) {
			// Nodes/links that are in both states need to be moved from the old position to the new one
			// Nodes/links only in the initial state are being removed, and should be moved to the position
			// of the closest ancestor that still exists, or the new root
			// Nodes/links only in the new state are being added, and should be moved from the position of
			// the closest ancestor that previously existed, or the old root
			// The base determines which node/link the data (like classes and labels) comes from for rendering
			// We only run this once at the start of the animation, so optimisation is less important
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
			return /*#__PURE__*/ React__default['default'].createElement(
				Container,
				_extends({}, this.props, this.state)
			);
		}
	}

	class AnimatedTree extends React__default['default'].PureComponent {
		static propTypes = {
			data: PropTypes__default['default'].object.isRequired,
			children: PropTypes__default['default'].node,
			duration: PropTypes__default['default'].number.isRequired,
			easing: PropTypes__default['default'].func.isRequired,
			steps: PropTypes__default['default'].number.isRequired,
			height: PropTypes__default['default'].number.isRequired,
			width: PropTypes__default['default'].number.isRequired,
			keyProp: PropTypes__default['default'].string.isRequired,
			labelProp: PropTypes__default['default'].string.isRequired,
			getChildren: PropTypes__default['default'].func.isRequired,
			margins: PropTypes__default['default'].shape({
				bottom: PropTypes__default['default'].number.isRequired,
				left: PropTypes__default['default'].number.isRequired,
				right: PropTypes__default['default'].number.isRequired,
				top: PropTypes__default['default'].number.isRequired,
			}).isRequired,
			pathFunc: PropTypes__default['default'].func,
			nodeShape: PropTypes__default['default'].oneOf([
				'circle',
				'image',
				'polygon',
				'rect',
			]).isRequired,
			nodeProps: PropTypes__default['default'].object.isRequired,
			gProps: PropTypes__default['default'].object.isRequired,
			pathProps: PropTypes__default['default'].object.isRequired,
			svgProps: PropTypes__default['default'].object.isRequired,
			textProps: PropTypes__default['default'].object.isRequired,
		};
		static defaultProps = {
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

		render() {
			return /*#__PURE__*/ React__default['default'].createElement(
				Animated,
				_extends(
					{
						duration: this.props.duration,
						easing: this.props.easing,
						getChildren: this.props.getChildren,
						height: this.props.height,
						keyProp: this.props.keyProp,
						labelProp: this.props.labelProp,
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
					getTreeData(this.props)
				),
				this.props.children
			);
		}
	}

	class Tree extends React__default['default'].PureComponent {
		static propTypes = {
			data: PropTypes__default['default'].object.isRequired,
			animated: PropTypes__default['default'].bool.isRequired,
			children: PropTypes__default['default'].node,
			height: PropTypes__default['default'].number.isRequired,
			width: PropTypes__default['default'].number.isRequired,
			keyProp: PropTypes__default['default'].string.isRequired,
			labelProp: PropTypes__default['default'].string.isRequired,
			getChildren: PropTypes__default['default'].func.isRequired,
			margins: PropTypes__default['default'].shape({
				bottom: PropTypes__default['default'].number.isRequired,
				left: PropTypes__default['default'].number.isRequired,
				right: PropTypes__default['default'].number.isRequired,
				top: PropTypes__default['default'].number.isRequired,
			}).isRequired,
			pathFunc: PropTypes__default['default'].func,
			nodeShape: PropTypes__default['default'].oneOf([
				'circle',
				'image',
				'polygon',
				'rect',
			]).isRequired,
			nodeProps: PropTypes__default['default'].object.isRequired,
			gProps: PropTypes__default['default'].object.isRequired,
			pathProps: PropTypes__default['default'].object.isRequired,
			svgProps: PropTypes__default['default'].object.isRequired,
			textProps: PropTypes__default['default'].object.isRequired,
		};
		static defaultProps = {
			animated: false,
			getChildren: (n) => n.children,
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

		render() {
			return /*#__PURE__*/ React__default['default'].createElement(
				Container,
				_extends(
					{
						animated: this.props.animated,
						getChildren: this.props.getChildren,
						height: this.props.height,
						keyProp: this.props.keyProp,
						labelProp: this.props.labelProp,
						nodeShape: this.props.nodeShape,
						nodeProps: this.props.nodeProps,
						pathFunc: this.props.pathFunc,
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
					getTreeData(this.props)
				),
				this.props.children
			);
		}
	}

	exports.AnimatedTree = AnimatedTree;
	exports.Tree = Tree;

	Object.defineProperty(exports, '__esModule', { value: true });
});
