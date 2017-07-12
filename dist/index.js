(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"), require("clone"), require("core-js/fn/array/find"), require("core-js/fn/object/assign"), require("d3-ease"), require("d3-hierarchy"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react", "clone", "core-js/fn/array/find", "core-js/fn/object/assign", "d3-ease", "d3-hierarchy"], factory);
	else if(typeof exports === 'object')
		exports["react-tree-graph"] = factory(require("prop-types"), require("react"), require("clone"), require("core-js/fn/array/find"), require("core-js/fn/object/assign"), require("d3-ease"), require("d3-hierarchy"));
	else
		root["react-tree-graph"] = factory(root["prop-types"], root["react"], root["clone"], root["core-js/fn/array/find"], root["core-js/fn/object/assign"], root["d3-ease"], root["d3-hierarchy"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clone = __webpack_require__(9);

var _clone2 = _interopRequireDefault(_clone);

var _d3Ease = __webpack_require__(12);

var _d3Hierarchy = __webpack_require__(13);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _animated = __webpack_require__(4);

var _animated2 = _interopRequireDefault(_animated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
	data: _propTypes2.default.object.isRequired,
	animated: _propTypes2.default.bool.isRequired,
	duration: _propTypes2.default.number.isRequired,
	easing: _propTypes2.default.func.isRequired,
	steps: _propTypes2.default.number.isRequired,
	height: _propTypes2.default.number.isRequired,
	width: _propTypes2.default.number.isRequired,
	keyProp: _propTypes2.default.string.isRequired,
	labelProp: _propTypes2.default.string.isRequired,
	getChildren: _propTypes2.default.func.isRequired,
	treeClassName: _propTypes2.default.string,
	treeClickHandler: _propTypes2.default.func,
	linkClassName: _propTypes2.default.string,
	linkClickHandler: _propTypes2.default.func,
	margins: _propTypes2.default.shape({
		bottom: _propTypes2.default.number.isRequired,
		left: _propTypes2.default.number.isRequired,
		right: _propTypes2.default.number.isRequired,
		top: _propTypes2.default.number.isRequired
	}).isRequired,
	nodeClassName: _propTypes2.default.string,
	nodeClickHandler: _propTypes2.default.func,
	nodeOffset: _propTypes2.default.number.isRequired,
	nodeRadius: _propTypes2.default.number.isRequired
};

var defaultProps = {
	animated: false,
	duration: 500,
	easing: _d3Ease.easeQuadOut,
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
	linkClassName: 'link',
	nodeClassName: 'node',
	nodeOffset: 3.5,
	nodeRadius: 5
};

var Tree = function (_React$PureComponent) {
	_inherits(Tree, _React$PureComponent);

	function Tree() {
		_classCallCheck(this, Tree);

		return _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).apply(this, arguments));
	}

	_createClass(Tree, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var contentWidth = this.props.width - this.props.margins.left - this.props.margins.right;
			var contentHeight = this.props.height - this.props.margins.top - this.props.margins.bottom;

			// data is cloned because d3 will mutate the object passed in
			var data = (0, _d3Hierarchy.hierarchy)((0, _clone2.default)(this.props.data), this.props.getChildren);

			var root = (0, _d3Hierarchy.tree)().size([contentHeight, contentWidth])(data);
			var nodes = root.descendants();
			var links = root.links();

			nodes.forEach(function (node) {
				node.y += _this2.props.margins.top;
			});

			return _react2.default.createElement(_animated2.default, {
				animated: this.props.animated,
				duration: this.props.duration,
				easing: this.props.easing,
				getChildren: this.props.getChildren,
				height: this.props.height,
				keyProp: this.props.keyProp,
				labelProp: this.props.labelProp,
				links: links,
				linkClassName: this.props.linkClassName,
				linkClickHandler: this.props.linkClickHandler,
				nodes: nodes,
				nodeClassName: this.props.nodeClassName,
				nodeClickHandler: this.props.nodeClickHandler,
				nodeOffset: this.props.nodeOffset,
				nodeRadius: this.props.nodeRadius,
				steps: this.props.steps,
				treeClassName: this.props.treeClassName,
				treeClickHandler: this.props.treeClickHandler,
				width: this.props.width });
		}
	}]);

	return Tree;
}(_react2.default.PureComponent);

exports.default = Tree;


Tree.propTypes = propTypes;
Tree.defaultProps = defaultProps;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(10);

__webpack_require__(11);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _container = __webpack_require__(5);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
	animated: _propTypes2.default.bool.isRequired,
	getChildren: _propTypes2.default.func.isRequired,
	keyProp: _propTypes2.default.string.isRequired,
	links: _propTypes2.default.array.isRequired,
	nodes: _propTypes2.default.array.isRequired,
	duration: _propTypes2.default.number.isRequired,
	easing: _propTypes2.default.func.isRequired,
	steps: _propTypes2.default.number.isRequired
};

var Animated = function (_React$PureComponent) {
	_inherits(Animated, _React$PureComponent);

	function Animated(props) {
		_classCallCheck(this, Animated);

		var _this = _possibleConstructorReturn(this, (Animated.__proto__ || Object.getPrototypeOf(Animated)).call(this, props));

		if (props.animated) {
			// If we are animating, we set the initial positions of the nodes and links to be the position of the root node
			// and animate from there
			var initialX = props.nodes[0].x;
			var initialY = props.nodes[0].y;
			_this.state = {
				nodes: props.nodes.map(function (n) {
					return Object.assign({}, n, { x: initialX, y: initialY });
				}),
				links: props.links.map(function (l) {
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

	_createClass(Animated, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.animated) {
				this.animate(this.props);
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.nodes === this.props.nodes && nextProps.links === this.props.links) {
				return;
			}

			if (!nextProps.animated) {
				this.setState({ nodes: nextProps.nodes, links: nextProps.links });
				return;
			}

			this.animate(nextProps);
		}
	}, {
		key: 'animate',
		value: function animate(props) {
			var _this2 = this;

			// Stop previous animation if one is already in progress.  We will start the next animation
			// from the position we are currently in
			clearInterval(this.animation);

			var counter = 0;

			// Do as much one-time calculation outside of the animation step, which needs to be fast
			var animationContext = this.getAnimationContext(this.state, props);

			this.animation = setInterval(function () {
				counter++;

				if (counter === props.steps) {
					clearInterval(_this2.animation);
					_this2.animation = null;
					_this2.setState({ nodes: props.nodes, links: props.links });
					return;
				}

				_this2.setState(_this2.calculateNewState(animationContext, counter / props.steps));
			}, props.duration / props.steps);
		}
	}, {
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
			var addedNodes = newState.nodes.filter(function (n1) {
				return initialState.nodes.every(function (n2) {
					return !_this3.areNodesSame(n1, n2);
				});
			}).map(function (n1) {
				return { base: n1, old: _this3.getClosestAncestor(n1, newState, initialState), new: n1 };
			});
			var changedNodes = newState.nodes.filter(function (n1) {
				return initialState.nodes.some(function (n2) {
					return _this3.areNodesSame(n1, n2);
				});
			}).map(function (n1) {
				return { base: n1, old: initialState.nodes.find(function (n2) {
						return _this3.areNodesSame(n1, n2);
					}), new: n1 };
			});
			var removedNodes = initialState.nodes.filter(function (n1) {
				return newState.nodes.every(function (n2) {
					return !_this3.areNodesSame(n1, n2);
				});
			}).map(function (n1) {
				return { base: n1, old: n1, new: _this3.getClosestAncestor(n1, initialState, newState) };
			});

			var addedLinks = newState.links.filter(function (l1) {
				return initialState.links.every(function (l2) {
					return !_this3.areLinksSame(l1, l2);
				});
			}).map(function (l1) {
				return { base: l1, old: _this3.getClosestAncestor(l1.target, newState, initialState), new: l1 };
			});
			var changedLinks = newState.links.filter(function (l1) {
				return initialState.links.some(function (l2) {
					return _this3.areLinksSame(l1, l2);
				});
			}).map(function (l1) {
				return { base: l1, old: initialState.links.find(function (l2) {
						return _this3.areLinksSame(l1, l2);
					}), new: l1 };
			});
			var removedLinks = initialState.links.filter(function (l1) {
				return newState.links.every(function (l2) {
					return !_this3.areLinksSame(l1, l2);
				});
			}).map(function (l1) {
				return { base: l1, old: l1, new: _this3.getClosestAncestor(l1.target, initialState, newState) };
			});

			return {
				nodes: changedNodes.concat(addedNodes).concat(removedNodes),
				links: changedLinks.concat(addedLinks).concat(removedLinks)
			};
		}
	}, {
		key: 'getClosestAncestor',
		value: function getClosestAncestor(node, stateWithNode, stateWithoutNode) {
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
		}
	}, {
		key: 'areNodesSame',
		value: function areNodesSame(a, b) {
			return a.data[this.props.keyProp] === b.data[this.props.keyProp];
		}
	}, {
		key: 'areLinksSame',
		value: function areLinksSame(a, b) {
			return a.source.data[this.props.keyProp] === b.source.data[this.props.keyProp] && a.target.data[this.props.keyProp] === b.target.data[this.props.keyProp];
		}
	}, {
		key: 'calculateNewState',
		value: function calculateNewState(animationContext, interval) {
			var _this5 = this;

			return {
				nodes: animationContext.nodes.map(function (n) {
					return _this5.calculateNodePosition(n.base, n.old, n.new, interval);
				}),
				links: animationContext.links.map(function (l) {
					return _this5.calculateLinkPosition(l.base, l.old, l.new, interval);
				})
			};
		}
	}, {
		key: 'calculateNodePosition',
		value: function calculateNodePosition(node, start, end, interval) {
			return Object.assign({}, node, {
				x: this.calculateNewValue(start.x, end.x, interval),
				y: this.calculateNewValue(start.y, end.y, interval)
			});
		}
	}, {
		key: 'calculateLinkPosition',
		value: function calculateLinkPosition(link, start, end, interval) {
			return {
				source: Object.assign({}, link.source, {
					x: this.calculateNewValue(start.source ? start.source.x : start.x, end.source ? end.source.x : end.x, interval),
					y: this.calculateNewValue(start.source ? start.source.y : start.y, end.source ? end.source.y : end.y, interval)
				}),
				target: Object.assign({}, link.target, {
					x: this.calculateNewValue(start.target ? start.target.x : start.x, end.target ? end.target.x : end.x, interval),
					y: this.calculateNewValue(start.target ? start.target.y : start.y, end.target ? end.target.y : end.y, interval)
				})
			};
		}
	}, {
		key: 'calculateNewValue',
		value: function calculateNewValue(start, end, interval) {
			return start + (end - start) * this.props.easing(interval);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_container2.default, _extends({}, this.props, this.state));
		}
	}]);

	return Animated;
}(_react2.default.PureComponent);

exports.default = Animated;


Animated.propTypes = propTypes;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(6);

var _link2 = _interopRequireDefault(_link);

var _node = __webpack_require__(7);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
	height: _propTypes2.default.number.isRequired,
	keyProp: _propTypes2.default.string.isRequired,
	labelProp: _propTypes2.default.string.isRequired,
	links: _propTypes2.default.array.isRequired,
	linkClassName: _propTypes2.default.string,
	linkClickHandler: _propTypes2.default.func,
	nodes: _propTypes2.default.array.isRequired,
	nodeClassName: _propTypes2.default.string,
	nodeClickHandler: _propTypes2.default.func,
	nodeOffset: _propTypes2.default.number.isRequired,
	nodeRadius: _propTypes2.default.number.isRequired,
	treeClassName: _propTypes2.default.string,
	treeClickHandler: _propTypes2.default.func,
	width: _propTypes2.default.number.isRequired
};

var Container = function (_React$PureComponent) {
	_inherits(Container, _React$PureComponent);

	function Container() {
		_classCallCheck(this, Container);

		return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
	}

	_createClass(Container, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'svg',
				{
					className: this.props.treeClassName,
					onClick: this.props.treeClickHandler,
					height: this.props.height,
					width: this.props.width },
				this.props.links.map(function (link) {
					return _react2.default.createElement(_link2.default, _extends({
						key: link.target.data[_this2.props.keyProp],
						className: _this2.props.linkClassName,
						keyProp: _this2.props.keyProp,
						onClick: _this2.props.linkClickHandler,
						source: link.source,
						target: link.target,
						x1: link.source.x,
						x2: link.target.x,
						y1: link.source.y,
						y2: link.target.y
					}, link.data));
				}),
				this.props.nodes.map(function (node) {
					return _react2.default.createElement(_node2.default, _extends({
						key: node.data[_this2.props.keyProp],
						className: _this2.props.nodeClassName,
						keyProp: _this2.props.keyProp,
						labelProp: _this2.props.labelProp,
						onClick: _this2.props.nodeClickHandler,
						offset: _this2.props.nodeOffset,
						radius: _this2.props.nodeRadius,
						x: node.x,
						y: node.y
					}, node.data));
				})
			);
		}
	}]);

	return Container;
}(_react2.default.PureComponent);

exports.default = Container;


Container.propTypes = propTypes;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
	source: _propTypes2.default.object.isRequired,
	target: _propTypes2.default.object.isRequired,
	className: _propTypes2.default.string,
	keyProp: _propTypes2.default.string.isRequired,
	onClick: _propTypes2.default.func,
	x1: _propTypes2.default.number.isRequired,
	x2: _propTypes2.default.number.isRequired,
	y1: _propTypes2.default.number.isRequired,
	y2: _propTypes2.default.number.isRequired
};

function diagonal(x1, y1, x2, y2) {
	return 'M' + y1 + ',' + x1 + 'C' + (y1 + y2) / 2 + ',' + x1 + ' ' + (y1 + y2) / 2 + ',' + x2 + ' ' + y2 + ',' + x2;
}

var Link = function (_React$PureComponent) {
	_inherits(Link, _React$PureComponent);

	function Link(props) {
		_classCallCheck(this, Link);

		var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	_createClass(Link, [{
		key: 'handleClick',
		value: function handleClick(event) {
			this.props.onClick && this.props.onClick(this.props.source.data[this.props.keyProp], this.props.target.data[this.props.keyProp], event);
		}
	}, {
		key: 'render',
		value: function render() {
			var d = diagonal(this.props.x1, this.props.y1, this.props.x2, this.props.y2);

			return _react2.default.createElement('path', { className: this.props.className, d: d, onClick: this.handleClick });
		}
	}]);

	return Link;
}(_react2.default.PureComponent);

exports.default = Link;


Link.propTypes = propTypes;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
	x: _propTypes2.default.number.isRequired,
	y: _propTypes2.default.number.isRequired,
	className: _propTypes2.default.string,
	keyProp: _propTypes2.default.string.isRequired,
	labelProp: _propTypes2.default.string.isRequired,
	onClick: _propTypes2.default.func,
	offset: _propTypes2.default.number.isRequired,
	radius: _propTypes2.default.number.isRequired
};

var Node = function (_React$PureComponent) {
	_inherits(Node, _React$PureComponent);

	function Node(props) {
		_classCallCheck(this, Node);

		var _this = _possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this, props));

		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	_createClass(Node, [{
		key: 'handleClick',
		value: function handleClick(event) {
			this.props.onClick && this.props.onClick(this.props[this.props.keyProp], event);
		}
	}, {
		key: 'getTransform',
		value: function getTransform() {
			return 'translate(' + this.props.y + ', ' + this.props.x + ')';
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'g',
				{ className: this.props.className, transform: this.getTransform(), onClick: this.handleClick },
				_react2.default.createElement('circle', { r: this.props.radius }),
				_react2.default.createElement(
					'text',
					{ dx: this.props.radius + 0.5, dy: this.props.offset },
					this.props[this.props.labelProp]
				)
			);
		}
	}]);

	return Node;
}(_react2.default.PureComponent);

exports.default = Node;


Node.propTypes = propTypes;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(3);

var _tree = __webpack_require__(2);

var _tree2 = _interopRequireDefault(_tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tree2.default;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ })
/******/ ]);
});