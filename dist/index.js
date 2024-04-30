(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined'
		? factory(
				exports,
				require('@babel/runtime/helpers/extends'),
				require('d3-ease'),
				require('prop-types'),
				require('react'),
				require('d3-hierarchy'),
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
					factory,
				)
			: ((global =
					typeof globalThis !== 'undefined' ? globalThis : global || self),
				factory(
					(global.ReactTreeGraph = {}),
					global._extends,
					global.d3,
					global.PropTypes,
					global.React,
					global.d3,
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
		const margins = props.margins || {
			bottom: 10,
			left: props.direction !== 'rtl' ? 20 : 150,
			right: props.direction !== 'rtl' ? 150 : 20,
			top: 10,
		};
		const contentWidth = props.width - margins.left - margins.right;
		const contentHeight = props.height - margins.top - margins.bottom;
		const data = d3Hierarchy.hierarchy(props.data, props.getChildren);
		const root = d3Hierarchy.tree().size([contentHeight, contentWidth])(data);

		// d3 gives us a top to down tree, but we will display it left to right/right to left, so x and y need to be swapped
		const links = root.links().map((link) => ({
			...link,
			source: {
				...link.source,
				x:
					props.direction !== 'rtl'
						? link.source.y
						: contentWidth - link.source.y,
				y: link.source.x,
			},
			target: {
				...link.target,
				x:
					props.direction !== 'rtl'
						? link.target.y
						: contentWidth - link.target.y,
				y: link.target.x,
			},
		}));
		const nodes = root.descendants().map((node) => ({
			...node,
			x: props.direction !== 'rtl' ? node.y : contentWidth - node.y,
			y: node.x,
		}));
		return {
			links,
			margins,
			nodes,
		};
	}

	const regex = /on[A-Z]/;
	function wrapper(func, args) {
		return (event) => func(event, ...args);
	}

	// Wraps any event handlers passed in as props with a function that passes additional arguments
	function wrapHandlers(props, ...args) {
		const handlers = Object.keys(props).filter(
			(propName) =>
				regex.test(propName) && typeof props[propName] === 'function',
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
		return `M${x1},${y1}C${(x1 + x2) / 2},${y1} ${(x1 + x2) / 2},${y2} ${x2},${y2}`;
	}
	function Link(props) {
		const wrappedProps = wrapHandlers(
			props.pathProps,
			props.source.data[props.keyProp],
			props.target.data[props.keyProp],
		);
		const pathFunc = props.pathFunc || diagonal;
		const d = pathFunc(props.x1, props.y1, props.x2, props.y2);
		return /*#__PURE__*/ React__default.default.createElement(
			'path',
			_extends__default.default({}, wrappedProps, {
				d: d,
			}),
		);
	}
	Link.propTypes = {
		source: PropTypes__default.default.object.isRequired,
		target: PropTypes__default.default.object.isRequired,
		keyProp: PropTypes__default.default.string.isRequired,
		x1: PropTypes__default.default.number.isRequired,
		x2: PropTypes__default.default.number.isRequired,
		y1: PropTypes__default.default.number.isRequired,
		y2: PropTypes__default.default.number.isRequired,
		pathFunc: PropTypes__default.default.func,
		pathProps: PropTypes__default.default.object.isRequired,
	};

	function Node(props) {
		function getTransform() {
			return `translate(${props.x}, ${props.y})`;
		}
		let offset = 0.5;
		let nodePropsWithDefaults = props.nodeProps;
		switch (props.shape) {
			case 'circle':
				nodePropsWithDefaults = {
					r: 5,
					...nodePropsWithDefaults,
				};
				offset += nodePropsWithDefaults.r;
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
				offset += nodePropsWithDefaults.width / 2;
				break;
		}
		if (props.direction === 'rtl') {
			offset = -offset;
		}
		const wrappedNodeProps = wrapHandlers(
			nodePropsWithDefaults,
			props[props.keyProp],
		);
		const wrappedGProps = wrapHandlers(props.gProps, props[props.keyProp]);
		const wrappedTextProps = wrapHandlers(
			props.textProps,
			props[props.keyProp],
		);
		const label =
			typeof props[props.labelProp] === 'string'
				? /*#__PURE__*/ React__default.default.createElement(
						'text',
						_extends__default.default(
							{
								dx: offset,
								dy: 5,
							},
							wrappedTextProps,
						),
						props[props.labelProp],
					)
				: /*#__PURE__*/ React__default.default.createElement(
						'g',
						_extends__default.default(
							{
								transform: `translate(${offset}, 5)`,
							},
							wrappedTextProps,
						),
						props[props.labelProp],
					);
		return /*#__PURE__*/ React__default.default.createElement(
			'g',
			_extends__default.default({}, wrappedGProps, {
				transform: getTransform(),
				direction: props.direction === 'rtl' ? 'rtl' : null,
			}),
			/*#__PURE__*/ React__default.default.createElement(
				props.shape,
				wrappedNodeProps,
			),
			label,
		);
	}
	Node.propTypes = {
		x: PropTypes__default.default.number.isRequired,
		y: PropTypes__default.default.number.isRequired,
		keyProp: PropTypes__default.default.string.isRequired,
		labelProp: PropTypes__default.default.string.isRequired,
		direction: PropTypes__default.default.oneOf(['ltr', 'rtl']).isRequired,
		shape: PropTypes__default.default.string.isRequired,
		nodeProps: PropTypes__default.default.object.isRequired,
		gProps: PropTypes__default.default.object.isRequired,
		textProps: PropTypes__default.default.object.isRequired,
	};

	function Container(props) {
		return /*#__PURE__*/ React__default.default.createElement(
			'svg',
			_extends__default.default({}, props.svgProps, {
				height: props.height,
				width: props.width,
			}),
			props.children,
			/*#__PURE__*/ React__default.default.createElement(
				'g',
				{
					transform: `translate(${props.margins.left}, ${props.margins.top})`,
				},
				props.links.map((link) =>
					/*#__PURE__*/ React__default.default.createElement(Link, {
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
					}),
				),
				props.nodes.map((node) =>
					/*#__PURE__*/ React__default.default.createElement(
						Node,
						_extends__default.default(
							{
								key: node.data[props.keyProp],
								keyProp: props.keyProp,
								labelProp: props.labelProp,
								direction: props.direction,
								shape: props.nodeShape,
								x: node.x,
								y: node.y,
							},
							node.data,
							{
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
						),
					),
				),
			),
		);
	}
	Container.propTypes = {
		children: PropTypes__default.default.node,
		direction: PropTypes__default.default.oneOf(['ltr', 'rtl']).isRequired,
		height: PropTypes__default.default.number.isRequired,
		keyProp: PropTypes__default.default.string.isRequired,
		labelProp: PropTypes__default.default.string.isRequired,
		links: PropTypes__default.default.array.isRequired,
		margins: PropTypes__default.default.shape({
			left: PropTypes__default.default.number.isRequired,
			top: PropTypes__default.default.number.isRequired,
		}).isRequired,
		nodes: PropTypes__default.default.array.isRequired,
		nodeClassName: PropTypes__default.default.string,
		nodeShape: PropTypes__default.default.string.isRequired,
		nodeProps: PropTypes__default.default.object.isRequired,
		pathFunc: PropTypes__default.default.func,
		width: PropTypes__default.default.number.isRequired,
		gProps: PropTypes__default.default.object.isRequired,
		pathProps: PropTypes__default.default.object.isRequired,
		svgProps: PropTypes__default.default.object.isRequired,
		textProps: PropTypes__default.default.object.isRequired,
	};

	function Animated(props) {
		const initialX = props.nodes[0].x;
		const initialY = props.nodes[0].y;
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
			const animationContext = getAnimationContext(state, props);
			const interval = setInterval(() => {
				counter++;
				if (counter === props.steps) {
					clearInterval(interval);
					setState({
						nodes: props.nodes,
						links: props.links,
					});
					return;
				}
				setState(calculateNewState(animationContext, counter / props.steps));
			}, props.duration / props.steps);
			setAnimation(interval);
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
			const addedNodes = newState.nodes
				.filter((n1) => initialState.nodes.every((n2) => !areNodesSame(n1, n2)))
				.map((n1) => ({
					base: n1,
					old: getClosestAncestor(n1, newState, initialState),
					new: n1,
				}));
			const changedNodes = newState.nodes
				.filter((n1) => initialState.nodes.some((n2) => areNodesSame(n1, n2)))
				.map((n1) => ({
					base: n1,
					old: initialState.nodes.find((n2) => areNodesSame(n1, n2)),
					new: n1,
				}));
			const removedNodes = initialState.nodes
				.filter((n1) => newState.nodes.every((n2) => !areNodesSame(n1, n2)))
				.map((n1) => ({
					base: n1,
					old: n1,
					new: getClosestAncestor(n1, initialState, newState),
				}));
			const addedLinks = newState.links
				.filter((l1) => initialState.links.every((l2) => !areLinksSame(l1, l2)))
				.map((l1) => ({
					base: l1,
					old: getClosestAncestor(l1.target, newState, initialState),
					new: l1,
				}));
			const changedLinks = newState.links
				.filter((l1) => initialState.links.some((l2) => areLinksSame(l1, l2)))
				.map((l1) => ({
					base: l1,
					old: initialState.links.find((l2) => areLinksSame(l1, l2)),
					new: l1,
				}));
			const removedLinks = initialState.links
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
					areNodesSame(oldParent, n),
				);
				if (newParent) {
					return newParent;
				}
				oldParent = stateWithNode.nodes.find((n) =>
					(props.getChildren(n) || []).some((c) => areNodesSame(oldParent, c)),
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
					calculateNodePosition(n.base, n.old, n.new, interval),
				),
				links: animationContext.links.map((l) =>
					calculateLinkPosition(l.base, l.old, l.new, interval),
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
						interval,
					),
					y: calculateNewValue(
						start.source ? start.source.y : start.y,
						end.source ? end.source.y : end.y,
						interval,
					),
				},
				target: {
					...link.target,
					x: calculateNewValue(
						start.target ? start.target.x : start.x,
						end.target ? end.target.x : end.x,
						interval,
					),
					y: calculateNewValue(
						start.target ? start.target.y : start.y,
						end.target ? end.target.y : end.y,
						interval,
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
		return /*#__PURE__*/ React__default.default.createElement(
			Container,
			_extends__default.default({}, props, state),
		);
	}
	Animated.propTypes = {
		getChildren: PropTypes__default.default.func.isRequired,
		keyProp: PropTypes__default.default.string.isRequired,
		links: PropTypes__default.default.array.isRequired,
		nodes: PropTypes__default.default.array.isRequired,
		duration: PropTypes__default.default.number.isRequired,
		easing: PropTypes__default.default.func.isRequired,
		steps: PropTypes__default.default.number.isRequired,
	};

	function AnimatedTree(props) {
		return /*#__PURE__*/ React__default.default.createElement(
			Animated,
			_extends__default.default(
				{
					duration: props.duration,
					easing: props.easing,
					getChildren: props.getChildren,
					direction: props.direction,
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
				getTreeData(props),
			),
			props.children,
		);
	}
	AnimatedTree.propTypes = {
		data: PropTypes__default.default.object.isRequired,
		children: PropTypes__default.default.node,
		direction: PropTypes__default.default.oneOf(['ltr', 'rtl']).isRequired,
		duration: PropTypes__default.default.number.isRequired,
		easing: PropTypes__default.default.func.isRequired,
		steps: PropTypes__default.default.number.isRequired,
		height: PropTypes__default.default.number.isRequired,
		width: PropTypes__default.default.number.isRequired,
		keyProp: PropTypes__default.default.string.isRequired,
		labelProp: PropTypes__default.default.string.isRequired,
		getChildren: PropTypes__default.default.func.isRequired,
		margins: PropTypes__default.default.shape({
			bottom: PropTypes__default.default.number.isRequired,
			left: PropTypes__default.default.number.isRequired,
			right: PropTypes__default.default.number.isRequired,
			top: PropTypes__default.default.number.isRequired,
		}),
		pathFunc: PropTypes__default.default.func,
		nodeShape: PropTypes__default.default.oneOf([
			'circle',
			'image',
			'polygon',
			'rect',
		]).isRequired,
		nodeProps: PropTypes__default.default.object.isRequired,
		gProps: PropTypes__default.default.object.isRequired,
		pathProps: PropTypes__default.default.object.isRequired,
		svgProps: PropTypes__default.default.object.isRequired,
		textProps: PropTypes__default.default.object.isRequired,
	};
	AnimatedTree.defaultProps = {
		direction: 'ltr',
		duration: 500,
		easing: d3Ease.easeQuadOut,
		getChildren: (n) => n.children,
		steps: 20,
		keyProp: 'name',
		labelProp: 'name',
		nodeShape: 'circle',
		nodeProps: {},
		gProps: {},
		pathProps: {},
		svgProps: {},
		textProps: {},
	};

	function Tree(props) {
		return /*#__PURE__*/ React__default.default.createElement(
			Container,
			_extends__default.default(
				{
					getChildren: props.getChildren,
					direction: props.direction,
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
				getTreeData(props),
			),
			props.children,
		);
	}
	Tree.propTypes = {
		data: PropTypes__default.default.object.isRequired,
		children: PropTypes__default.default.node,
		direction: PropTypes__default.default.oneOf(['ltr', 'rtl']).isRequired,
		height: PropTypes__default.default.number.isRequired,
		width: PropTypes__default.default.number.isRequired,
		keyProp: PropTypes__default.default.string.isRequired,
		labelProp: PropTypes__default.default.string.isRequired,
		getChildren: PropTypes__default.default.func.isRequired,
		margins: PropTypes__default.default.shape({
			bottom: PropTypes__default.default.number.isRequired,
			left: PropTypes__default.default.number.isRequired,
			right: PropTypes__default.default.number.isRequired,
			top: PropTypes__default.default.number.isRequired,
		}),
		pathFunc: PropTypes__default.default.func,
		nodeShape: PropTypes__default.default.oneOf([
			'circle',
			'image',
			'polygon',
			'rect',
		]).isRequired,
		nodeProps: PropTypes__default.default.object.isRequired,
		gProps: PropTypes__default.default.object.isRequired,
		pathProps: PropTypes__default.default.object.isRequired,
		svgProps: PropTypes__default.default.object.isRequired,
		textProps: PropTypes__default.default.object.isRequired,
	};
	Tree.defaultProps = {
		direction: 'ltr',
		getChildren: (n) => n.children,
		keyProp: 'name',
		labelProp: 'name',
		nodeShape: 'circle',
		nodeProps: {},
		gProps: {},
		pathProps: {},
		svgProps: {},
		textProps: {},
	};

	exports.AnimatedTree = AnimatedTree;
	exports.Tree = Tree;
});
