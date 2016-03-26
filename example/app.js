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

      var modalType = _confirmationModal.CONFIRMATION_MODAL;
      var dataProps = {
        title: 'foo',
        description: 'bar'
      };
      var settingsProps = {
        shouldHideOnOverlayClick: true,
        shouldHideOnEscapeKeyDown: true,
        hasCloseButton: true
      };
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'main' },
          _react2.default.createElement(
            'button',
            { onClick: showModal.bind(null, modalType, dataProps, settingsProps) },
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
      var dataProps = _props.dataProps;
      var settingsProps = _props.settingsProps;
      var hideModal = _props.hideModal;
      var showModal = _props.showModal;
      var hasCloseButton = settingsProps.hasCloseButton;
      var shouldHideOnOverlayClick = settingsProps.shouldHideOnOverlayClick;
      var shouldHideOnEscapeKeyDown = settingsProps.shouldHideOnEscapeKeyDown;

      var otherSettingsProps = _objectWithoutProperties(settingsProps, ['hasCloseButton', 'shouldHideOnOverlayClick', 'shouldHideOnEscapeKeyDown']);

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
      }, otherSettingsProps);

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

      var modalProps = _extends({}, dataProps, {
        hideModal: hideModal,
        showModal: showModal
      });

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
              (0, _react.createElement)(modal, modalProps),
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
  // 1. Attribute props
  // An object that maps each `modalType` to the corresponding modal component.
  children: _react.PropTypes.objectOf(_react.PropTypes.func),
  // Classes for the subcomponents.
  contentClassName: _react.PropTypes.string,
  overlayClassName: _react.PropTypes.string,
  // A function that returns the `Close` button component.
  renderCloseButton: _react.PropTypes.func,

  // 2. Injected props
  // Whether the modal is visible.
  isVisible: _react.PropTypes.bool.isRequired,
  // The modal type. Will be `null` if no modal is being rendered.
  modalType: _react.PropTypes.string,
  // Props spread over the current modal component (ie. one of the components
  // in `children`).
  dataProps: _react.PropTypes.object.isRequired,
  // For customising the component behaviour.
  settingsProps: _react.PropTypes.shape({
    hasCloseButton: _react.PropTypes.bool,
    shouldHideOnOverlayClick: _react.PropTypes.bool,
    shouldHideOnEscapeKeyDown: _react.PropTypes.bool
  }).isRequired,
  // For dispatching actions to show and hide the modal.
  hideModal: _react.PropTypes.func.isRequired,
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
var HIDE_MODAL = exports.HIDE_MODAL = 'modal/HIDE_MODAL';
var SHOW_MODAL = exports.SHOW_MODAL = 'modal/SHOW_MODAL';

var initialState = exports.initialState = {
  isVisible: false,
  modalType: null,
  dataProps: {},
  settingsProps: {}
};

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

function showModal(modalType) {
  var dataProps = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var settingsProps = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  return {
    type: SHOW_MODAL,
    payload: {
      modalType: modalType,
      dataProps: dataProps,
      settingsProps: _extends({
        shouldHideOnOverlayClick: true,
        shouldHideOnEscapeKeyDown: true,
        hasCloseButton: true
      }, settingsProps)
    }
  };
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL2luZGV4LmpzIiwiZXhhbXBsZS9tb2RhbHMvY29uZmlybWF0aW9uTW9kYWwuanMiLCJleGFtcGxlL21vZGFscy9pbmRleC5qcyIsInNyYy9Nb2RhbC5qcyIsInNyYy9pbmRleC5qcyIsInNyYy9yZWR1eC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUNBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU0sVUFBVSw0QkFBZ0I7QUFDOUIsMEJBRDhCO0NBQWhCLENBQVY7QUFHTixJQUFNLFFBQVEsd0JBQVksT0FBWixDQUFSOztJQUVBOzs7Ozs7Ozs7Ozs2QkFLSztVQUNBLFlBQWEsS0FBSyxLQUFMLENBQWIsVUFEQTs7QUFFUCxVQUFNLGlEQUFOLENBRk87QUFHUCxVQUFNLFlBQVk7QUFDaEIsZUFBTyxLQUFQO0FBQ0EscUJBQWEsS0FBYjtPQUZJLENBSEM7QUFPUCxVQUFNLGdCQUFnQjtBQUNwQixrQ0FBMEIsSUFBMUI7QUFDQSxtQ0FBMkIsSUFBM0I7QUFDQSx3QkFBZ0IsSUFBaEI7T0FISSxDQVBDO0FBWVAsYUFDRTs7O1FBQ0U7O1lBQUssV0FBVSxNQUFWLEVBQUw7VUFDRTs7Y0FBUSxTQUFTLFVBQVUsSUFBVixDQUFlLElBQWYsRUFBcUIsU0FBckIsRUFBZ0MsU0FBaEMsRUFBMkMsYUFBM0MsQ0FBVCxFQUFSOztXQURGO1NBREY7UUFJRTs7OztTQUpGO09BREYsQ0FaTzs7OztTQUxMOzs7S0FDRyxZQUFZO0FBQ2pCLGFBQVcsaUJBQVUsSUFBVjs7OztBQTBCZixJQUFNLGtCQUFrQixTQUFsQixlQUFrQixHQUFNO0FBQzVCLFNBQU8sRUFBUCxDQUQ0QjtDQUFOO0FBR3hCLElBQU0scUJBQXFCO0FBQ3pCLDJCQUR5QjtDQUFyQjtBQUdOLElB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Ozs7Ozs7Ozs7Ozs7OztRQ1VnQjtRQWlCQTtRQU1BO0FBakNULElBQU0sa0NBQWEsa0JBQWI7QUFDTixJQUFNLGtDQUFhLGtCQUFiOztBQUVOLElBQU0sc0NBQWU7QUFDMUIsYUFBVyxLQUFYO0FBQ0EsYUFBVyxJQUFYO0FBQ0EsYUFBVyxFQUFYO0FBQ0EsaUJBQWUsRUFBZjtDQUpXOztBQU9OLFNBQVMsWUFBVCxHQUF5RDtNQUFuQyw4REFBUSw0QkFBMkI7TUFBYiwrREFBUyxrQkFBSTs7QUFDOUQsVUFBUSxPQUFPLElBQVA7QUFDTixTQUFLLFVBQUw7QUFDRSwwQkFDSztBQUNILG1CQUFXLEtBQVg7UUFGRixDQURGO0FBREYsU0FNTyxVQUFMO0FBQ0UsMEJBQ0ssT0FBTyxPQUFQO0FBQ0gsbUJBQVcsSUFBWDtRQUZGLENBREY7QUFORjtBQVlJLGFBQU8sS0FBUCxDQURGO0FBWEYsR0FEOEQ7Q0FBekQ7O0FBaUJBLFNBQVMsU0FBVCxHQUFxQjtBQUMxQixTQUFPO0FBQ0wsVUFBTSxVQUFOO0dBREYsQ0FEMEI7Q0FBckI7O0FBTUEsU0FBUyxTQUFULENBQW1CLFNBQW5CLEVBQWtFO01BQXBDLGtFQUFZLGtCQUF3QjtNQUFwQixzRUFBZ0Isa0JBQUk7O0FBQ3ZFLFNBQU87QUFDTCxVQUFNLFVBQU47QUFDQSxhQUFTO0FBQ1AsMEJBRE87QUFFUCwwQkFGTztBQUdQO0FBQ0Usa0NBQTBCLElBQTFCO0FBQ0EsbUNBQTJCLElBQTNCO0FBQ0Esd0JBQWdCLElBQWhCO1NBQ0csY0FKTDtLQUhGO0dBRkYsQ0FEdUU7Q0FBbEUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtQcm92aWRlciwgY29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCBNb2RhbCwge21vZGFsUmVkdWNlciwgc2hvd01vZGFsfSBmcm9tICcuLi9zcmMnO1xuaW1wb3J0IG1vZGFscyBmcm9tICcuL21vZGFscyc7XG5pbXBvcnQge0NPTkZJUk1BVElPTl9NT0RBTH0gZnJvbSAnLi9tb2RhbHMvY29uZmlybWF0aW9uTW9kYWwnO1xuXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgbW9kYWw6IG1vZGFsUmVkdWNlclxufSk7XG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzaG93TW9kYWw6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtzaG93TW9kYWx9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtb2RhbFR5cGUgPSBDT05GSVJNQVRJT05fTU9EQUw7XG4gICAgY29uc3QgZGF0YVByb3BzID0ge1xuICAgICAgdGl0bGU6ICdmb28nLFxuICAgICAgZGVzY3JpcHRpb246ICdiYXInXG4gICAgfTtcbiAgICBjb25zdCBzZXR0aW5nc1Byb3BzID0ge1xuICAgICAgc2hvdWxkSGlkZU9uT3ZlcmxheUNsaWNrOiB0cnVlLFxuICAgICAgc2hvdWxkSGlkZU9uRXNjYXBlS2V5RG93bjogdHJ1ZSxcbiAgICAgIGhhc0Nsb3NlQnV0dG9uOiB0cnVlXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93TW9kYWwuYmluZChudWxsLCBtb2RhbFR5cGUsIGRhdGFQcm9wcywgc2V0dGluZ3NQcm9wcyl9PlNob3cgbW9kYWw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNb2RhbD57bW9kYWxzfTwvTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICgpID0+IHtcbiAgcmV0dXJuIHt9O1xufVxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBzaG93TW9kYWxcbn07XG5jb25zdCBBcHAgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYWluKTtcblxucmVuZGVyKChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPEFwcCAvPlxuICA8L1Byb3ZpZGVyPlxuKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcCcpKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7dGl0bGUsIGRlc2NyaXB0aW9ufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICA8ZGl2PntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgQ29uZmlybWF0aW9uTW9kYWwsIHtDT05GSVJNQVRJT05fTU9EQUx9IGZyb20gJy4vY29uZmlybWF0aW9uTW9kYWwnO1xuXG4vLyBNYXAgZWFjaCBgbW9kYWxUeXBlYCB0byB0aGUgY29ycmVzcG9uZGluZyBtb2RhbCBjb21wb25lbnQuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFtDT05GSVJNQVRJT05fTU9EQUxdOiBDb25maXJtYXRpb25Nb2RhbFxufTtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgY3JlYXRlRWxlbWVudCwgUHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0IHtoaWRlTW9kYWwsIHNob3dNb2RhbH0gZnJvbSAnLi9yZWR1eCc7XG5cbmNvbnN0IEVTQ0FQRV9LRVlDT0RFID0gMjc7XG5cbi8vIFN0eWxlcyB0byBtYWtlIGJvdGggYG92ZXJsYXlgIGFuZCBgY29udGVudFdyYXBwZXJgIGZpdCB0aGUgZW50aXJlIHNjcmVlbi5cbmNvbnN0IHN0eWxlID0ge1xuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgdG9wOiAwLFxuICByaWdodDogMCxcbiAgYm90dG9tOiAwLFxuICBsZWZ0OiAwXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvLyAxLiBBdHRyaWJ1dGUgcHJvcHNcbiAgICAvLyBBbiBvYmplY3QgdGhhdCBtYXBzIGVhY2ggYG1vZGFsVHlwZWAgdG8gdGhlIGNvcnJlc3BvbmRpbmcgbW9kYWwgY29tcG9uZW50LlxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLmZ1bmMpLFxuICAgIC8vIENsYXNzZXMgZm9yIHRoZSBzdWJjb21wb25lbnRzLlxuICAgIGNvbnRlbnRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb3ZlcmxheUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvLyBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgYENsb3NlYCBidXR0b24gY29tcG9uZW50LlxuICAgIHJlbmRlckNsb3NlQnV0dG9uOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8vIDIuIEluamVjdGVkIHByb3BzXG4gICAgLy8gV2hldGhlciB0aGUgbW9kYWwgaXMgdmlzaWJsZS5cbiAgICBpc1Zpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgLy8gVGhlIG1vZGFsIHR5cGUuIFdpbGwgYmUgYG51bGxgIGlmIG5vIG1vZGFsIGlzIGJlaW5nIHJlbmRlcmVkLlxuICAgIG1vZGFsVHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvLyBQcm9wcyBzcHJlYWQgb3ZlciB0aGUgY3VycmVudCBtb2RhbCBjb21wb25lbnQgKGllLiBvbmUgb2YgdGhlIGNvbXBvbmVudHNcbiAgICAvLyBpbiBgY2hpbGRyZW5gKS5cbiAgICBkYXRhUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAvLyBGb3IgY3VzdG9taXNpbmcgdGhlIGNvbXBvbmVudCBiZWhhdmlvdXIuXG4gICAgc2V0dGluZ3NQcm9wczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGhhc0Nsb3NlQnV0dG9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHNob3VsZEhpZGVPbk92ZXJsYXlDbGljazogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBzaG91bGRIaWRlT25Fc2NhcGVLZXlEb3duOiBQcm9wVHlwZXMuYm9vbFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgLy8gRm9yIGRpc3BhdGNoaW5nIGFjdGlvbnMgdG8gc2hvdyBhbmQgaGlkZSB0aGUgbW9kYWwuXG4gICAgaGlkZU1vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNob3dNb2RhbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IFtdLFxuICAgIGNvbnRlbnRDbGFzc05hbWU6ICdjb250ZW50JyxcbiAgICBvdmVybGF5Q2xhc3NOYW1lOiAnb3ZlcmxheScsXG4gICAgcmVuZGVyQ2xvc2VCdXR0b246IChoaWRlTW9kYWwpID0+IHtcbiAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT1cImNsb3NlQnV0dG9uXCIgb25DbGljaz17aGlkZU1vZGFsfT5DbG9zZTwvYnV0dG9uPjtcbiAgICB9XG4gIH07XG5cbiAgLy8gSGlkZSB0aGUgbW9kYWwgaWYgdGhlIGBFc2NgIGtleSB3YXMgcHJlc3NlZC5cbiAgaGlkZU9uRXNjYXBlS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgdGhpcy5wcm9wcy5oaWRlTW9kYWwoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gSGlkZSB0aGUgbW9kYWwgaWYgdGhlIG92ZXJsYXkgd2FzIGNsaWNrZWQuXG4gIGhpZGVPbk92ZXJsYXlDbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMucmVmcy5jb250ZW50V3JhcHBlcikge1xuICAgICAgdGhpcy5wcm9wcy5oaWRlTW9kYWwoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVXBkYXRlIGBvdmVyZmxvd2Agb2YgYGRvY3VtZW50LmJvZHlgIGlmIG1vZGFsIHZpc2liaWxpdHkgaGFzIGNoYW5nZWQuXG4gIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgY29uc3Qge2lzVmlzaWJsZX0gPSBuZXh0UHJvcHM7XG4gICAgaWYgKGlzVmlzaWJsZSAhPT0gdGhpcy5wcm9wcy5pc1Zpc2libGUpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBpc1Zpc2libGUgPyAnaGlkZGVuJyA6IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgbW9kYWwgaXMgbm93IHZpc2libGUsIGBmb2N1c2AgaXQsIGVsc2UgYGJsdXJgIGl0LlxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5yZWZzLmNvbnRlbnRXcmFwcGVyW3RoaXMucHJvcHMuaXNWaXNpYmxlID8gJ2ZvY3VzJyA6ICdibHVyJ10oKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNvbnRlbnRDbGFzc05hbWUsXG4gICAgICBvdmVybGF5Q2xhc3NOYW1lLFxuICAgICAgcmVuZGVyQ2xvc2VCdXR0b24sXG4gICAgICBpc1Zpc2libGUsXG4gICAgICBtb2RhbFR5cGUsXG4gICAgICBkYXRhUHJvcHMsXG4gICAgICBzZXR0aW5nc1Byb3BzLFxuICAgICAgaGlkZU1vZGFsLFxuICAgICAgc2hvd01vZGFsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgaGFzQ2xvc2VCdXR0b24sXG4gICAgICBzaG91bGRIaWRlT25PdmVybGF5Q2xpY2ssXG4gICAgICBzaG91bGRIaWRlT25Fc2NhcGVLZXlEb3duLFxuICAgICAgLi4ub3RoZXJTZXR0aW5nc1Byb3BzXG4gICAgfSA9IHNldHRpbmdzUHJvcHM7XG5cbiAgICBjb25zdCBjc3NUcmFuc2l0aW9uR3JvdXAgPSB7XG4gICAgICBjb21wb25lbnQ6ICdkaXYnLFxuICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dDogNTAwLFxuICAgICAgdHJhbnNpdGlvbkxlYXZlVGltZW91dDogNTAwLFxuICAgICAgdHJhbnNpdGlvbk5hbWU6IHtcbiAgICAgICAgZW50ZXI6ICdlbnRlcicsXG4gICAgICAgIGVudGVyQWN0aXZlOiAnZW50ZXJBY3RpdmUnLFxuICAgICAgICBsZWF2ZTogJ2xlYXZlJyxcbiAgICAgICAgbGVhdmVBY3RpdmU6ICdsZWF2ZUFjdGl2ZSdcbiAgICAgIH0sXG4gICAgICAuLi5vdGhlclNldHRpbmdzUHJvcHNcbiAgICB9O1xuXG4gICAgY29uc3Qgb3ZlcmxheVByb3BzID0ge1xuICAgICAgY2xhc3NOYW1lOiBvdmVybGF5Q2xhc3NOYW1lLFxuICAgICAgc3R5bGVcbiAgICB9O1xuXG4gICAgY29uc3QgY29udGVudFdyYXBwZXJQcm9wcyA9IHtcbiAgICAgIG9uQ2xpY2s6IHNob3VsZEhpZGVPbk92ZXJsYXlDbGljayAmJiB0aGlzLmhpZGVPbk92ZXJsYXlDbGljayxcbiAgICAgIG9uS2V5RG93bjogc2hvdWxkSGlkZU9uRXNjYXBlS2V5RG93biAmJiB0aGlzLmhpZGVPbkVzY2FwZUtleURvd24sXG4gICAgICByZWY6ICdjb250ZW50V3JhcHBlcicsXG4gICAgICBzdHlsZToge1xuICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICAgICAgfSxcbiAgICAgIHRhYkluZGV4OiAxXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbnRlbnRQcm9wcyA9IHtcbiAgICAgIGNsYXNzTmFtZTogY29udGVudENsYXNzTmFtZVxuICAgIH07XG5cbiAgICBjb25zdCBtb2RhbFByb3BzID0ge1xuICAgICAgLi4uZGF0YVByb3BzLFxuICAgICAgaGlkZU1vZGFsLFxuICAgICAgc2hvd01vZGFsXG4gICAgfTtcblxuICAgIGNvbnN0IG1vZGFsID0gY2hpbGRyZW5bbW9kYWxUeXBlXTtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIHsuLi5jc3NUcmFuc2l0aW9uR3JvdXB9PlxuICAgICAgICB7aXNWaXNpYmxlICYmIG1vZGFsICYmXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgey4uLm92ZXJsYXlQcm9wc30gLz5cbiAgICAgICAgICAgIDxkaXYgey4uLmNvbnRlbnRXcmFwcGVyUHJvcHN9PlxuICAgICAgICAgICAgICA8ZGl2IHsuLi5jb250ZW50UHJvcHN9PlxuICAgICAgICAgICAgICAgIHtjcmVhdGVFbGVtZW50KG1vZGFsLCBtb2RhbFByb3BzKX1cbiAgICAgICAgICAgICAgICB7aGFzQ2xvc2VCdXR0b24gJiYgcmVuZGVyQ2xvc2VCdXR0b24oaGlkZU1vZGFsKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj59XG4gICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiBzdGF0ZS5tb2RhbDtcbn07XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGhpZGVNb2RhbCxcbiAgc2hvd01vZGFsXG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTW9kYWwpO1xuIiwiaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnO1xuXG5leHBvcnQgKiBmcm9tICcuL3JlZHV4JztcbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIiwiZXhwb3J0IGNvbnN0IEhJREVfTU9EQUwgPSAnbW9kYWwvSElERV9NT0RBTCc7XG5leHBvcnQgY29uc3QgU0hPV19NT0RBTCA9ICdtb2RhbC9TSE9XX01PREFMJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNWaXNpYmxlOiBmYWxzZSxcbiAgbW9kYWxUeXBlOiBudWxsLFxuICBkYXRhUHJvcHM6IHt9LFxuICBzZXR0aW5nc1Byb3BzOiB7fVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1vZGFsUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSElERV9NT0RBTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1Zpc2libGU6IGZhbHNlXG4gICAgICB9O1xuICAgIGNhc2UgU0hPV19NT0RBTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgICBpc1Zpc2libGU6IHRydWVcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZU1vZGFsKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEhJREVfTU9EQUxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNb2RhbChtb2RhbFR5cGUsIGRhdGFQcm9wcyA9IHt9LCBzZXR0aW5nc1Byb3BzID0ge30pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTSE9XX01PREFMLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIG1vZGFsVHlwZSxcbiAgICAgIGRhdGFQcm9wcyxcbiAgICAgIHNldHRpbmdzUHJvcHM6IHtcbiAgICAgICAgc2hvdWxkSGlkZU9uT3ZlcmxheUNsaWNrOiB0cnVlLFxuICAgICAgICBzaG91bGRIaWRlT25Fc2NhcGVLZXlEb3duOiB0cnVlLFxuICAgICAgICBoYXNDbG9zZUJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgLi4uc2V0dGluZ3NQcm9wc1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiJdfQ==
