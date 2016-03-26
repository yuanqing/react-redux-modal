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

},{"../src":5,"./modals":3,"./modals/confirmationModal":2,"react":"react","react-dom":"react-dom","react-redux":"react-redux","redux":"redux"}],2:[function(require,module,exports){
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
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

// Styles to make both `overlay` and `contentWrapper` fit the entire screen.
var style = {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
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
      var overlayClassName = _props.overlayClassName;
      var renderCloseButton = _props.renderCloseButton;
      var isVisible = _props.isVisible;
      var modalType = _props.modalType;
      var modalProps = _props.modalProps;
      var hasCloseButton = _props.hasCloseButton;
      var shouldHideOnOverlayClick = _props.shouldHideOnOverlayClick;
      var shouldHideOnEscapeKeyDown = _props.shouldHideOnEscapeKeyDown;
      var hideModal = _props.hideModal;
      var showModal = _props.showModal;

      var other = _objectWithoutProperties(_props, ['children', 'contentClassName', 'overlayClassName', 'renderCloseButton', 'isVisible', 'modalType', 'modalProps', 'hasCloseButton', 'shouldHideOnOverlayClick', 'shouldHideOnEscapeKeyDown', 'hideModal', 'showModal']);

      var cssTransitionGroup = _extends({
        component: 'div',
        transitionEnterTimeout: 500,
        transitionLeaveTimeout: 500,
        transitionName: {
          enter: 'enter',
          enterActive: 'enterActive',
          leave: 'leave',
          leaveActive: 'leaveActive'
        }
      }, other);

      var overlayProps = {
        className: overlayClassName,
        style: style
      };

      var contentWrapperProps = {
        onClick: shouldHideOnOverlayClick && this.hideOnOverlayClick,
        onKeyDown: shouldHideOnEscapeKeyDown && this.hideOnEscapeKeyDown,
        ref: 'contentWrapper',
        style: _extends({}, style, {
          overflow: 'auto'
        }),
        tabIndex: 1
      };

      var contentProps = {
        className: contentClassName
      };

      var modal = children[modalType];
      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        cssTransitionGroup,
        isVisible && modal && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('div', overlayProps),
          _react2.default.createElement(
            'div',
            contentWrapperProps,
            _react2.default.createElement(
              'div',
              contentProps,
              (0, _react.createElement)(modal, _extends({}, modalProps, {
                hideModal: hideModal,
                showModal: showModal
              })),
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
  overlayClassName: _react.PropTypes.string,
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
  overlayClassName: 'overlay',
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

},{"./redux":6,"react":"react","react-addons-css-transition-group":"react-addons-css-transition-group","react-redux":"react-redux"}],5:[function(require,module,exports){
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

},{"./Modal":4,"./redux":6}],6:[function(require,module,exports){
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
  hasCloseButton: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL2luZGV4LmpzIiwiZXhhbXBsZS9tb2RhbHMvY29uZmlybWF0aW9uTW9kYWwuanMiLCJleGFtcGxlL21vZGFscy9pbmRleC5qcyIsInNyYy9Nb2RhbC5qcyIsInNyYy9pbmRleC5qcyIsInNyYy9yZWR1eC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUNBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU0sVUFBVSw0QkFBZ0I7QUFDOUIsMEJBRDhCO0NBQWhCLENBQVY7QUFHTixJQUFNLFFBQVEsd0JBQVksT0FBWixDQUFSOztJQUVBOzs7Ozs7Ozs7Ozs2QkFLSztVQUNBLFlBQWEsS0FBSyxLQUFMLENBQWIsVUFEQTs7QUFFUCxVQUFNLFVBQVU7QUFDZCx3REFEYztBQUVkLG9CQUFZO0FBQ1YsaUJBQU8sS0FBUDtBQUNBLHVCQUFhLEtBQWI7U0FGRjtBQUlBLGtDQUEwQixJQUExQjtBQUNBLG1DQUEyQixJQUEzQjtPQVBJLENBRkM7QUFXUCxhQUNFOzs7UUFDRTs7WUFBSyxXQUFVLE1BQVYsRUFBTDtVQUNFOztjQUFRLFNBQVMsVUFBVSxJQUFWLENBQWUsSUFBZixFQUFxQixPQUFyQixDQUFULEVBQVI7O1dBREY7U0FERjtRQUlFOzs7O1NBSkY7T0FERixDQVhPOzs7O1NBTEw7OztLQUNHLFlBQVk7QUFDakIsYUFBVyxpQkFBVSxJQUFWOzs7O0FBeUJmLElBQU0sa0JBQWtCLFNBQWxCLGVBQWtCLEdBQU07QUFDNUIsU0FBTyxFQUFQLENBRDRCO0NBQU47QUFHeEIsSUFBTSxxQkFBcUI7QUFDekIsMkJBRHlCO0NBQXJCO0FBR04sSUFBTSxNQUFNLHlCQUFRLGVBQVIsRUFBeUIsa0JBQXpCLEVBQTZDLElBQTdDLENBQU47O0FBRU4sc0JBQ0U7O0lB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Q0EsYUFBVyxJQUFYO0FBQ0EsY0FBWSxFQUFaO0dBQ0csZ0JBSlE7O0FBT04sU0FBUyxZQUFULEdBQXlEO01BQW5DLDhEQUFRLDRCQUEyQjtNQUFiLCtEQUFTLGtCQUFJOztBQUM5RCxVQUFRLE9BQU8sSUFBUDtBQUNOLFNBQUssVUFBTDtBQUNFLDBCQUNLO0FBQ0gsbUJBQVcsS0FBWDtRQUZGLENBREY7QUFERixTQU1PLFVBQUw7QUFDRSwwQkFDSyxPQUFPLE9BQVA7QUFDSCxtQkFBVyxJQUFYO1FBRkYsQ0FERjtBQU5GO0FBWUksYUFBTyxLQUFQLENBREY7QUFYRixHQUQ4RDtDQUF6RDs7QUFpQkEsU0FBUyxTQUFULEdBQXFCO0FBQzFCLFNBQU87QUFDTCxVQUFNLFVBQU47R0FERixDQUQwQjtDQUFyQjs7QUFNQSxTQUFTLFNBQVQsT0FBMkQ7TUFBdkMsMkJBQXVDOzZCQUE1QixXQUE0QjtNQUE1Qiw2Q0FBYSxxQkFBZTs7TUFBUixvRUFBUTs7QUFDaEUsU0FBTztBQUNMLFVBQU0sVUFBTjtBQUNBLDBCQUNLLGlCQUNBO0FBQ0g7QUFDQTtNQUpGO0dBRkYsQ0FEZ0U7Q0FBM0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtQcm92aWRlciwgY29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCBNb2RhbCwge21vZGFsUmVkdWNlciwgc2hvd01vZGFsfSBmcm9tICcuLi9zcmMnO1xuaW1wb3J0IG1vZGFscyBmcm9tICcuL21vZGFscyc7XG5pbXBvcnQge0NPTkZJUk1BVElPTl9NT0RBTH0gZnJvbSAnLi9tb2RhbHMvY29uZmlybWF0aW9uTW9kYWwnO1xuXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgbW9kYWw6IG1vZGFsUmVkdWNlclxufSk7XG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzaG93TW9kYWw6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtzaG93TW9kYWx9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbW9kYWxUeXBlOiBDT05GSVJNQVRJT05fTU9EQUwsXG4gICAgICBtb2RhbFByb3BzOiB7XG4gICAgICAgIHRpdGxlOiAnZm9vJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdiYXInXG4gICAgICB9LFxuICAgICAgc2hvdWxkSGlkZU9uT3ZlcmxheUNsaWNrOiB0cnVlLFxuICAgICAgc2hvdWxkSGlkZU9uRXNjYXBlS2V5RG93bjogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd01vZGFsLmJpbmQobnVsbCwgb3B0aW9ucyl9PlNob3cgbW9kYWw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNb2RhbD57bW9kYWxzfTwvTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICgpID0+IHtcbiAgcmV0dXJuIHt9O1xufVxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBzaG93TW9kYWxcbn07XG5jb25zdCBBcHAgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYWluKTtcblxucmVuZGVyKChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPEFwcCAvPlxuICA8L1Byb3ZpZGVyPlxuKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcCcpKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7dGl0bGUsIGRlc2NyaXB0aW9ufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICA8ZGl2PntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgQ29uZmlybWF0aW9uTW9kYWwsIHtDT05GSVJNQVRJT05fTU9EQUx9IGZyb20gJy4vY29uZmlybWF0aW9uTW9kYWwnO1xuXG4vLyBNYXAgZWFjaCBgbW9kYWxUeXBlYCB0byB0aGUgY29ycmVzcG9uZGluZyBtb2RhbCBjb21wb25lbnQuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFtDT05GSVJNQVRJT05fTU9EQUxdOiBDb25maXJtYXRpb25Nb2RhbFxufTtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgY3JlYXRlRWxlbWVudCwgUHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0IHtoaWRlTW9kYWwsIHNob3dNb2RhbH0gZnJvbSAnLi9yZWR1eCc7XG5cbmNvbnN0IEVTQ0FQRV9LRVlDT0RFID0gMjc7XG5cbi8vIFN0eWxlcyB0byBtYWtlIGJvdGggYG92ZXJsYXlgIGFuZCBgY29udGVudFdyYXBwZXJgIGZpdCB0aGUgZW50aXJlIHNjcmVlbi5cbmNvbnN0IHN0eWxlID0ge1xuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgdG9wOiAwLFxuICByaWdodDogMCxcbiAgYm90dG9tOiAwLFxuICBsZWZ0OiAwXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcblxuICAgIC8vIDEuIEFUVFJJQlVURSBQUk9QU1xuICAgIC8vIEFuIG9iamVjdCB0aGF0IG1hcHMgZWFjaCBgbW9kYWxUeXBlYCB0byB0aGUgY29ycmVzcG9uZGluZyBtb2RhbCBjb21wb25lbnQuXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuZnVuYyksXG4gICAgLy8gQ2xhc3NlcyBmb3IgdGhlIHN1YmNvbXBvbmVudHMuXG4gICAgY29udGVudENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvdmVybGF5Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8vIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBgQ2xvc2VgIGJ1dHRvbiBjb21wb25lbnQuXG4gICAgcmVuZGVyQ2xvc2VCdXR0b246IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLy8gMi4gSU5KRUNURUQgUFJPUFNcbiAgICAvLyBXaGV0aGVyIHRoZSBtb2RhbCBpcyB2aXNpYmxlLlxuICAgIGlzVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAvLyBUaGUgbW9kYWwgdHlwZS4gV2lsbCBiZSBgbnVsbGAgaWYgbm8gbW9kYWwgaXMgYmVpbmcgcmVuZGVyZWQuXG4gICAgbW9kYWxUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8vIFByb3BzIHNwcmVhZCBvdmVyIHRoZSBjdXJyZW50IG1vZGFsIGNvbXBvbmVudCAoaWUuIG9uZSBvZiB0aGUgY29tcG9uZW50c1xuICAgIC8vIGluIGBjaGlsZHJlbmApLlxuICAgIG1vZGFsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAvLyBXaGV0aGVyIHRvIHJlbmRlciBhIGNsb3NlIGJ1dHRvbiAodXNpbmcgYHJlbmRlckNsb3NlQnV0dG9uYCkuXG4gICAgaGFzQ2xvc2VCdXR0b246IFByb3BUeXBlcy5ib29sLFxuICAgIC8vIFdoZXRoZXIgdG8gaGlkZSB0aGUgbW9kYWwgd2hlbiB0aGUgb3ZlcmxheSBpcyBjbGlja2VkLlxuICAgIHNob3VsZEhpZGVPbk92ZXJsYXlDbGljazogUHJvcFR5cGVzLmJvb2wsXG4gICAgLy8gV2hldGhlciB0byBoaWRlIHRoZSBtb2RhbCB3aGVuIHRoZSBgRXNjYCBrZXkgaXMgcHJlc3NlZC5cbiAgICBzaG91bGRIaWRlT25Fc2NhcGVLZXlEb3duOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvLyBEaXNwYXRjaCBhbiBhY3Rpb24gdG8gaGlkZSB0aGUgbW9kYWwuXG4gICAgaGlkZU1vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIC8vIERpc3BhdGNoIGFuIGFjdGlvbiB0byBzaG93IHRoZSBtb2RhbC5cbiAgICBzaG93TW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcblxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IFtdLFxuICAgIGNvbnRlbnRDbGFzc05hbWU6ICdjb250ZW50JyxcbiAgICBvdmVybGF5Q2xhc3NOYW1lOiAnb3ZlcmxheScsXG4gICAgcmVuZGVyQ2xvc2VCdXR0b246IChoaWRlTW9kYWwpID0+IHtcbiAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT1cImNsb3NlQnV0dG9uXCIgb25DbGljaz17aGlkZU1vZGFsfT5DbG9zZTwvYnV0dG9uPjtcbiAgICB9XG4gIH07XG5cbiAgLy8gSGlkZSB0aGUgbW9kYWwgaWYgdGhlIGBFc2NgIGtleSB3YXMgcHJlc3NlZC5cbiAgaGlkZU9uRXNjYXBlS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgdGhpcy5wcm9wcy5oaWRlTW9kYWwoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gSGlkZSB0aGUgbW9kYWwgaWYgdGhlIG92ZXJsYXkgd2FzIGNsaWNrZWQuXG4gIGhpZGVPbk92ZXJsYXlDbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMucmVmcy5jb250ZW50V3JhcHBlcikge1xuICAgICAgdGhpcy5wcm9wcy5oaWRlTW9kYWwoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVXBkYXRlIGBvdmVyZmxvd2Agb2YgYGRvY3VtZW50LmJvZHlgIGlmIG1vZGFsIHZpc2liaWxpdHkgaGFzIGNoYW5nZWQuXG4gIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgY29uc3Qge2lzVmlzaWJsZX0gPSBuZXh0UHJvcHM7XG4gICAgaWYgKGlzVmlzaWJsZSAhPT0gdGhpcy5wcm9wcy5pc1Zpc2libGUpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBpc1Zpc2libGUgPyAnaGlkZGVuJyA6IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgbW9kYWwgaXMgbm93IHZpc2libGUsIGBmb2N1c2AgaXQsIGVsc2UgYGJsdXJgIGl0LlxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5yZWZzLmNvbnRlbnRXcmFwcGVyW3RoaXMucHJvcHMuaXNWaXNpYmxlID8gJ2ZvY3VzJyA6ICdibHVyJ10oKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNvbnRlbnRDbGFzc05hbWUsXG4gICAgICBvdmVybGF5Q2xhc3NOYW1lLFxuICAgICAgcmVuZGVyQ2xvc2VCdXR0b24sXG4gICAgICBpc1Zpc2libGUsXG4gICAgICBtb2RhbFR5cGUsXG4gICAgICBtb2RhbFByb3BzLFxuICAgICAgaGFzQ2xvc2VCdXR0b24sXG4gICAgICBzaG91bGRIaWRlT25PdmVybGF5Q2xpY2ssXG4gICAgICBzaG91bGRIaWRlT25Fc2NhcGVLZXlEb3duLFxuICAgICAgaGlkZU1vZGFsLFxuICAgICAgc2hvd01vZGFsLFxuICAgICAgLi4ub3RoZXJcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNzc1RyYW5zaXRpb25Hcm91cCA9IHtcbiAgICAgIGNvbXBvbmVudDogJ2RpdicsXG4gICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0OiA1MDAsXG4gICAgICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0OiA1MDAsXG4gICAgICB0cmFuc2l0aW9uTmFtZToge1xuICAgICAgICBlbnRlcjogJ2VudGVyJyxcbiAgICAgICAgZW50ZXJBY3RpdmU6ICdlbnRlckFjdGl2ZScsXG4gICAgICAgIGxlYXZlOiAnbGVhdmUnLFxuICAgICAgICBsZWF2ZUFjdGl2ZTogJ2xlYXZlQWN0aXZlJ1xuICAgICAgfSxcbiAgICAgIC4uLm90aGVyXG4gICAgfTtcblxuICAgIGNvbnN0IG92ZXJsYXlQcm9wcyA9IHtcbiAgICAgIGNsYXNzTmFtZTogb3ZlcmxheUNsYXNzTmFtZSxcbiAgICAgIHN0eWxlXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyUHJvcHMgPSB7XG4gICAgICBvbkNsaWNrOiBzaG91bGRIaWRlT25PdmVybGF5Q2xpY2sgJiYgdGhpcy5oaWRlT25PdmVybGF5Q2xpY2ssXG4gICAgICBvbktleURvd246IHNob3VsZEhpZGVPbkVzY2FwZUtleURvd24gJiYgdGhpcy5oaWRlT25Fc2NhcGVLZXlEb3duLFxuICAgICAgcmVmOiAnY29udGVudFdyYXBwZXInLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgIG92ZXJmbG93OiAnYXV0bydcbiAgICAgIH0sXG4gICAgICB0YWJJbmRleDogMVxuICAgIH07XG5cbiAgICBjb25zdCBjb250ZW50UHJvcHMgPSB7XG4gICAgICBjbGFzc05hbWU6IGNvbnRlbnRDbGFzc05hbWVcbiAgICB9O1xuXG4gICAgY29uc3QgbW9kYWwgPSBjaGlsZHJlblttb2RhbFR5cGVdO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgey4uLmNzc1RyYW5zaXRpb25Hcm91cH0+XG4gICAgICAgIHtpc1Zpc2libGUgJiYgbW9kYWwgJiZcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiB7Li4ub3ZlcmxheVByb3BzfSAvPlxuICAgICAgICAgICAgPGRpdiB7Li4uY29udGVudFdyYXBwZXJQcm9wc30+XG4gICAgICAgICAgICAgIDxkaXYgey4uLmNvbnRlbnRQcm9wc30+XG4gICAgICAgICAgICAgICAge2NyZWF0ZUVsZW1lbnQobW9kYWwsIHtcbiAgICAgICAgICAgICAgICAgIC4uLm1vZGFsUHJvcHMsXG4gICAgICAgICAgICAgICAgICBoaWRlTW9kYWwsXG4gICAgICAgICAgICAgICAgICBzaG93TW9kYWxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICB7aGFzQ2xvc2VCdXR0b24gJiYgcmVuZGVyQ2xvc2VCdXR0b24oaGlkZU1vZGFsKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj59XG4gICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiBzdGF0ZS5tb2RhbDtcbn07XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGhpZGVNb2RhbCxcbiAgc2hvd01vZGFsXG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTW9kYWwpO1xuIiwiaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnO1xuXG5leHBvcnQgKiBmcm9tICcuL3JlZHV4JztcbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIiwiZXhwb3J0IGNvbnN0IEhJREVfTU9EQUwgPSAnbW9kYWwvSElERV9NT0RBTCc7XG5leHBvcnQgY29uc3QgU0hPV19NT0RBTCA9ICdtb2RhbC9TSE9XX01PREFMJztcblxuY29uc3QgZGVmYXVsdFNldHRpbmdzID0ge1xuICBzaG91bGRIaWRlT25PdmVybGF5Q2xpY2s6IGZhbHNlLFxuICBzaG91bGRIaWRlT25Fc2NhcGVLZXlEb3duOiBmYWxzZSxcbiAgaGFzQ2xvc2VCdXR0b246IGZhbHNlXG59O1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc1Zpc2libGU6IGZhbHNlLFxuICBtb2RhbFR5cGU6IG51bGwsXG4gIG1vZGFsUHJvcHM6IHt9LFxuICAuLi5kZWZhdWx0U2V0dGluZ3Ncbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtb2RhbFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEhJREVfTU9EQUw6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNWaXNpYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICBjYXNlIFNIT1dfTU9EQUw6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgaXNWaXNpYmxlOiB0cnVlXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVNb2RhbCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBISURFX01PREFMXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93TW9kYWwoe21vZGFsVHlwZSwgbW9kYWxQcm9wcyA9IHt9LCAuLi5vdGhlcn0pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTSE9XX01PREFMLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIC4uLmRlZmF1bHRTZXR0aW5ncyxcbiAgICAgIC4uLm90aGVyLFxuICAgICAgbW9kYWxUeXBlLFxuICAgICAgbW9kYWxQcm9wc1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==
