var Sorting =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Sortable = function (_React$Component) {
	    _inherits(Sortable, _React$Component);

	    function Sortable(args) {
	        _classCallCheck(this, Sortable);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Sortable).call(this, args));

	        _this.state = { children: _this.getChildren(), dragging: null };
	        return _this;
	    }

	    _createClass(Sortable, [{
	        key: 'handleMove',
	        value: function handleMove(child) {
	            var _state = this.state;
	            var children = _state.children;
	            var dragging = _state.dragging;

	            var pos1 = children.indexOf(dragging);
	            var pos2 = children.indexOf(child);

	            if (pos1 === -1 || pos2 === -1) {
	                ev.preventDefault();
	                return false;
	            }

	            children.splice(pos1, 1);

	            children = [].concat(children.slice(0, pos2), dragging, children.slice(pos2));

	            this.setState({ children: children });
	        }
	    }, {
	        key: 'startMoving',
	        value: function startMoving(ev, child) {
	            var children = this.state.children;

	            var dragging = child;

	            ev.dataTransfer.effectAllowed = 'move';
	            ev.dataTransfer.setData('element', dragging);

	            this.setState({ children: children, dragging: dragging });
	        }
	    }, {
	        key: 'cloneElement',
	        value: function cloneElement(oldChild) {
	            var _this2 = this;

	            var key = oldChild.props.key || "$k" + Math.random();
	            var child = _react2.default.cloneElement(oldChild, {
	                draggable: true,
	                onDragOver: function onDragOver(ev) {
	                    return _this2.handleMove(child);
	                },
	                onDragStart: function onDragStart(ev) {
	                    return _this2.startMoving(ev, child);
	                }
	            });
	            return child;
	        }
	    }, {
	        key: 'getChildren',
	        value: function getChildren() {
	            var _this3 = this;

	            return _react2.default.Children.toArray(this.props.children).map(function (child) {
	                return _this3.cloneElement(child);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this4 = this;

	            return _react2.default.createElement(
	                'div',
	                { onDragOver: function onDragOver(e) {
	                        return e.preventDefault();
	                    }, onDrop: function onDrop(ev) {
	                        _this4.setState({ dragging: null });
	                        if (_this4.props.onChange) {
	                            _this4.props.onChange(_this4.state.children);
	                        }
	                    } },
	                this.state.children
	            );
	        }
	    }]);

	    return Sortable;
	}(_react2.default.Component);

	exports.default = Sortable;


	Sortable.propTypes = {
	    onChange: _react2.default.PropTypes.func
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ }
/******/ ]);