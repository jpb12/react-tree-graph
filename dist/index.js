(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined'
		? factory(
				exports,
				require('@babel/runtime/helpers/extends'),
				require('d3-ease'),
				require('prop-types'),
				require('react'),
				require('d3-hierarchy')
		  )
		: typeof define === 'function' && define.amd
		? define(
				[
					'exports',
					'@babel/runtime/helpers/extends',
					'd3-ease',
					'prop-types',
					'react',
					'd3-hierarchy',
				],
				factory
		  )
		: ((global =
				typeof globalThis !== 'undefined' ? globalThis : global || self),
		  factory(
				(global.ReactTreeGraph = {}),
				global._extends,
				global.d3,
				global.PropTypes,
				global.React,
				global.d3
		  ));
})(this, function (exports, _extends, d3Ease, PropTypes, React, d3Hierarchy) {
	'use strict';

	function _interopDefault(e) {
		return e && e.__esModule ? e : { default: e };
	}

	var _extends__default = /*#__PURE__*/ _interopDefault(_extends);
	var PropTypes__default = /*#__PURE__*/ _interopDefault(PropTypes);
	var React__default = /*#__PURE__*/ _interopDefault(React);

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
	}

	// Wraps any event handlers passed in as props with a function that passes additional arguments
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
		return {
			...props,
			...wrappedHandlers,
		};
	}

	function diagonal(x1, y1, x2, y2) {
		return `M${y1},${x1}C${(y1 + y2) / 2},${x1} ${(y1 + y2) / 2},${x2} ${y2},${x2}`;
	}
	function Link(props) {
		const wrappedProps = wrapHandlers(
			props.pathProps,
			props.source.data[props.keyProp],
			props.target.data[props.keyProp]
		);
		const d = props.pathFunc(props.x1, props.y1, props.x2, props.y2);
		return /*#__PURE__*/ React__default['default'].createElement(
			'path',
			_extends__default['default']({}, wrappedProps, {
				d: d,
			})
		);
	}
	Link.propTypes = {
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
	Link.defaultProps = {
		pathFunc: diagonal,
	};

	function Node(props) {
		function getTransform() {
			return `translate(${props.y}, ${props.x})`;
		}
		let offset = 0;
		let nodePropsWithDefaults = props.nodeProps;
		switch (props.shape) {
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
			props[props.keyProp]
		);
		const wrappedGProps = wrapHandlers(props.gProps, props[props.keyProp]);
		const wrappedTextProps = wrapHandlers(
			props.textProps,
			props[props.keyProp]
		);
		const label =
			typeof props[props.labelProp] === 'string'
				? /*#__PURE__*/ React__default['default'].createElement(
						'text',
						_extends__default['default'](
							{
								dx: offset + 0.5,
								dy: 5,
							},
							wrappedTextProps
						),
						props[props.labelProp]
				  )
				: /*#__PURE__*/ React__default['default'].createElement(
						'g',
						_extends__default['default'](
							{
								transform: `translate(${offset + 0.5}, 5)`,
							},
							wrappedTextProps
						),
						props[props.labelProp]
				  );
		return /*#__PURE__*/ React__default['default'].createElement(
			'g',
			_extends__default['default']({}, wrappedGProps, {
				transform: getTransform(),
			}),
			/*#__PURE__*/ React__default['default'].createElement(
				props.shape,
				wrappedNodeProps
			),
			label
		);
	}
	Node.propTypes = {
		x: PropTypes__default['default'].number.isRequired,
		y: PropTypes__default['default'].number.isRequired,
		keyProp: PropTypes__default['default'].string.isRequired,
		labelProp: PropTypes__default['default'].string.isRequired,
		shape: PropTypes__default['default'].string.isRequired,
		nodeProps: PropTypes__default['default'].object.isRequired,
		gProps: PropTypes__default['default'].object.isRequired,
		textProps: PropTypes__default['default'].object.isRequired,
	};

	function Container(props) {
		return /*#__PURE__*/ React__default['default'].createElement(
			'svg',
			_extends__default['default']({}, props.svgProps, {
				height: props.height,
				width: props.width,
			}),
			props.children,
			/*#__PURE__*/ React__default['default'].createElement(
				'g',
				null,
				props.links.map((link) =>
					/*#__PURE__*/ React__default['default'].createElement(Link, {
						key: link.target.data[props.keyProp],
						keyProp: props.keyProp,
						pathFunc: props.pathFunc,
						source: link.source,
						target: link.target,
						x1: link.source.x,
						x2: link.target.x,
						y1: link.source.y,
						y2: link.target.y,
						pathProps: {
							...props.pathProps,
							...link.target.data.pathProps,
						},
					})
				),
				props.nodes.map((node) =>
					/*#__PURE__*/ React__default['default'].createElement(
						Node,
						_extends__default['default'](
							{
								key: node.data[props.keyProp],
								keyProp: props.keyProp,
								labelProp: props.labelProp,
								shape: props.nodeShape,
								x: node.x,
								y: node.y,
								nodeProps: {
									...props.nodeProps,
									...node.data.nodeProps,
								},
								gProps: {
									...props.gProps,
									...node.data.gProps,
								},
								textProps: {
									...props.textProps,
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
	Container.propTypes = {
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

	function Animated(props) {
		let initialX = props.nodes[0].x;
		let initialY = props.nodes[0].y;
		const [state, setState] = React.useState({
			nodes: props.nodes.map((n) => ({
				...n,
				x: initialX,
				y: initialY,
			})),
			links: props.links.map((l) => ({
				source: {
					...l.source,
					x: initialX,
					y: initialY,
				},
				target: {
					...l.target,
					x: initialX,
					y: initialY,
				},
			})),
		});
		const [animation, setAnimation] = React.useState(null);
		React.useEffect(animate, [props.nodes, props.links]);
		function animate() {
			// Stop previous animation if one is already in progress.  We will start the next animation
			// from the position we are currently in
			clearInterval(animation);
			let counter = 0;

			// Do as much one-time calculation outside of the animation step, which needs to be fast
			let animationContext = getAnimationContext(state, props);
			setAnimation(
				setInterval(() => {
					counter++;
					if (counter === props.steps) {
						clearInterval(animation);
						setState({
							nodes: props.nodes,
							links: props.links,
						});
						return;
					}
					setState(calculateNewState(animationContext, counter / props.steps));
				}, props.duration / props.steps)
			);
			return () => clearInterval(animation);
		}
		function getAnimationContext(initialState, newState) {
			// Nodes/links that are in both states need to be moved from the old position to the new one
			// Nodes/links only in the initial state are being removed, and should be moved to the position
			// of the closest ancestor that still exists, or the new root
			// Nodes/links only in the new state are being added, and should be moved from the position of
			// the closest ancestor that previously existed, or the old root

			// The base determines which node/link the data (like classes and labels) comes from for rendering

			// We only run this once at the start of the animation, so optimisation is less important
			let addedNodes = newState.nodes
				.filter((n1) => initialState.nodes.every((n2) => !areNodesSame(n1, n2)))
				.map((n1) => ({
					base: n1,
					old: getClosestAncestor(n1, newState, initialState),
					new: n1,
				}));
			let changedNodes = newState.nodes
				.filter((n1) => initialState.nodes.some((n2) => areNodesSame(n1, n2)))
				.map((n1) => ({
					base: n1,
					old: initialState.nodes.find((n2) => areNodesSame(n1, n2)),
					new: n1,
				}));
			let removedNodes = initialState.nodes
				.filter((n1) => newState.nodes.every((n2) => !areNodesSame(n1, n2)))
				.map((n1) => ({
					base: n1,
					old: n1,
					new: getClosestAncestor(n1, initialState, newState),
				}));
			let addedLinks = newState.links
				.filter((l1) => initialState.links.every((l2) => !areLinksSame(l1, l2)))
				.map((l1) => ({
					base: l1,
					old: getClosestAncestor(l1.target, newState, initialState),
					new: l1,
				}));
			let changedLinks = newState.links
				.filter((l1) => initialState.links.some((l2) => areLinksSame(l1, l2)))
				.map((l1) => ({
					base: l1,
					old: initialState.links.find((l2) => areLinksSame(l1, l2)),
					new: l1,
				}));
			let removedLinks = initialState.links
				.filter((l1) => newState.links.every((l2) => !areLinksSame(l1, l2)))
				.map((l1) => ({
					base: l1,
					old: l1,
					new: getClosestAncestor(l1.target, initialState, newState),
				}));
			return {
				nodes: changedNodes.concat(addedNodes).concat(removedNodes),
				links: changedLinks.concat(addedLinks).concat(removedLinks),
			};
		}
		function getClosestAncestor(node, stateWithNode, stateWithoutNode) {
			let oldParent = node;
			while (oldParent) {
				let newParent = stateWithoutNode.nodes.find((n) =>
					areNodesSame(oldParent, n)
				);
				if (newParent) {
					return newParent;
				}
				oldParent = stateWithNode.nodes.find((n) =>
					(props.getChildren(n) || []).some((c) => areNodesSame(oldParent, c))
				);
			}
			return stateWithoutNode.nodes[0];
		}
		function areNodesSame(a, b) {
			return a.data[props.keyProp] === b.data[props.keyProp];
		}
		function areLinksSame(a, b) {
			return (
				a.source.data[props.keyProp] === b.source.data[props.keyProp] &&
				a.target.data[props.keyProp] === b.target.data[props.keyProp]
			);
		}
		function calculateNewState(animationContext, interval) {
			return {
				nodes: animationContext.nodes.map((n) =>
					calculateNodePosition(n.base, n.old, n.new, interval)
				),
				links: animationContext.links.map((l) =>
					calculateLinkPosition(l.base, l.old, l.new, interval)
				),
			};
		}
		function calculateLinkPosition(link, start, end, interval) {
			return {
				source: {
					...link.source,
					x: calculateNewValue(
						start.source ? start.source.x : start.x,
						end.source ? end.source.x : end.x,
						interval
					),
					y: calculateNewValue(
						start.source ? start.source.y : start.y,
						end.source ? end.source.y : end.y,
						interval
					),
				},
				target: {
					...link.target,
					x: calculateNewValue(
						start.target ? start.target.x : start.x,
						end.target ? end.target.x : end.x,
						interval
					),
					y: calculateNewValue(
						start.target ? start.target.y : start.y,
						end.target ? end.target.y : end.y,
						interval
					),
				},
			};
		}
		function calculateNodePosition(node, start, end, interval) {
			return {
				...node,
				x: calculateNewValue(start.x, end.x, interval),
				y: calculateNewValue(start.y, end.y, interval),
			};
		}
		function calculateNewValue(start, end, interval) {
			return start + (end - start) * props.easing(interval);
		}
		return /*#__PURE__*/ React__default['default'].createElement(
			Container,
			_extends__default['default']({}, props, state)
		);
	}
	Animated.propTypes = {
		getChildren: PropTypes__default['default'].func.isRequired,
		keyProp: PropTypes__default['default'].string.isRequired,
		links: PropTypes__default['default'].array.isRequired,
		nodes: PropTypes__default['default'].array.isRequired,
		duration: PropTypes__default['default'].number.isRequired,
		easing: PropTypes__default['default'].func.isRequired,
		steps: PropTypes__default['default'].number.isRequired,
	};

	function AnimatedTree(props) {
		return /*#__PURE__*/ React__default['default'].createElement(
			Animated,
			_extends__default['default'](
				{
					duration: props.duration,
					easing: props.easing,
					getChildren: props.getChildren,
					height: props.height,
					keyProp: props.keyProp,
					labelProp: props.labelProp,
					nodeShape: props.nodeShape,
					nodeProps: props.nodeProps,
					pathFunc: props.pathFunc,
					steps: props.steps,
					width: props.width,
					gProps: {
						className: 'node',
						...props.gProps,
					},
					pathProps: {
						className: 'link',
						...props.pathProps,
					},
					svgProps: props.svgProps,
					textProps: props.textProps,
				},
				getTreeData(props)
			),
			props.children
		);
	}
	AnimatedTree.propTypes = {
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
	AnimatedTree.defaultProps = {
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

	function Tree(props) {
		return /*#__PURE__*/ React__default['default'].createElement(
			Container,
			_extends__default['default'](
				{
					animated: props.animated,
					getChildren: props.getChildren,
					height: props.height,
					keyProp: props.keyProp,
					labelProp: props.labelProp,
					nodeShape: props.nodeShape,
					nodeProps: props.nodeProps,
					pathFunc: props.pathFunc,
					width: props.width,
					gProps: {
						className: 'node',
						...props.gProps,
					},
					pathProps: {
						className: 'link',
						...props.pathProps,
					},
					svgProps: props.svgProps,
					textProps: props.textProps,
				},
				getTreeData(props)
			),
			props.children
		);
	}
	Tree.propTypes = {
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
	Tree.defaultProps = {
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

	exports.AnimatedTree = AnimatedTree;
	exports.Tree = Tree;

	Object.defineProperty(exports, '__esModule', { value: true });
});
