(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined'
		? (module.exports = factory(
				require('core-js/fn/array/find'),
				require('core-js/fn/object/assign'),
				require('clone'),
				require('d3-ease'),
				require('d3-hierarchy'),
				require('prop-types'),
				require('react')
		  ))
		: typeof define === 'function' && define.amd
		? define([
				'core-js/fn/array/find',
				'core-js/fn/object/assign',
				'clone',
				'd3-ease',
				'd3-hierarchy',
				'prop-types',
				'react',
		  ], factory)
		: ((global =
				typeof globalThis !== 'undefined' ? globalThis : global || self),
		  (global.ReactTreeGraph = factory(
				null,
				null,
				global.clone,
				global.d3,
				global.d3,
				global.PropTypes,
				global.React
		  )));
})(this, function (find, assign, clone, d3Ease, d3Hierarchy, PropTypes, React) {
	'use strict';

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError('Cannot call a class as a function');
		}
	}

	function _defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ('value' in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function _createClass(Constructor, protoProps, staticProps) {
		if (protoProps) _defineProperties(Constructor.prototype, protoProps);
		if (staticProps) _defineProperties(Constructor, staticProps);
		return Constructor;
	}

	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true,
			});
		} else {
			obj[key] = value;
		}

		return obj;
	}

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

	function ownKeys(object, enumerableOnly) {
		var keys = Object.keys(object);

		if (Object.getOwnPropertySymbols) {
			var symbols = Object.getOwnPropertySymbols(object);
			if (enumerableOnly)
				symbols = symbols.filter(function (sym) {
					return Object.getOwnPropertyDescriptor(object, sym).enumerable;
				});
			keys.push.apply(keys, symbols);
		}

		return keys;
	}

	function _objectSpread2(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i] != null ? arguments[i] : {};

			if (i % 2) {
				ownKeys(Object(source), true).forEach(function (key) {
					_defineProperty(target, key, source[key]);
				});
			} else if (Object.getOwnPropertyDescriptors) {
				Object.defineProperties(
					target,
					Object.getOwnPropertyDescriptors(source)
				);
			} else {
				ownKeys(Object(source)).forEach(function (key) {
					Object.defineProperty(
						target,
						key,
						Object.getOwnPropertyDescriptor(source, key)
					);
				});
			}
		}

		return target;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== 'function' && superClass !== null) {
			throw new TypeError('Super expression must either be null or a function');
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				writable: true,
				configurable: true,
			},
		});
		if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _getPrototypeOf(o) {
		_getPrototypeOf = Object.setPrototypeOf
			? Object.getPrototypeOf
			: function _getPrototypeOf(o) {
					return o.__proto__ || Object.getPrototypeOf(o);
			  };
		return _getPrototypeOf(o);
	}

	function _setPrototypeOf(o, p) {
		_setPrototypeOf =
			Object.setPrototypeOf ||
			function _setPrototypeOf(o, p) {
				o.__proto__ = p;
				return o;
			};

		return _setPrototypeOf(o, p);
	}

	function _isNativeReflectConstruct() {
		if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
		if (Reflect.construct.sham) return false;
		if (typeof Proxy === 'function') return true;

		try {
			Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
			return true;
		} catch (e) {
			return false;
		}
	}

	function _assertThisInitialized(self) {
		if (self === void 0) {
			throw new ReferenceError(
				"this hasn't been initialised - super() hasn't been called"
			);
		}

		return self;
	}

	function _possibleConstructorReturn(self, call) {
		if (call && (typeof call === 'object' || typeof call === 'function')) {
			return call;
		}

		return _assertThisInitialized(self);
	}

	function _createSuper(Derived) {
		var hasNativeReflectConstruct = _isNativeReflectConstruct();

		return function _createSuperInternal() {
			var Super = _getPrototypeOf(Derived),
				result;

			if (hasNativeReflectConstruct) {
				var NewTarget = _getPrototypeOf(this).constructor;

				result = Reflect.construct(Super, arguments, NewTarget);
			} else {
				result = Super.apply(this, arguments);
			}

			return _possibleConstructorReturn(this, result);
		};
	}

	function _toConsumableArray(arr) {
		return (
			_arrayWithoutHoles(arr) ||
			_iterableToArray(arr) ||
			_unsupportedIterableToArray(arr) ||
			_nonIterableSpread()
		);
	}

	function _arrayWithoutHoles(arr) {
		if (Array.isArray(arr)) return _arrayLikeToArray(arr);
	}

	function _iterableToArray(iter) {
		if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter))
			return Array.from(iter);
	}

	function _unsupportedIterableToArray(o, minLen) {
		if (!o) return;
		if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
		var n = Object.prototype.toString.call(o).slice(8, -1);
		if (n === 'Object' && o.constructor) n = o.constructor.name;
		if (n === 'Map' || n === 'Set') return Array.from(o);
		if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
			return _arrayLikeToArray(o, minLen);
	}

	function _arrayLikeToArray(arr, len) {
		if (len == null || len > arr.length) len = arr.length;

		for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

		return arr2;
	}

	function _nonIterableSpread() {
		throw new TypeError(
			'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
		);
	}

	var regex = /on[A-Z]/;

	function wrapper(func, args) {
		return function (event) {
			return func.apply(void 0, [event].concat(_toConsumableArray(args)));
		};
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

		var handlers = Object.keys(props).filter(function (propName) {
			return regex.test(propName) && typeof props[propName] === 'function';
		});
		var wrappedHandlers = handlers.reduce(function (acc, handler) {
			acc[handler] = wrapper(props[handler], args);
			return acc;
		}, {});
		return _objectSpread2(_objectSpread2({}, props), wrappedHandlers);
	}

	var propTypes = {
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
		return 'M'
			.concat(y1, ',')
			.concat(x1, 'C')
			.concat((y1 + y2) / 2, ',')
			.concat(x1, ' ')
			.concat((y1 + y2) / 2, ',')
			.concat(x2, ' ')
			.concat(y2, ',')
			.concat(x2);
	}

	var defaultProps = {
		pathFunc: diagonal,
	};

	var Link = /*#__PURE__*/ (function (_React$PureComponent) {
		_inherits(Link, _React$PureComponent);

		var _super = _createSuper(Link);

		function Link() {
			_classCallCheck(this, Link);

			return _super.apply(this, arguments);
		}

		_createClass(Link, [
			{
				key: 'render',
				value: function render() {
					var wrappedProps = wrapHandlers(
						this.props.pathProps,
						this.props.source.data[this.props.keyProp],
						this.props.target.data[this.props.keyProp]
					);
					var d = this.props.pathFunc(
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
				},
			},
		]);

		return Link;
	})(React.PureComponent);
	Link.defaultProps = defaultProps;
	Link.propTypes = propTypes;

	var propTypes$1 = {
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
		keyProp: PropTypes.string.isRequired,
		labelProp: PropTypes.string.isRequired,
		shape: PropTypes.string.isRequired,
		nodeProps: PropTypes.object.isRequired,
		gProps: PropTypes.object.isRequired,
		textProps: PropTypes.object.isRequired,
	};

	var Node = /*#__PURE__*/ (function (_React$PureComponent) {
		_inherits(Node, _React$PureComponent);

		var _super = _createSuper(Node);

		function Node() {
			_classCallCheck(this, Node);

			return _super.apply(this, arguments);
		}

		_createClass(Node, [
			{
				key: 'getTransform',
				value: function getTransform() {
					return 'translate('
						.concat(this.props.y, ', ')
						.concat(this.props.x, ')');
				},
			},
			{
				key: 'render',
				value: function render() {
					var offset = 0;
					var nodePropsWithDefaults = this.props.nodeProps;

					switch (this.props.shape) {
						case 'circle':
							nodePropsWithDefaults = _objectSpread2(
								{
									r: 5,
								},
								nodePropsWithDefaults
							);
							offset = nodePropsWithDefaults.r;
							break;

						case 'image':
						case 'rect':
							nodePropsWithDefaults = _objectSpread2(
								{
									height: 10,
									width: 10,
								},
								nodePropsWithDefaults
							);
							nodePropsWithDefaults = _objectSpread2(
								{
									x: -nodePropsWithDefaults.width / 2,
									y: -nodePropsWithDefaults.height / 2,
								},
								nodePropsWithDefaults
							);
							offset = nodePropsWithDefaults.width / 2;
							break;
					}

					var wrappedNodeProps = wrapHandlers(
						nodePropsWithDefaults,
						this.props[this.props.keyProp]
					);
					var wrappedGProps = wrapHandlers(
						this.props.gProps,
						this.props[this.props.keyProp]
					);
					var wrappedTextProps = wrapHandlers(
						this.props.textProps,
						this.props[this.props.keyProp]
					);
					return /*#__PURE__*/ React.createElement(
						'g',
						_extends({}, wrappedGProps, {
							transform: this.getTransform(),
						}),
						/*#__PURE__*/ React.createElement(
							this.props.shape,
							wrappedNodeProps
						),
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
				},
			},
		]);

		return Node;
	})(React.PureComponent);
	Node.propTypes = propTypes$1;

	var propTypes$2 = {
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

	var Container = /*#__PURE__*/ (function (_React$PureComponent) {
		_inherits(Container, _React$PureComponent);

		var _super = _createSuper(Container);

		function Container() {
			_classCallCheck(this, Container);

			return _super.apply(this, arguments);
		}

		_createClass(Container, [
			{
				key: 'render',
				value: function render() {
					var _this = this;

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
							this.props.links.map(function (link) {
								return /*#__PURE__*/ React.createElement(Link, {
									key: link.target.data[_this.props.keyProp],
									keyProp: _this.props.keyProp,
									pathFunc: _this.props.pathFunc,
									source: link.source,
									target: link.target,
									x1: link.source.x,
									x2: link.target.x,
									y1: link.source.y,
									y2: link.target.y,
									pathProps: _objectSpread2(
										_objectSpread2({}, _this.props.pathProps),
										link.target.data.pathProps
									),
								});
							}),
							this.props.nodes.map(function (node) {
								return /*#__PURE__*/ React.createElement(
									Node,
									_extends(
										{
											key: node.data[_this.props.keyProp],
											keyProp: _this.props.keyProp,
											labelProp: _this.props.labelProp,
											shape: _this.props.nodeShape,
											x: node.x,
											y: node.y,
											nodeProps: _objectSpread2(
												_objectSpread2({}, _this.props.nodeProps),
												node.data.nodeProps
											),
											gProps: _objectSpread2(
												_objectSpread2({}, _this.props.gProps),
												node.data.gProps
											),
											textProps: _objectSpread2(
												_objectSpread2({}, _this.props.textProps),
												node.data.textProps
											),
										},
										node.data
									)
								);
							})
						)
					);
				},
			},
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
		steps: PropTypes.number.isRequired,
	};

	var Animated = /*#__PURE__*/ (function (_React$PureComponent) {
		_inherits(Animated, _React$PureComponent);

		var _super = _createSuper(Animated);

		function Animated(props) {
			var _this;

			_classCallCheck(this, Animated);

			_this = _super.call(this, props);

			if (props.animated) {
				// If we are animating, we set the initial positions of the nodes and links to be the position of the root node
				// and animate from there
				var initialX = props.nodes[0].x;
				var initialY = props.nodes[0].y;
				_this.state = {
					nodes: props.nodes.map(function (n) {
						return _objectSpread2(
							_objectSpread2({}, n),
							{},
							{
								x: initialX,
								y: initialY,
							}
						);
					}),
					links: props.links.map(function (l) {
						return {
							source: _objectSpread2(
								_objectSpread2({}, l.source),
								{},
								{
									x: initialX,
									y: initialY,
								}
							),
							target: _objectSpread2(
								_objectSpread2({}, l.target),
								{},
								{
									x: initialX,
									y: initialY,
								}
							),
						};
					}),
				};
			} else {
				_this.state = {
					nodes: props.nodes,
					links: props.links,
				};
			}

			return _this;
		}

		_createClass(Animated, [
			{
				key: 'componentDidMount',
				value: function componentDidMount() {
					if (this.props.animated) {
						this.animate(this.props);
					}
				},
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
						this.setState({
							nodes: nextProps.nodes,
							links: nextProps.links,
						});
						return;
					}

					this.animate(nextProps);
				},
			},
			{
				key: 'animate',
				value: function animate(props) {
					var _this2 = this;

					// Stop previous animation if one is already in progress.  We will start the next animation
					// from the position we are currently in
					clearInterval(this.animation);
					var counter = 0; // Do as much one-time calculation outside of the animation step, which needs to be fast

					var animationContext = this.getAnimationContext(this.state, props);
					this.animation = setInterval(function () {
						counter++;

						if (counter === props.steps) {
							clearInterval(_this2.animation);
							_this2.animation = null;

							_this2.setState({
								nodes: props.nodes,
								links: props.links,
							});

							return;
						}

						_this2.setState(
							_this2.calculateNewState(animationContext, counter / props.steps)
						);
					}, props.duration / props.steps);
				},
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
						.filter(function (n1) {
							return initialState.nodes.every(function (n2) {
								return !_this3.areNodesSame(n1, n2);
							});
						})
						.map(function (n1) {
							return {
								base: n1,
								old: _this3.getClosestAncestor(n1, newState, initialState),
								new: n1,
							};
						});
					var changedNodes = newState.nodes
						.filter(function (n1) {
							return initialState.nodes.some(function (n2) {
								return _this3.areNodesSame(n1, n2);
							});
						})
						.map(function (n1) {
							return {
								base: n1,
								old: initialState.nodes.find(function (n2) {
									return _this3.areNodesSame(n1, n2);
								}),
								new: n1,
							};
						});
					var removedNodes = initialState.nodes
						.filter(function (n1) {
							return newState.nodes.every(function (n2) {
								return !_this3.areNodesSame(n1, n2);
							});
						})
						.map(function (n1) {
							return {
								base: n1,
								old: n1,
								new: _this3.getClosestAncestor(n1, initialState, newState),
							};
						});
					var addedLinks = newState.links
						.filter(function (l1) {
							return initialState.links.every(function (l2) {
								return !_this3.areLinksSame(l1, l2);
							});
						})
						.map(function (l1) {
							return {
								base: l1,
								old: _this3.getClosestAncestor(
									l1.target,
									newState,
									initialState
								),
								new: l1,
							};
						});
					var changedLinks = newState.links
						.filter(function (l1) {
							return initialState.links.some(function (l2) {
								return _this3.areLinksSame(l1, l2);
							});
						})
						.map(function (l1) {
							return {
								base: l1,
								old: initialState.links.find(function (l2) {
									return _this3.areLinksSame(l1, l2);
								}),
								new: l1,
							};
						});
					var removedLinks = initialState.links
						.filter(function (l1) {
							return newState.links.every(function (l2) {
								return !_this3.areLinksSame(l1, l2);
							});
						})
						.map(function (l1) {
							return {
								base: l1,
								old: l1,
								new: _this3.getClosestAncestor(
									l1.target,
									initialState,
									newState
								),
							};
						});
					return {
						nodes: changedNodes.concat(addedNodes).concat(removedNodes),
						links: changedLinks.concat(addedLinks).concat(removedLinks),
					};
				},
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
						var newParent = stateWithoutNode.nodes.find(function (n) {
							return _this4.areNodesSame(oldParent, n);
						});

						if (newParent) {
							return newParent;
						}

						oldParent = stateWithNode.nodes.find(function (n) {
							return (_this4.props.getChildren(n) || []).some(function (c) {
								return _this4.areNodesSame(oldParent, c);
							});
						});
					}

					return stateWithoutNode.nodes[0];
				},
			},
			{
				key: 'areNodesSame',
				value: function areNodesSame(a, b) {
					return a.data[this.props.keyProp] === b.data[this.props.keyProp];
				},
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
				},
			},
			{
				key: 'calculateNewState',
				value: function calculateNewState(animationContext, interval) {
					var _this5 = this;

					return {
						nodes: animationContext.nodes.map(function (n) {
							return _this5.calculateNodePosition(
								n.base,
								n.old,
								n['new'],
								interval
							);
						}),
						links: animationContext.links.map(function (l) {
							return _this5.calculateLinkPosition(
								l.base,
								l.old,
								l['new'],
								interval
							);
						}),
					};
				},
			},
			{
				key: 'calculateNodePosition',
				value: function calculateNodePosition(node, start, end, interval) {
					return _objectSpread2(
						_objectSpread2({}, node),
						{},
						{
							x: this.calculateNewValue(start.x, end.x, interval),
							y: this.calculateNewValue(start.y, end.y, interval),
						}
					);
				},
			},
			{
				key: 'calculateLinkPosition',
				value: function calculateLinkPosition(link, start, end, interval) {
					return {
						source: _objectSpread2(
							_objectSpread2({}, link.source),
							{},
							{
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
							}
						),
						target: _objectSpread2(
							_objectSpread2({}, link.target),
							{},
							{
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
							}
						),
					};
				},
			},
			{
				key: 'calculateNewValue',
				value: function calculateNewValue(start, end, interval) {
					return start + (end - start) * this.props.easing(interval);
				},
			},
			{
				key: 'render',
				value: function render() {
					return /*#__PURE__*/ React.createElement(
						Container,
						_extends({}, this.props, this.state)
					);
				},
			},
		]);

		return Animated;
	})(React.PureComponent);
	Animated.propTypes = propTypes$3;

	var propTypes$4 = {
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
	var defaultProps$1 = {
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
			top: 10,
		},
		nodeShape: 'circle',
		nodeProps: {},
		gProps: {},
		pathProps: {},
		svgProps: {},
		textProps: {},
	};

	var Tree = /*#__PURE__*/ (function (_React$PureComponent) {
		_inherits(Tree, _React$PureComponent);

		var _super = _createSuper(Tree);

		function Tree() {
			_classCallCheck(this, Tree);

			return _super.apply(this, arguments);
		}

		_createClass(Tree, [
			{
				key: 'render',
				value: function render() {
					var _this = this;

					var contentWidth =
						this.props.width -
						this.props.margins.left -
						this.props.margins.right;
					var contentHeight =
						this.props.height -
						this.props.margins.top -
						this.props.margins.bottom; // data is cloned because d3 will mutate the object passed in

					var data = d3Hierarchy.hierarchy(
						clone(this.props.data),
						this.props.getChildren
					);
					var root = d3Hierarchy.tree().size([contentHeight, contentWidth])(
						data
					);
					var nodes = root.descendants();
					var links = root.links();
					nodes.forEach(function (node) {
						node.y += _this.props.margins.top;
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
							gProps: _objectSpread2(
								{
									className: 'node',
								},
								this.props.gProps
							),
							pathProps: _objectSpread2(
								{
									className: 'link',
								},
								this.props.pathProps
							),
							svgProps: this.props.svgProps,
							textProps: this.props.textProps,
						},
						this.props.children
					);
				},
			},
		]);

		return Tree;
	})(React.PureComponent);
	Tree.propTypes = propTypes$4;
	Tree.defaultProps = defaultProps$1;

	return Tree;
});
