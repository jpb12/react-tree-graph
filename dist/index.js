(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("clone"), require("d3"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["clone", "d3", "react"], factory);
	else if(typeof exports === 'object')
		exports["react-tree-graph"] = factory(require("clone"), require("d3"), require("react"));
	else
		root["react-tree-graph"] = factory(root["clone"], root["d3"], root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************!*\
  !*** ./Components/tree.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _clone = __webpack_require__(/*! clone */ 1);
	
	var _clone2 = _interopRequireDefault(_clone);
	
	var _d = __webpack_require__(/*! d3 */ 2);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _link = __webpack_require__(/*! ./link */ 4);
	
	var _link2 = _interopRequireDefault(_link);
	
	var _node = __webpack_require__(/*! ./node */ 5);
	
	var _node2 = _interopRequireDefault(_node);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
		data: _react2.default.PropTypes.object.isRequired,
		height: _react2.default.PropTypes.number.isRequired,
		width: _react2.default.PropTypes.number.isRequired,
		keyProp: _react2.default.PropTypes.string.isRequired,
		labelProp: _react2.default.PropTypes.string.isRequired,
		linkClass: _react2.default.PropTypes.string,
		linkClickHandler: _react2.default.PropTypes.func,
		margins: _react2.default.PropTypes.shape({
			bottom: _react2.default.PropTypes.number.isRequired,
			left: _react2.default.PropTypes.number.isRequired,
			right: _react2.default.PropTypes.number.isRequired,
			top: _react2.default.PropTypes.number.isRequired
		}).isRequired,
		nodeClass: _react2.default.PropTypes.string,
		nodeClickHandler: _react2.default.PropTypes.func,
		nodeOffset: _react2.default.PropTypes.number,
		nodeRadius: _react2.default.PropTypes.number
	};
	
	var defaultProps = {
		keyProp: 'name',
		labelProp: 'name',
		margins: {
			bottom: 10,
			left: 20,
			right: 150,
			top: 10
		}
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
				var data = (0, _clone2.default)(this.props.data);
	
				var tree = _d2.default.layout.tree().size([contentHeight, contentWidth]);
				var nodes = tree.nodes(data);
	
				nodes.forEach(function (node) {
					node.y += _this2.props.margins.top;
				});
	
				var links = tree.links(nodes);
	
				return _react2.default.createElement(
					'svg',
					{ height: this.props.height, width: this.props.width },
					links.map(function (link) {
						return _react2.default.createElement(_link2.default, _extends({
							key: link.target[_this2.props.keyProp],
							className: _this2.props.linkClass,
							keyProp: _this2.props.keyProp,
							onClick: _this2.props.linkClickHandler
						}, link));
					}),
					nodes.map(function (node) {
						return _react2.default.createElement(_node2.default, _extends({
							key: node[_this2.props.keyProp],
							className: _this2.props.nodeClass,
							keyProp: _this2.props.keyProp,
							labelProp: _this2.props.labelProp,
							onClick: _this2.props.nodeClickHandler,
							offset: _this2.props.nodeOffset,
							radius: _this2.props.nodeRadius
						}, node));
					})
				);
			}
		}]);
	
		return Tree;
	}(_react2.default.PureComponent);
	
	exports.default = Tree;
	
	
	Tree.propTypes = propTypes;
	Tree.defaultProps = defaultProps;

/***/ },
/* 1 */
/*!************************!*\
  !*** external "clone" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/*!****************************!*\
  !*** ./Components/link.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _d = __webpack_require__(/*! d3 */ 2);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
		source: _react2.default.PropTypes.object.isRequired,
		target: _react2.default.PropTypes.object.isRequired,
		className: _react2.default.PropTypes.string,
		keyProp: _react2.default.PropTypes.string.isRequired,
		onClick: _react2.default.PropTypes.func
	};
	
	var defaultProps = {
		className: 'link'
	};
	
	var diagonal = _d2.default.svg.diagonal().projection(function (d) {
		return [d.y, d.x];
	});
	
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
			value: function handleClick() {
				this.props.onClick && this.props.onClick(this.props.source[this.props.keyProp], this.props.target[this.props.keyProp]);
			}
		}, {
			key: 'render',
			value: function render() {
				var d = diagonal({
					source: this.props.source,
					target: this.props.target
				});
	
				return _react2.default.createElement('path', { className: this.props.className, d: d, onClick: this.handleClick });
			}
		}]);
	
		return Link;
	}(_react2.default.PureComponent);
	
	exports.default = Link;
	
	
	Link.propTypes = propTypes;
	Link.defaultProps = defaultProps;

/***/ },
/* 5 */
/*!****************************!*\
  !*** ./Components/node.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
		x: _react2.default.PropTypes.number.isRequired,
		y: _react2.default.PropTypes.number.isRequired,
		className: _react2.default.PropTypes.string,
		keyProp: _react2.default.PropTypes.string.isRequired,
		labelProp: _react2.default.PropTypes.string.isRequired,
		onClick: _react2.default.PropTypes.func,
		offset: _react2.default.PropTypes.number.isRequired,
		radius: _react2.default.PropTypes.number.isRequired
	};
	
	var defaultProps = {
		className: 'node',
		offset: 3.5,
		radius: 5
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
			value: function handleClick() {
				this.props.onClick && this.props.onClick(this.props[this.props.keyProp]);
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
	Node.defaultProps = defaultProps;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map