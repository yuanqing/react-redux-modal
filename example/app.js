(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _src = require('../src');

var _src2 = _interopRequireDefault(_src);

var _modals = require('./modals');

var _modals2 = _interopRequireDefault(_modals);

var _confirmationModal = require('./modals/confirmationModal');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reducer = (0, _redux.combineReducers)({
  modal: _src.modalReducer
});
var store = (0, _redux.createStore)(reducer);

var Main = function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      var showModal = this.props.showModal;

      var options = {
        modalType: _confirmationModal.CONFIRMATION_MODAL,
        modalProps: {
          title: 'foo',
          description: 'bar'
        },
        isMiddleAligned: true,
        shouldHideOnOverlayClick: true,
        shouldHideOnEscapeKeyDown: true
      };
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'main' },
          _react2.default.createElement(
            'button',
            { onClick: showModal.bind(null, options) },
            'Show modal'
          )
        ),
        _react2.default.createElement(
          _src2.default,
          null,
          _modals2.default
        )
      );
    }
  }]);

  return Main;
}(_react.Component);

Main.propTypes = {
  showModal: _react.PropTypes.func
};


var mapStateToProps = function mapStateToProps() {
  return {};
};
var mapDispatchToProps = {
  showModal: _src.showModal
};
var App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Main);

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(App, null)
), document.querySelector('.app'));

},{"../src":6,"./modals":3,"./modals/confirmationModal":2,"react":"react","react-dom":"react-dom","react-redux":"react-redux","redux":"redux"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var title = _ref.title;
  var description = _ref.description;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      title
    ),
    _react2.default.createElement(
      'div',
      null,
      description
    )
  );
};

},{"react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _confirmationModal = require('./confirmationModal');

var _confirmationModal2 = _interopRequireDefault(_confirmationModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Map each `modalType` to the corresponding modal component.
exports.default = _defineProperty({}, _confirmationModal.CONFIRMATION_MODAL, _confirmationModal2.default);

},{"./confirmationModal":2}],4:[function(require,module,exports){
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _redux = require('./redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ESCAPE_KEYCODE = 27;

var cssTransitionGroupDefaultProps = {
  component: 'div',
  transitionEnterTimeout: 500,
  transitionLeaveTimeout: 500,
  transitionName: {
    enter: 'enter',
    enterActive: 'enterActive',
    leave: 'leave',
    leaveActive: 'leaveActive'
  }
};

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Modal)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.hideOnEscapeKeyDown = function (event) {
      if (event.keyCode === ESCAPE_KEYCODE) {
        _this.props.hideModal();
      }
    }, _this.hideOnOverlayClick = function (event) {
      if (event.target === _this.refs.contentWrapper) {
        _this.props.hideModal();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // Hide the modal if the `Esc` key was pressed.


  // Hide the modal if the overlay was clicked.


  _createClass(Modal, [{
    key: 'componentWillUpdate',


    // Update `overflow` of `document.body` if modal visibility has changed.
    value: function componentWillUpdate(nextProps) {
      var isVisible = nextProps.isVisible;

      if (isVisible !== this.props.isVisible) {
        document.body.style.overflow = isVisible ? 'hidden' : null;
      }
    }

    // If modal is now visible, `focus` it, else `blur` it.

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.refs.contentWrapper[this.props.isVisible ? 'focus' : 'blur']();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var contentClassName = _props.contentClassName;
      var contentWrapperClassName = _props.contentWrapperClassName;
      var overlayClassName = _props.overlayClassName;
      var middleAlignedClassName = _props.middleAlignedClassName;
      var renderCloseButton = _props.renderCloseButton;
      var isVisible = _props.isVisible;
      var modalType = _props.modalType;
      var modalProps = _props.modalProps;
      var hasCloseButton = _props.hasCloseButton;
      var isMiddleAligned = _props.isMiddleAligned;
      var shouldHideOnOverlayClick = _props.shouldHideOnOverlayClick;
      var shouldHideOnEscapeKeyDown = _props.shouldHideOnEscapeKeyDown;
      var hideModal = _props.hideModal;
      var showModal = _props.showModal;

      var other = _objectWithoutProperties(_props, ['children', 'contentClassName', 'contentWrapperClassName', 'overlayClassName', 'middleAlignedClassName', 'renderCloseButton', 'isVisible', 'modalType', 'modalProps', 'hasCloseButton', 'isMiddleAligned', 'shouldHideOnOverlayClick', 'shouldHideOnEscapeKeyDown', 'hideModal', 'showModal']);

      var cssTransitionGroupProps = _extends({}, cssTransitionGroupDefaultProps, other);

      var contentWrapperProps = {
        className: (0, _classnames2.default)(contentWrapperClassName, isMiddleAligned && middleAlignedClassName),
        onClick: shouldHideOnOverlayClick && this.hideOnOverlayClick,
        onKeyDown: shouldHideOnEscapeKeyDown && this.hideOnEscapeKeyDown,
        ref: 'contentWrapper',
        tabIndex: 1
      };

      var modal = children[modalType];
      var props = _extends({}, modalProps, {
        hideModal: hideModal,
        showModal: showModal
      });

      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        cssTransitionGroupProps,
        isVisible && modal && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('div', { className: overlayClassName }),
          _react2.default.createElement(
            'div',
            contentWrapperProps,
            _react2.default.createElement(
              'div',
              { className: contentClassName },
              (0, _react.createElement)(modal, props),
              hasCloseButton && renderCloseButton(hideModal)
            )
          )
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {

  // 1. ATTRIBUTE PROPS
  // An object that maps each `modalType` to the corresponding modal component.
  children: _react.PropTypes.objectOf(_react.PropTypes.func),
  // Classes for the subcomponents.
  contentClassName: _react.PropTypes.string,
  contentWrapperClassName: _react.PropTypes.string,
  overlayClassName: _react.PropTypes.string,
  middleAlignedClassName: _react.PropTypes.string,
  // A function that returns the `Close` button component.
  renderCloseButton: _react.PropTypes.func,

  // 2. INJECTED PROPS
  // Whether the modal is visible.
  isVisible: _react.PropTypes.bool.isRequired,
  // The modal type. Will be `null` if no modal is being rendered.
  modalType: _react.PropTypes.string,
  // Props spread over the current modal component (ie. one of the components
  // in `children`).
  modalProps: _react.PropTypes.object.isRequired,
  // Whether to render a close button (using `renderCloseButton`).
  hasCloseButton: _react.PropTypes.bool,
  // Whether to middle-align the modal.
  isMiddleAligned: _react.PropTypes.bool,
  // Whether to hide the modal when the overlay is clicked.
  shouldHideOnOverlayClick: _react.PropTypes.bool,
  // Whether to hide the modal when the `Esc` key is pressed.
  shouldHideOnEscapeKeyDown: _react.PropTypes.bool,
  // Dispatch an action to hide the modal.
  hideModal: _react.PropTypes.func.isRequired,
  // Dispatch an action to show the modal.
  showModal: _react.PropTypes.func.isRequired

};
Modal.defaultProps = {
  children: [],
  contentClassName: 'content',
  contentWrapperClassName: 'contentWrapper',
  overlayClassName: 'overlay',
  middleAlignedClassName: 'middleAligned',
  renderCloseButton: function renderCloseButton(hideModal) {
    return _react2.default.createElement(
      'button',
      { className: 'closeButton', onClick: hideModal },
      'Close'
    );
  }
};
exports.default = Modal;


var mapStateToProps = function mapStateToProps(state) {
  return state.modal;
};
var mapDispatchToProps = {
  hideModal: _redux.hideModal,
  showModal: _redux.showModal
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Modal);

},{"./redux":7,"classnames":4,"react":"react","react-addons-css-transition-group":"react-addons-css-transition-group","react-redux":"react-redux"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('./redux');

Object.keys(_redux).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _redux[key];
    }
  });
});

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Modal2.default;

},{"./Modal":5,"./redux":7}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.modalReducer = modalReducer;
exports.hideModal = hideModal;
exports.showModal = showModal;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var HIDE_MODAL = exports.HIDE_MODAL = 'modal/HIDE_MODAL';
var SHOW_MODAL = exports.SHOW_MODAL = 'modal/SHOW_MODAL';

var defaultSettings = {
  shouldHideOnOverlayClick: false,
  shouldHideOnEscapeKeyDown: false,
  hasCloseButton: false,
  isMiddleAligned: false
};

var initialState = exports.initialState = _extends({
  isVisible: false,
  modalType: null,
  modalProps: {}
}, defaultSettings);

function modalReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  switch (action.type) {
    case HIDE_MODAL:
      return _extends({}, state, {
        isVisible: false
      });
    case SHOW_MODAL:
      return _extends({}, action.payload, {
        isVisible: true
      });
    default:
      return state;
  }
}

function hideModal() {
  return {
    type: HIDE_MODAL
  };
}

function showModal(_ref) {
  var modalType = _ref.modalType;
  var _ref$modalProps = _ref.modalProps;
  var modalProps = _ref$modalProps === undefined ? {} : _ref$modalProps;

  var other = _objectWithoutProperties(_ref, ['modalType', 'modalProps']);

  return {
    type: SHOW_MODAL,
    payload: _extends({}, defaultSettings, other, {
      modalType: modalType,
      modalProps: modalProps
    })
  };
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL2luZGV4LmpzIiwiZXhhbXBsZS9tb2RhbHMvY29uZmlybWF0aW9uTW9kYWwuanMiLCJleGFtcGxlL21vZGFscy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwic3JjL01vZGFsLmpzIiwic3JjL2luZGV4LmpzIiwic3JjL3JlZHV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0FBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxVQUFVLDRCQUFnQjtBQUM5QiwwQkFEOEI7Q0FBaEIsQ0FBVjtBQUdOLElBQU0sUUFBUSx3QkFBWSxPQUFaLENBQVI7O0lBRUE7Ozs7Ozs7Ozs7OzZCQUtLO1VBQ0EsWUFBYSxLQUFLLEtBQUwsQ0FBYixVQURBOztBQUVQLFVBQU0sVUFBVTtBQUNkLHdEQURjO0FBRWQsb0JBQVk7QUFDVixpQkFBTyxLQUFQO0FBQ0EsdUJBQWEsS0FBYjtTQUZGO0FBSUEseUJBQWlCLElBQWpCO0FBQ0Esa0NBQTBCLElBQTFCO0FBQ0EsbUNBQTJCLElBQTNCO09BUkksQ0FGQztBQVlQLGFBQ0U7OztRQUNFOztZQUFLLFdBQVUsTUFBVixFQUFMO1VBQ0U7O2NBQVEsU0FBUyxVQUFVLElBQVYsQ0FBZSxJQUFmLEVBQXFCLE9BQXJCLENBQVQsRUFBUjs7V0FERjtTQURGO1FBSUU7Ozs7U0FKRjtPQURGLENBWk87Ozs7U0FMTDs7O0tBQ0csWUFBWTtBQUNqQixhQUFXLGlCQUFVLElBQVY7Ozs7QUEwQmYsSUFBTSxrQkFBa0IsU0FBbEIsZUFBa0IsR0FBTTtBQUM1QixTQUFPLEVBQVAsQ0FENEI7Q0FBTjtBQUd4QixJQUFNLHFCQUFxQjtBQUN6QiwyQkFEeUI7Q0FBckI7QUFHTixJQUFNLE1BQU0seUJB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OiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgUHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7UHJvdmlkZXIsIGNvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgTW9kYWwsIHttb2RhbFJlZHVjZXIsIHNob3dNb2RhbH0gZnJvbSAnLi4vc3JjJztcbmltcG9ydCBtb2RhbHMgZnJvbSAnLi9tb2RhbHMnO1xuaW1wb3J0IHtDT05GSVJNQVRJT05fTU9EQUx9IGZyb20gJy4vbW9kYWxzL2NvbmZpcm1hdGlvbk1vZGFsJztcblxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIG1vZGFsOiBtb2RhbFJlZHVjZXJcbn0pO1xuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKTtcblxuY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc2hvd01vZGFsOiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7c2hvd01vZGFsfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIG1vZGFsVHlwZTogQ09ORklSTUFUSU9OX01PREFMLFxuICAgICAgbW9kYWxQcm9wczoge1xuICAgICAgICB0aXRsZTogJ2ZvbycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnYmFyJ1xuICAgICAgfSxcbiAgICAgIGlzTWlkZGxlQWxpZ25lZDogdHJ1ZSxcbiAgICAgIHNob3VsZEhpZGVPbk92ZXJsYXlDbGljazogdHJ1ZSxcbiAgICAgIHNob3VsZEhpZGVPbkVzY2FwZUtleURvd246IHRydWVcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dNb2RhbC5iaW5kKG51bGwsIG9wdGlvbnMpfT5TaG93IG1vZGFsPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TW9kYWw+e21vZGFsc308L01vZGFsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoKSA9PiB7XG4gIHJldHVybiB7fTtcbn1cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgc2hvd01vZGFsXG59O1xuY29uc3QgQXBwID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWFpbik7XG5cbnJlbmRlcigoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxBcHAgLz5cbiAgPC9Qcm92aWRlcj5cbiksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAnKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoe3RpdGxlLCBkZXNjcmlwdGlvbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgPGRpdj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IENvbmZpcm1hdGlvbk1vZGFsLCB7Q09ORklSTUFUSU9OX01PREFMfSBmcm9tICcuL2NvbmZpcm1hdGlvbk1vZGFsJztcblxuLy8gTWFwIGVhY2ggYG1vZGFsVHlwZWAgdG8gdGhlIGNvcnJlc3BvbmRpbmcgbW9kYWwgY29tcG9uZW50LlxuZXhwb3J0IGRlZmF1bHQge1xuICBbQ09ORklSTUFUSU9OX01PREFMXTogQ29uZmlybWF0aW9uTW9kYWxcbn07XG4iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVFbGVtZW50LCBQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCc7XG5pbXBvcnQge2hpZGVNb2RhbCwgc2hvd01vZGFsfSBmcm9tICcuL3JlZHV4JztcblxuY29uc3QgRVNDQVBFX0tFWUNPREUgPSAyNztcblxuY29uc3QgY3NzVHJhbnNpdGlvbkdyb3VwRGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnQ6ICdkaXYnLFxuICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0OiA1MDAsXG4gIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ6IDUwMCxcbiAgdHJhbnNpdGlvbk5hbWU6IHtcbiAgICBlbnRlcjogJ2VudGVyJyxcbiAgICBlbnRlckFjdGl2ZTogJ2VudGVyQWN0aXZlJyxcbiAgICBsZWF2ZTogJ2xlYXZlJyxcbiAgICBsZWF2ZUFjdGl2ZTogJ2xlYXZlQWN0aXZlJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuXG4gICAgLy8gMS4gQVRUUklCVVRFIFBST1BTXG4gICAgLy8gQW4gb2JqZWN0IHRoYXQgbWFwcyBlYWNoIGBtb2RhbFR5cGVgIHRvIHRoZSBjb3JyZXNwb25kaW5nIG1vZGFsIGNvbXBvbmVudC5cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5mdW5jKSxcbiAgICAvLyBDbGFzc2VzIGZvciB0aGUgc3ViY29tcG9uZW50cy5cbiAgICBjb250ZW50Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbnRlbnRXcmFwcGVyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG92ZXJsYXlDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbWlkZGxlQWxpZ25lZENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvLyBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgYENsb3NlYCBidXR0b24gY29tcG9uZW50LlxuICAgIHJlbmRlckNsb3NlQnV0dG9uOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8vIDIuIElOSkVDVEVEIFBST1BTXG4gICAgLy8gV2hldGhlciB0aGUgbW9kYWwgaXMgdmlzaWJsZS5cbiAgICBpc1Zpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgLy8gVGhlIG1vZGFsIHR5cGUuIFdpbGwgYmUgYG51bGxgIGlmIG5vIG1vZGFsIGlzIGJlaW5nIHJlbmRlcmVkLlxuICAgIG1vZGFsVHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvLyBQcm9wcyBzcHJlYWQgb3ZlciB0aGUgY3VycmVudCBtb2RhbCBjb21wb25lbnQgKGllLiBvbmUgb2YgdGhlIGNvbXBvbmVudHNcbiAgICAvLyBpbiBgY2hpbGRyZW5gKS5cbiAgICBtb2RhbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgLy8gV2hldGhlciB0byByZW5kZXIgYSBjbG9zZSBidXR0b24gKHVzaW5nIGByZW5kZXJDbG9zZUJ1dHRvbmApLlxuICAgIGhhc0Nsb3NlQnV0dG9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvLyBXaGV0aGVyIHRvIG1pZGRsZS1hbGlnbiB0aGUgbW9kYWwuXG4gICAgaXNNaWRkbGVBbGlnbmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvLyBXaGV0aGVyIHRvIGhpZGUgdGhlIG1vZGFsIHdoZW4gdGhlIG92ZXJsYXkgaXMgY2xpY2tlZC5cbiAgICBzaG91bGRIaWRlT25PdmVybGF5Q2xpY2s6IFByb3BUeXBlcy5ib29sLFxuICAgIC8vIFdoZXRoZXIgdG8gaGlkZSB0aGUgbW9kYWwgd2hlbiB0aGUgYEVzY2Aga2V5IGlzIHByZXNzZWQuXG4gICAgc2hvdWxkSGlkZU9uRXNjYXBlS2V5RG93bjogUHJvcFR5cGVzLmJvb2wsXG4gICAgLy8gRGlzcGF0Y2ggYW4gYWN0aW9uIHRvIGhpZGUgdGhlIG1vZGFsLlxuICAgIGhpZGVNb2RhbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAvLyBEaXNwYXRjaCBhbiBhY3Rpb24gdG8gc2hvdyB0aGUgbW9kYWwuXG4gICAgc2hvd01vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG5cbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBbXSxcbiAgICBjb250ZW50Q2xhc3NOYW1lOiAnY29udGVudCcsXG4gICAgY29udGVudFdyYXBwZXJDbGFzc05hbWU6ICdjb250ZW50V3JhcHBlcicsXG4gICAgb3ZlcmxheUNsYXNzTmFtZTogJ292ZXJsYXknLFxuICAgIG1pZGRsZUFsaWduZWRDbGFzc05hbWU6ICdtaWRkbGVBbGlnbmVkJyxcbiAgICByZW5kZXJDbG9zZUJ1dHRvbjogKGhpZGVNb2RhbCkgPT4ge1xuICAgICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPVwiY2xvc2VCdXR0b25cIiBvbkNsaWNrPXtoaWRlTW9kYWx9PkNsb3NlPC9idXR0b24+O1xuICAgIH1cbiAgfTtcblxuICAvLyBIaWRlIHRoZSBtb2RhbCBpZiB0aGUgYEVzY2Aga2V5IHdhcyBwcmVzc2VkLlxuICBoaWRlT25Fc2NhcGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICB0aGlzLnByb3BzLmhpZGVNb2RhbCgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBIaWRlIHRoZSBtb2RhbCBpZiB0aGUgb3ZlcmxheSB3YXMgY2xpY2tlZC5cbiAgaGlkZU9uT3ZlcmxheUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5yZWZzLmNvbnRlbnRXcmFwcGVyKSB7XG4gICAgICB0aGlzLnByb3BzLmhpZGVNb2RhbCgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBVcGRhdGUgYG92ZXJmbG93YCBvZiBgZG9jdW1lbnQuYm9keWAgaWYgbW9kYWwgdmlzaWJpbGl0eSBoYXMgY2hhbmdlZC5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7aXNWaXNpYmxlfSA9IG5leHRQcm9wcztcbiAgICBpZiAoaXNWaXNpYmxlICE9PSB0aGlzLnByb3BzLmlzVmlzaWJsZSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGlzVmlzaWJsZSA/ICdoaWRkZW4nIDogbnVsbDtcbiAgICB9XG4gIH1cblxuICAvLyBJZiBtb2RhbCBpcyBub3cgdmlzaWJsZSwgYGZvY3VzYCBpdCwgZWxzZSBgYmx1cmAgaXQuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLnJlZnMuY29udGVudFdyYXBwZXJbdGhpcy5wcm9wcy5pc1Zpc2libGUgPyAnZm9jdXMnIDogJ2JsdXInXSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY29udGVudENsYXNzTmFtZSxcbiAgICAgIGNvbnRlbnRXcmFwcGVyQ2xhc3NOYW1lLFxuICAgICAgb3ZlcmxheUNsYXNzTmFtZSxcbiAgICAgIG1pZGRsZUFsaWduZWRDbGFzc05hbWUsXG4gICAgICByZW5kZXJDbG9zZUJ1dHRvbixcbiAgICAgIGlzVmlzaWJsZSxcbiAgICAgIG1vZGFsVHlwZSxcbiAgICAgIG1vZGFsUHJvcHMsXG4gICAgICBoYXNDbG9zZUJ1dHRvbixcbiAgICAgIGlzTWlkZGxlQWxpZ25lZCxcbiAgICAgIHNob3VsZEhpZGVPbk92ZXJsYXlDbGljayxcbiAgICAgIHNob3VsZEhpZGVPbkVzY2FwZUtleURvd24sXG4gICAgICBoaWRlTW9kYWwsXG4gICAgICBzaG93TW9kYWwsXG4gICAgICAuLi5vdGhlclxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY3NzVHJhbnNpdGlvbkdyb3VwUHJvcHMgPSB7XG4gICAgICAuLi5jc3NUcmFuc2l0aW9uR3JvdXBEZWZhdWx0UHJvcHMsXG4gICAgICAuLi5vdGhlclxuICAgIH07XG5cbiAgICBjb25zdCBjb250ZW50V3JhcHBlclByb3BzID0ge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc25hbWVzKFxuICAgICAgICBjb250ZW50V3JhcHBlckNsYXNzTmFtZSxcbiAgICAgICAgaXNNaWRkbGVBbGlnbmVkICYmIG1pZGRsZUFsaWduZWRDbGFzc05hbWVcbiAgICAgICksXG4gICAgICBvbkNsaWNrOiBzaG91bGRIaWRlT25PdmVybGF5Q2xpY2sgJiYgdGhpcy5oaWRlT25PdmVybGF5Q2xpY2ssXG4gICAgICBvbktleURvd246IHNob3VsZEhpZGVPbkVzY2FwZUtleURvd24gJiYgdGhpcy5oaWRlT25Fc2NhcGVLZXlEb3duLFxuICAgICAgcmVmOiAnY29udGVudFdyYXBwZXInLFxuICAgICAgdGFiSW5kZXg6IDFcbiAgICB9O1xuXG4gICAgY29uc3QgbW9kYWwgPSBjaGlsZHJlblttb2RhbFR5cGVdO1xuICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgLi4ubW9kYWxQcm9wcyxcbiAgICAgIGhpZGVNb2RhbCxcbiAgICAgIHNob3dNb2RhbFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIHsuLi5jc3NUcmFuc2l0aW9uR3JvdXBQcm9wc30+XG4gICAgICAgIHtpc1Zpc2libGUgJiYgbW9kYWwgJiZcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e292ZXJsYXlDbGFzc05hbWV9IC8+XG4gICAgICAgICAgICA8ZGl2IHsuLi5jb250ZW50V3JhcHBlclByb3BzfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRlbnRDbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIHtjcmVhdGVFbGVtZW50KG1vZGFsLCBwcm9wcyl9XG4gICAgICAgICAgICAgICAge2hhc0Nsb3NlQnV0dG9uICYmIHJlbmRlckNsb3NlQnV0dG9uKGhpZGVNb2RhbCl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+fVxuICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25Hcm91cD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4gc3RhdGUubW9kYWw7XG59O1xuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBoaWRlTW9kYWwsXG4gIHNob3dNb2RhbFxufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1vZGFsKTtcbiIsImltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJztcblxuZXhwb3J0ICogZnJvbSAnLi9yZWR1eCc7XG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiIsImV4cG9ydCBjb25zdCBISURFX01PREFMID0gJ21vZGFsL0hJREVfTU9EQUwnO1xuZXhwb3J0IGNvbnN0IFNIT1dfTU9EQUwgPSAnbW9kYWwvU0hPV19NT0RBTCc7XG5cbmNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IHtcbiAgc2hvdWxkSGlkZU9uT3ZlcmxheUNsaWNrOiBmYWxzZSxcbiAgc2hvdWxkSGlkZU9uRXNjYXBlS2V5RG93bjogZmFsc2UsXG4gIGhhc0Nsb3NlQnV0dG9uOiBmYWxzZSxcbiAgaXNNaWRkbGVBbGlnbmVkOiBmYWxzZVxufTtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNWaXNpYmxlOiBmYWxzZSxcbiAgbW9kYWxUeXBlOiBudWxsLFxuICBtb2RhbFByb3BzOiB7fSxcbiAgLi4uZGVmYXVsdFNldHRpbmdzXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbW9kYWxSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBISURFX01PREFMOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzVmlzaWJsZTogZmFsc2VcbiAgICAgIH07XG4gICAgY2FzZSBTSE9XX01PREFMOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIGlzVmlzaWJsZTogdHJ1ZVxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlTW9kYWwoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogSElERV9NT0RBTFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd01vZGFsKHttb2RhbFR5cGUsIG1vZGFsUHJvcHMgPSB7fSwgLi4ub3RoZXJ9KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0hPV19NT0RBTCxcbiAgICBwYXlsb2FkOiB7XG4gICAgICAuLi5kZWZhdWx0U2V0dGluZ3MsXG4gICAgICAuLi5vdGhlcixcbiAgICAgIG1vZGFsVHlwZSxcbiAgICAgIG1vZGFsUHJvcHNcbiAgICB9XG4gIH07XG59XG4iXX0=
