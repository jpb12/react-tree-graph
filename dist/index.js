(function(global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined'
		? (module.exports = factory(
				require('prop-types'),
				require('react'),
				require('core-js/fn/array/find'),
				require('core-js/fn/object/assign'),
				require('clone'),
				require('d3-ease'),
				require('d3-hierarchy')
		  ))
		: typeof define === 'function' && define.amd
			? define([
					'prop-types',
					'react',
					'core-js/fn/array/find',
					'core-js/fn/object/assign',
					'clone',
					'd3-ease',
					'd3-hierarchy'
			  ], factory)
			: (global.ReactTreeGraph = factory(
					global.PropTypes,
					global.React,
					null,
					null,
					global.clone,
					global.d3,
					global.d3
			  ));
})(this, function(PropTypes, React, find, assign, clone, d3Ease, d3Hierarchy) {
	'use strict';

	var classCallCheck = function(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError('Cannot call a class as a function');
		}
	};

	var createClass = (function() {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ('value' in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function(Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	})();

	var _extends =
		Object.assign ||
		function(target) {
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

	var inherits = function(subClass, superClass) {
		if (typeof superClass !== 'function' && superClass !== null) {
			throw new TypeError(
				'Super expression must either be null or a function, not ' +
					typeof superClass
			);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass)
			Object.setPrototypeOf
				? Object.setPrototypeOf(subClass, superClass)
				: (subClass.__proto__ = superClass);
	};

	var possibleConstructorReturn = function(self, call) {
		if (!self) {
			throw new ReferenceError(
				"this hasn't been initialised - super() hasn't been called"
			);
		}

		return call && (typeof call === 'object' || typeof call === 'function')
			? call
			: self;
	};

	var propTypes = {
		source: PropTypes.object.isRequired,
		target: PropTypes.object.isRequired,
		keyProp: PropTypes.string.isRequired,
		x1: PropTypes.number.isRequired,
		x2: PropTypes.number.isRequired,
		y1: PropTypes.number.isRequired,
		y2: PropTypes.number.isRequired,
		pathProps: PropTypes.object.isRequired
	};

	function diagonal(x1, y1, x2, y2) {
		return (
			'M' +
			y1 +
			',' +
			x1 +
			'C' +
			(y1 + y2) / 2 +
			',' +
			x1 +
			' ' +
			(y1 + y2) / 2 +
			',' +
			x2 +
			' ' +
			y2 +
			',' +
			x2
		);
	}

	var Link = (function(_React$PureComponent) {
		inherits(Link, _React$PureComponent);

		function Link(props) {
			classCallCheck(this, Link);

			var _this = possibleConstructorReturn(
				this,
				(Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props)
			);

			_this.handleClick = _this.handleClick.bind(_this);
			return _this;
		}

		createClass(Link, [
			{
				key: 'handleClick',
				value: function handleClick(event) {
					this.props.pathProps.onClick &&
						this.props.pathProps.onClick(
							this.props.source.data[this.props.keyProp],
							this.props.target.data[this.props.keyProp],
							event
						);
				}
			},
			{
				key: 'render',
				value: function render() {
					var d = diagonal(
						this.props.x1,
						this.props.y1,
						this.props.x2,
						this.props.y2
					);

					return React.createElement(
						'path',
						_extends({}, this.props.pathProps, {
							d: d,
							onClick: this.handleClick
						})
					);
				}
			}
		]);
		return Link;
	})(React.PureComponent);

	Link.propTypes = propTypes;

	var propTypes$1 = {
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
		keyProp: PropTypes.string.isRequired,
		labelProp: PropTypes.string.isRequired,
		offset: PropTypes.number.isRequired,
		radius: PropTypes.number.isRequired,
		circleProps: PropTypes.object.isRequired,
		gProps: PropTypes.object.isRequired,
		textProps: PropTypes.object.isRequired
	};

	var Node = (function(_React$PureComponent) {
		inherits(Node, _React$PureComponent);

		function Node(props) {
			classCallCheck(this, Node);

			var _this = possibleConstructorReturn(
				this,
				(Node.__proto__ || Object.getPrototypeOf(Node)).call(this, props)
			);

			_this.handleClick = _this.handleClick.bind(_this);
			return _this;
		}

		createClass(Node, [
			{
				key: 'handleClick',
				value: function handleClick(event) {
					this.props.gProps.onClick &&
						this.props.gProps.onClick(this.props[this.props.keyProp], event);
				}
			},
			{
				key: 'getTransform',
				value: function getTransform() {
					return 'translate(' + this.props.y + ', ' + this.props.x + ')';
				}
			},
			{
				key: 'render',
				value: function render() {
					return React.createElement(
						'g',
						_extends({}, this.props.gProps, {
							transform: this.getTransform(),
							onClick: this.handleClick
						}),
						React.createElement(
							'circle',
							_extends({}, this.props.circleProps, { r: this.props.radius })
						),
						React.createElement(
							'text',
							_extends({}, this.props.textProps, {
								dx: this.props.radius + 0.5,
								dy: this.props.offset
							}),
							this.props[this.props.labelProp]
						)
					);
				}
			}
		]);
		return Node;
	})(React.PureComponent);

	Node.propTypes = propTypes$1;

	var propTypes$2 = {
		height: PropTypes.number.isRequired,
		keyProp: PropTypes.string.isRequired,
		labelProp: PropTypes.string.isRequired,
		links: PropTypes.array.isRequired,
		nodes: PropTypes.array.isRequired,
		nodeClassName: PropTypes.string,
		nodeOffset: PropTypes.number.isRequired,
		nodeRadius: PropTypes.number.isRequired,
		width: PropTypes.number.isRequired,
		circleProps: PropTypes.object.isRequired,
		gProps: PropTypes.object.isRequired,
		pathProps: PropTypes.object.isRequired,
		svgProps: PropTypes.object.isRequired,
		textProps: PropTypes.object.isRequired
	};

	var Container = (function(_React$PureComponent) {
		inherits(Container, _React$PureComponent);

		function Container() {
			classCallCheck(this, Container);
			return possibleConstructorReturn(
				this,
				(Container.__proto__ || Object.getPrototypeOf(Container)).apply(
					this,
					arguments
				)
			);
		}

		createClass(Container, [
			{
				key: 'render',
				value: function render() {
					var _this2 = this;

					return React.createElement(
						'svg',
						_extends({}, this.props.svgProps, {
							height: this.props.height,
							width: this.props.width
						}),
						this.props.links.map(function(link) {
							return React.createElement(Link, {
								key: link.target.data[_this2.props.keyProp],
								keyProp: _this2.props.keyProp,
								source: link.source,
								target: link.target,
								x1: link.source.x,
								x2: link.target.x,
								y1: link.source.y,
								y2: link.target.y,
								pathProps: Object.assign(
									{},
									_this2.props.pathProps,
									link.target.data.pathProps
								)
							});
						}),
						this.props.nodes.map(function(node) {
							return React.createElement(
								Node,
								_extends(
									{
										key: node.data[_this2.props.keyProp],
										keyProp: _this2.props.keyProp,
										labelProp: _this2.props.labelProp,
										offset: _this2.props.nodeOffset,
										radius: _this2.props.nodeRadius,
										x: node.x,
										y: node.y,
										circleProps: Object.assign(
											{},
											_this2.props.circleProps,
											node.data.circleProps
										),
										gProps: Object.assign(
											{},
											_this2.props.gProps,
											node.data.gProps
										),
										textProps: Object.assign(
											{},
											_this2.props.textProps,
											node.data.textProps
										)
									},
									node.data
								)
							);
						})
					);
				}
			}
		]);
		return Container;
	})(React.PureComponent);

	Container.propTypes = propTypes$2;

	var propTypes$3 = {
		animated: PropTypes.bool.isRequired,
		getChildren: PropTypes.func.isRequired,
		keyProp: PropTypes.string.isRequired,
		links: PropTypes.array.isRequired,
		nodes: PropTypes.array.isRequired,
		duration: PropTypes.number.isRequired,
		easing: PropTypes.func.isRequired,
		steps: PropTypes.number.isRequired
	};

	var Animated = (function(_React$PureComponent) {
		inherits(Animated, _React$PureComponent);

		function Animated(props) {
			classCallCheck(this, Animated);

			var _this = possibleConstructorReturn(
				this,
				(Animated.__proto__ || Object.getPrototypeOf(Animated)).call(
					this,
					props
				)
			);

			if (props.animated) {
				// If we are animating, we set the initial positions of the nodes and links to be the position of the root node
				// and animate from there
				var initialX = props.nodes[0].x;
				var initialY = props.nodes[0].y;
				_this.state = {
					nodes: props.nodes.map(function(n) {
						return Object.assign({}, n, { x: initialX, y: initialY });
					}),
					links: props.links.map(function(l) {
						return {
							source: Object.assign({}, l.source, { x: initialX, y: initialY }),
							target: Object.assign({}, l.target, { x: initialX, y: initialY })
						};
					})
				};
			} else {
				_this.state = {
					nodes: props.nodes,
					links: props.links
				};
			}
			return _this;
		}

		createClass(Animated, [
			{
				key: 'componentDidMount',
				value: function componentDidMount() {
					if (this.props.animated) {
						this.animate(this.props);
					}
				}
			},
			{
				key: 'componentWillReceiveProps',
				value: function componentWillReceiveProps(nextProps) {
					if (
						nextProps.nodes === this.props.nodes &&
						nextProps.links === this.props.links
					) {
						return;
					}

					if (!nextProps.animated) {
						this.setState({ nodes: nextProps.nodes, links: nextProps.links });
						return;
					}

					this.animate(nextProps);
				}
			},
			{
				key: 'animate',
				value: function animate(props) {
					var _this2 = this;

					// Stop previous animation if one is already in progress.  We will start the next animation
					// from the position we are currently in
					clearInterval(this.animation);

					var counter = 0;

					// Do as much one-time calculation outside of the animation step, which needs to be fast
					var animationContext = this.getAnimationContext(this.state, props);

					this.animation = setInterval(function() {
						counter++;

						if (counter === props.steps) {
							clearInterval(_this2.animation);
							_this2.animation = null;
							_this2.setState({ nodes: props.nodes, links: props.links });
							return;
						}

						_this2.setState(
							_this2.calculateNewState(animationContext, counter / props.steps)
						);
					}, props.duration / props.steps);
				}
			},
			{
				key: 'getAnimationContext',
				value: function getAnimationContext(initialState, newState) {
					var _this3 = this;

					// Nodes/links that are in both states need to be moved from the old position to the new one
					// Nodes/links only in the initial state are being removed, and should be moved to the position
					// of the closest ancestor that still exists, or the new root
					// Nodes/links only in the new state are being added, and should be moved from the position of
					// the closest ancestor that previously existed, or the old root

					// The base determines which node/link the data (like classes and labels) comes from for rendering

					// We only run this once at the start of the animation, so optimization is less important
					var addedNodes = newState.nodes
						.filter(function(n1) {
							return initialState.nodes.every(function(n2) {
								return !_this3.areNodesSame(n1, n2);
							});
						})
						.map(function(n1) {
							return {
								base: n1,
								old: _this3.getClosestAncestor(n1, newState, initialState),
								new: n1
							};
						});
					var changedNodes = newState.nodes
						.filter(function(n1) {
							return initialState.nodes.some(function(n2) {
								return _this3.areNodesSame(n1, n2);
							});
						})
						.map(function(n1) {
							return {
								base: n1,
								old: initialState.nodes.find(function(n2) {
									return _this3.areNodesSame(n1, n2);
								}),
								new: n1
							};
						});
					var removedNodes = initialState.nodes
						.filter(function(n1) {
							return newState.nodes.every(function(n2) {
								return !_this3.areNodesSame(n1, n2);
							});
						})
						.map(function(n1) {
							return {
								base: n1,
								old: n1,
								new: _this3.getClosestAncestor(n1, initialState, newState)
							};
						});

					var addedLinks = newState.links
						.filter(function(l1) {
							return initialState.links.every(function(l2) {
								return !_this3.areLinksSame(l1, l2);
							});
						})
						.map(function(l1) {
							return {
								base: l1,
								old: _this3.getClosestAncestor(
									l1.target,
									newState,
									initialState
								),
								new: l1
							};
						});
					var changedLinks = newState.links
						.filter(function(l1) {
							return initialState.links.some(function(l2) {
								return _this3.areLinksSame(l1, l2);
							});
						})
						.map(function(l1) {
							return {
								base: l1,
								old: initialState.links.find(function(l2) {
									return _this3.areLinksSame(l1, l2);
								}),
								new: l1
							};
						});
					var removedLinks = initialState.links
						.filter(function(l1) {
							return newState.links.every(function(l2) {
								return !_this3.areLinksSame(l1, l2);
							});
						})
						.map(function(l1) {
							return {
								base: l1,
								old: l1,
								new: _this3.getClosestAncestor(
									l1.target,
									initialState,
									newState
								)
							};
						});

					return {
						nodes: changedNodes.concat(addedNodes).concat(removedNodes),
						links: changedLinks.concat(addedLinks).concat(removedLinks)
					};
				}
			},
			{
				key: 'getClosestAncestor',
				value: function getClosestAncestor(
					node,
					stateWithNode,
					stateWithoutNode
				) {
					var _this4 = this;

					var oldParent = node;

					while (oldParent) {
						var newParent = stateWithoutNode.nodes.find(function(n) {
							return _this4.areNodesSame(oldParent, n);
						});

						if (newParent) {
							return newParent;
						}

						oldParent = stateWithNode.nodes.find(function(n) {
							return (_this4.props.getChildren(n) || []).some(function(c) {
								return _this4.areNodesSame(oldParent, c);
							});
						});
					}

					return stateWithoutNode.nodes[0];
				}
			},
			{
				key: 'areNodesSame',
				value: function areNodesSame(a, b) {
					return a.data[this.props.keyProp] === b.data[this.props.keyProp];
				}
			},
			{
				key: 'areLinksSame',
				value: function areLinksSame(a, b) {
					return (
						a.source.data[this.props.keyProp] ===
							b.source.data[this.props.keyProp] &&
						a.target.data[this.props.keyProp] ===
							b.target.data[this.props.keyProp]
					);
				}
			},
			{
				key: 'calculateNewState',
				value: function calculateNewState(animationContext, interval) {
					var _this5 = this;

					return {
						nodes: animationContext.nodes.map(function(n) {
							return _this5.calculateNodePosition(
								n.base,
								n.old,
								n.new,
								interval
							);
						}),
						links: animationContext.links.map(function(l) {
							return _this5.calculateLinkPosition(
								l.base,
								l.old,
								l.new,
								interval
							);
						})
					};
				}
			},
			{
				key: 'calculateNodePosition',
				value: function calculateNodePosition(node, start, end, interval) {
					return Object.assign({}, node, {
						x: this.calculateNewValue(start.x, end.x, interval),
						y: this.calculateNewValue(start.y, end.y, interval)
					});
				}
			},
			{
				key: 'calculateLinkPosition',
				value: function calculateLinkPosition(link, start, end, interval) {
					return {
						source: Object.assign({}, link.source, {
							x: this.calculateNewValue(
								start.source ? start.source.x : start.x,
								end.source ? end.source.x : end.x,
								interval
							),
							y: this.calculateNewValue(
								start.source ? start.source.y : start.y,
								end.source ? end.source.y : end.y,
								interval
							)
						}),
						target: Object.assign({}, link.target, {
							x: this.calculateNewValue(
								start.target ? start.target.x : start.x,
								end.target ? end.target.x : end.x,
								interval
							),
							y: this.calculateNewValue(
								start.target ? start.target.y : start.y,
								end.target ? end.target.y : end.y,
								interval
							)
						})
					};
				}
			},
			{
				key: 'calculateNewValue',
				value: function calculateNewValue(start, end, interval) {
					return start + (end - start) * this.props.easing(interval);
				}
			},
			{
				key: 'render',
				value: function render() {
					return React.createElement(
						Container,
						_extends({}, this.props, this.state)
					);
				}
			}
		]);
		return Animated;
	})(React.PureComponent);

	Animated.propTypes = propTypes$3;

	var propTypes$4 = {
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
		margins: PropTypes.shape({
			bottom: PropTypes.number.isRequired,
			left: PropTypes.number.isRequired,
			right: PropTypes.number.isRequired,
			top: PropTypes.number.isRequired
		}).isRequired,
		nodeOffset: PropTypes.number.isRequired,
		nodeRadius: PropTypes.number.isRequired,
		circleProps: PropTypes.object.isRequired,
		gProps: PropTypes.object.isRequired,
		pathProps: PropTypes.object.isRequired,
		svgProps: PropTypes.object.isRequired,
		textProps: PropTypes.object.isRequired
	};

	var defaultProps = {
		animated: false,
		duration: 500,
		easing: d3Ease.easeQuadOut,
		getChildren: function getChildren(n) {
			return n.children;
		},
		steps: 20,
		keyProp: 'name',
		labelProp: 'name',
		margins: {
			bottom: 10,
			left: 20,
			right: 150,
			top: 10
		},
		nodeOffset: 3.5,
		nodeRadius: 5,
		circleProps: {},
		gProps: {
			className: 'node'
		},
		pathProps: {
			className: 'link'
		},
		svgProps: {},
		textProps: {}
	};

	var Tree = (function(_React$PureComponent) {
		inherits(Tree, _React$PureComponent);

		function Tree() {
			classCallCheck(this, Tree);
			return possibleConstructorReturn(
				this,
				(Tree.__proto__ || Object.getPrototypeOf(Tree)).apply(this, arguments)
			);
		}

		createClass(Tree, [
			{
				key: 'render',
				value: function render() {
					var _this2 = this;

					var contentWidth =
						this.props.width -
						this.props.margins.left -
						this.props.margins.right;
					var contentHeight =
						this.props.height -
						this.props.margins.top -
						this.props.margins.bottom;

					// data is cloned because d3 will mutate the object passed in
					var data = d3Hierarchy.hierarchy(
						clone(this.props.data),
						this.props.getChildren
					);

					var root = d3Hierarchy.tree().size([contentHeight, contentWidth])(
						data
					);
					var nodes = root.descendants();
					var links = root.links();

					nodes.forEach(function(node) {
						node.y += _this2.props.margins.top;
					});

					return React.createElement(Animated, {
						animated: this.props.animated,
						duration: this.props.duration,
						easing: this.props.easing,
						getChildren: this.props.getChildren,
						height: this.props.height,
						keyProp: this.props.keyProp,
						labelProp: this.props.labelProp,
						links: links,
						nodes: nodes,
						nodeOffset: this.props.nodeOffset,
						nodeRadius: this.props.nodeRadius,
						steps: this.props.steps,
						width: this.props.width,
						circleProps: this.props.circleProps,
						gProps: this.props.gProps,
						pathProps: this.props.pathProps,
						svgProps: this.props.svgProps,
						textProps: this.props.textProps
					});
				}
			}
		]);
		return Tree;
	})(React.PureComponent);

	Tree.propTypes = propTypes$4;
	Tree.defaultProps = defaultProps;

	return Tree;
});
