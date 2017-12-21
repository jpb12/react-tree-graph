(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("clone"), require("d3-ease"), require("d3-hierarchy"), require("prop-types"), require("core-js/fn/array/find"), require("core-js/fn/object/assign"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "clone", "d3-ease", "d3-hierarchy", "prop-types", "core-js/fn/array/find", "core-js/fn/object/assign"], factory);
	else if(typeof exports === 'object')
		exports["react-tree-graph"] = factory(require("react"), require("clone"), require("d3-ease"), require("d3-hierarchy"), require("prop-types"), require("core-js/fn/array/find"), require("core-js/fn/object/assign"));
	else
		root["react-tree-graph"] = factory(root["react"], root["clone"], root["d3-ease"], root["d3-hierarchy"], root["prop-types"], root["core-js/fn/array/find"], root["core-js/fn/object/assign"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Styles_style_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Styles_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Styles_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Components_tree__ = __webpack_require__(4);



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1__Components_tree__["a" /* default */]);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_clone__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_clone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_clone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_ease__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_ease___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3_ease__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_hierarchy__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_hierarchy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3_hierarchy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animated__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var propTypes = {
	data: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
	animated: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool.isRequired,
	duration: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired,
	easing: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func.isRequired,
	steps: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired,
	height: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired,
	keyProp: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired,
	labelProp: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired,
	getChildren: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func.isRequired,
	margins: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
		bottom: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired,
		left: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired,
		right: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired,
		top: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired
	}).isRequired,
	nodeOffset: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired,
	nodeRadius: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired,
	circleProps: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
	gProps: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
	pathProps: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
	svgProps: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
	textProps: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};

var defaultProps = {
	animated: false,
	duration: 500,
	easing: __WEBPACK_IMPORTED_MODULE_1_d3_ease__["easeQuadOut"],
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
			var data = Object(__WEBPACK_IMPORTED_MODULE_2_d3_hierarchy__["hierarchy"])(__WEBPACK_IMPORTED_MODULE_0_clone___default()(this.props.data), this.props.getChildren);

			var root = Object(__WEBPACK_IMPORTED_MODULE_2_d3_hierarchy__["tree"])().size([contentHeight, contentWidth])(data);
			var nodes = root.descendants();
			var links = root.links();

			nodes.forEach(function (node) {
				node.y += _this2.props.margins.top;
			});

			return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__animated__["a" /* default */], {
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
				textProps: this.props.textProps });
		}
	}]);

	return Tree;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (Tree);


Tree.propTypes = propTypes;
Tree.defaultProps = defaultProps;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_fn_array_find__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_fn_array_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_fn_array_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_fn_object_assign__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_fn_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_fn_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__container__ = __webpack_require__(11);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var propTypes = {
	animated: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool.isRequired,
	getChildren: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
	keyProp: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
	links: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array.isRequired,
	nodes: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array.isRequired,
	duration: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
	easing: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
	steps: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired
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
			return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__container__["a" /* default */], _extends({}, this.props, this.state));
		}
	}]);

	return Animated;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (Animated);


Animated.propTypes = propTypes;

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__link__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node__ = __webpack_require__(13);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var propTypes = {
	height: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number.isRequired,
	keyProp: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string.isRequired,
	labelProp: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string.isRequired,
	links: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.array.isRequired,
	nodes: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.array.isRequired,
	nodeClassName: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
	nodeOffset: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number.isRequired,
	nodeRadius: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number.isRequired,
	width: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number.isRequired,
	circleProps: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object.isRequired,
	gProps: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object.isRequired,
	pathProps: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object.isRequired,
	svgProps: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object.isRequired,
	textProps: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object.isRequired
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

			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				'svg',
				_extends({}, this.props.svgProps, { height: this.props.height, width: this.props.width }),
				this.props.links.map(function (link) {
					return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__link__["a" /* default */], {
						key: link.target.data[_this2.props.keyProp],
						keyProp: _this2.props.keyProp,
						source: link.source,
						target: link.target,
						x1: link.source.x,
						x2: link.target.x,
						y1: link.source.y,
						y2: link.target.y,
						pathProps: Object.assign({}, _this2.props.pathProps, link.target.data.pathProps) });
				}),
				this.props.nodes.map(function (node) {
					return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__node__["a" /* default */], _extends({
						key: node.data[_this2.props.keyProp],
						keyProp: _this2.props.keyProp,
						labelProp: _this2.props.labelProp,
						offset: _this2.props.nodeOffset,
						radius: _this2.props.nodeRadius,
						x: node.x,
						y: node.y,
						circleProps: Object.assign({}, _this2.props.circleProps, node.data.circleProps),
						gProps: Object.assign({}, _this2.props.gProps, node.data.gProps),
						textProps: Object.assign({}, _this2.props.textProps, node.data.textProps)
					}, node.data));
				})
			);
		}
	}]);

	return Container;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (Container);


Container.propTypes = propTypes;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var propTypes = {
	source: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object.isRequired,
	target: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object.isRequired,
	keyProp: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string.isRequired,
	x1: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number.isRequired,
	x2: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number.isRequired,
	y1: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number.isRequired,
	y2: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number.isRequired,
	pathProps: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object.isRequired
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
			this.props.pathProps.onClick && this.props.pathProps.onClick(this.props.source.data[this.props.keyProp], this.props.target.data[this.props.keyProp], event);
		}
	}, {
		key: 'render',
		value: function render() {
			var d = diagonal(this.props.x1, this.props.y1, this.props.x2, this.props.y2);

			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', _extends({}, this.props.pathProps, { d: d, onClick: this.handleClick }));
		}
	}]);

	return Link;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (Link);


Link.propTypes = propTypes;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var propTypes = {
	x: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number.isRequired,
	y: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number.isRequired,
	keyProp: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string.isRequired,
	labelProp: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string.isRequired,
	offset: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number.isRequired,
	radius: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number.isRequired,
	circleProps: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object.isRequired,
	gProps: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object.isRequired,
	textProps: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object.isRequired
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
			this.props.gProps.onClick && this.props.gProps.onClick(this.props[this.props.keyProp], event);
		}
	}, {
		key: 'getTransform',
		value: function getTransform() {
			return 'translate(' + this.props.y + ', ' + this.props.x + ')';
		}
	}, {
		key: 'render',
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				'g',
				_extends({}, this.props.gProps, { transform: this.getTransform(), onClick: this.handleClick }),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('circle', _extends({}, this.props.circleProps, { r: this.props.radius })),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					'text',
					_extends({}, this.props.textProps, { dx: this.props.radius + 0.5, dy: this.props.offset }),
					this.props[this.props.labelProp]
				)
			);
		}
	}]);

	return Node;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (Node);


Node.propTypes = propTypes;

/***/ })
/******/ ]);
});