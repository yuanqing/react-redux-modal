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
  modal: _src.modal
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
      var modalProps = {
        title: 'foo',
        description: 'bar'
      };
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'main' },
          _react2.default.createElement(
            'button',
            { onClick: showModal.bind(null, modalType, modalProps) },
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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  var title = _ref.title;
  var description = _ref.description;

  var other = _objectWithoutProperties(_ref, ['title', 'description']);

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

// Maps each `modalType` to the corresponding modal component.
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

  _createClass(Modal, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      var isVisible = nextProps.isVisible;

      if (isVisible !== this.props.isVisible) {
        document.body.style.overflow = isVisible ? 'hidden' : null;
      }
    }
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
      var isVisible = _props.isVisible;
      var modalType = _props.modalType;
      var modalProps = _props.modalProps;
      var settingsProps = _props.settingsProps;
      var _settingsProps$should = settingsProps.shouldHideOnOverlayClick;
      var shouldHideOnOverlayClick = _settingsProps$should === undefined ? true : _settingsProps$should;
      var _settingsProps$should2 = settingsProps.shouldHideOnEscapeKeyDown;
      var shouldHideOnEscapeKeyDown = _settingsProps$should2 === undefined ? true : _settingsProps$should2;

      var otherSettingsProps = _objectWithoutProperties(settingsProps, ['shouldHideOnOverlayClick', 'shouldHideOnEscapeKeyDown']);

      var rootProps = _extends({
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

      var modal = children[modalType];
      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        rootProps,
        isVisible && modal && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('div', overlayProps),
          _react2.default.createElement(
            'div',
            contentWrapperProps,
            _react2.default.createElement(
              'div',
              { className: contentClassName },
              (0, _react.createElement)(modal, modalProps)
            )
          )
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  // Props.
  children: _react.PropTypes.any,
  contentClassName: _react.PropTypes.string,
  overlayClassName: _react.PropTypes.string,
  // Injected via `mapStateToProps`.
  isVisible: _react.PropTypes.bool.isRequired,
  modalProps: _react.PropTypes.object,
  modalType: _react.PropTypes.object,
  // Injected via `mapDispatchToProps`.
  hideModal: _react.PropTypes.func.isRequired,
  showModal: _react.PropTypes.func.isRequired
};
Modal.defaultProps = {
  contentClassName: 'content',
  overlayClassName: 'overlay'
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

exports.modal = modal;
exports.hideModal = hideModal;
exports.showModal = showModal;
var HIDE_MODAL = exports.HIDE_MODAL = 'modal/HIDE_MODAL';
var SHOW_MODAL = exports.SHOW_MODAL = 'modal/SHOW_MODAL';

var initialState = exports.initialState = {
  isVisible: false,
  modalType: undefined,
  modalProps: {},
  settingsProps: {}
};

function modal() {
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
  var modalProps = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var settingsProps = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  return {
    type: SHOW_MODAL,
    payload: {
      modalType: modalType,
      modalProps: modalProps,
      settingsProps: settingsProps
    }
  };
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL2luZGV4LmpzIiwiZXhhbXBsZS9tb2RhbHMvY29uZmlybWF0aW9uTW9kYWwuanMiLCJleGFtcGxlL21vZGFscy9pbmRleC5qcyIsInNyYy9Nb2RhbC5qcyIsInNyYy9pbmRleC5qcyIsInNyYy9yZWR1eC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUNBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU0sVUFBVSw0QkFBZ0I7QUFDOUIsbUJBRDhCO0NBQWhCLENBQVY7QUFHTixJQUFNLFFBQVEsd0JBQVksT0FBWixDQUFSOztJQUVBOzs7Ozs7Ozs7Ozs2QkFDSztVQUNBLFlBQWEsS0FBSyxLQUFMLENBQWIsVUFEQTs7QUFFUCxVQUFNLGlEQUFOLENBRk87QUFHUCxVQUFNLGFBQWE7QUFDakIsZUFBTyxLQUFQO0FBQ0EscUJBQWEsS0FBYjtPQUZJLENBSEM7QUFPUCxhQUNFOzs7UUFDRTs7WUFBSyxXQUFVLE1BQVYsRUFBTDtVQUNFOztjQUFRLFNBQVMsVUFBVSxJQUFWLENBQWUsSUFBZixFQUFxQixTQUFyQixFQUFnQyxVQUFoQyxDQUFULEVBQVI7O1dBREY7U0FERjtRQUlFOzs7O1NBSkY7T0FERixDQVBPOzs7O1NBREw7OztBQW1CTixJQUFNLGtCQUFrQixTQUFsQixlQUFrQixHQUFNO0FBQzVCLFNBQU8sRUFBUCxDQUQ0QjtDQUFOO0FBR3hCLElBQU0scUJBQXFCO0FBQ3pCLDJCQUR5QjtDQUFyQjtBQUdOLElBQU0sTUFBTSx5QkFBUSxlQUFSLEVBQXlCLGtCQUF6QixFQUE2QyxJQUE3QyxDQUFOOztBQUVOLHNCQUNFOztJQUFVLE9BQU8sS0FBUCxFQUFWO0VBQ0UsOEJBQUMsR0FBRCxPQURGO0NBREYsRUFJRyxTQUFTLGFBQVQsQ0FBdUIs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TSxVQUFOO0FBQ0EsYUFBUztBQUNQLDBCQURPO0FBRVAsNEJBRk87QUFHUCxrQ0FITztLQUFUO0dBRkYsQ0FEd0U7Q0FBbkUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7UHJvdmlkZXIsIGNvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgTW9kYWwsIHttb2RhbCwgc2hvd01vZGFsfSBmcm9tICcuLi9zcmMnO1xuaW1wb3J0IG1vZGFscyBmcm9tICcuL21vZGFscyc7XG5pbXBvcnQge0NPTkZJUk1BVElPTl9NT0RBTH0gZnJvbSAnLi9tb2RhbHMvY29uZmlybWF0aW9uTW9kYWwnO1xuXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgbW9kYWxcbn0pO1xuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKTtcblxuY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7c2hvd01vZGFsfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9kYWxUeXBlID0gQ09ORklSTUFUSU9OX01PREFMO1xuICAgIGNvbnN0IG1vZGFsUHJvcHMgPSB7XG4gICAgICB0aXRsZTogJ2ZvbycsXG4gICAgICBkZXNjcmlwdGlvbjogJ2JhcidcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dNb2RhbC5iaW5kKG51bGwsIG1vZGFsVHlwZSwgbW9kYWxQcm9wcyl9PlNob3cgbW9kYWw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNb2RhbD57bW9kYWxzfTwvTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICgpID0+IHtcbiAgcmV0dXJuIHt9O1xufVxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBzaG93TW9kYWxcbn07XG5jb25zdCBBcHAgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYWluKTtcblxucmVuZGVyKChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPEFwcCAvPlxuICA8L1Byb3ZpZGVyPlxuKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcCcpKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7dGl0bGUsIGRlc2NyaXB0aW9uLCAuLi5vdGhlcn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgPGRpdj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IENvbmZpcm1hdGlvbk1vZGFsLCB7Q09ORklSTUFUSU9OX01PREFMfSBmcm9tICcuL2NvbmZpcm1hdGlvbk1vZGFsJztcblxuLy8gTWFwcyBlYWNoIGBtb2RhbFR5cGVgIHRvIHRoZSBjb3JyZXNwb25kaW5nIG1vZGFsIGNvbXBvbmVudC5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW0NPTkZJUk1BVElPTl9NT0RBTF06IENvbmZpcm1hdGlvbk1vZGFsXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVFbGVtZW50LCBQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCc7XG5pbXBvcnQge2hpZGVNb2RhbCwgc2hvd01vZGFsfSBmcm9tICcuL3JlZHV4JztcblxuY29uc3QgRVNDQVBFX0tFWUNPREUgPSAyNztcblxuY29uc3Qgc3R5bGUgPSB7XG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICB0b3A6IDAsXG4gIHJpZ2h0OiAwLFxuICBib3R0b206IDAsXG4gIGxlZnQ6IDBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvLyBQcm9wcy5cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgICBjb250ZW50Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG92ZXJsYXlDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLy8gSW5qZWN0ZWQgdmlhIGBtYXBTdGF0ZVRvUHJvcHNgLlxuICAgIGlzVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBtb2RhbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG1vZGFsVHlwZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvLyBJbmplY3RlZCB2aWEgYG1hcERpc3BhdGNoVG9Qcm9wc2AuXG4gICAgaGlkZU1vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNob3dNb2RhbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29udGVudENsYXNzTmFtZTogJ2NvbnRlbnQnLFxuICAgIG92ZXJsYXlDbGFzc05hbWU6ICdvdmVybGF5J1xuICB9O1xuXG4gIGhpZGVPbkVzY2FwZUtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgIHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XG4gICAgfVxuICB9O1xuXG4gIGhpZGVPbk92ZXJsYXlDbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMucmVmcy5jb250ZW50V3JhcHBlcikge1xuICAgICAgdGhpcy5wcm9wcy5oaWRlTW9kYWwoKTtcbiAgICB9XG4gIH07XG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7aXNWaXNpYmxlfSA9IG5leHRQcm9wcztcbiAgICBpZiAoaXNWaXNpYmxlICE9PSB0aGlzLnByb3BzLmlzVmlzaWJsZSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGlzVmlzaWJsZSA/ICdoaWRkZW4nIDogbnVsbDtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5yZWZzLmNvbnRlbnRXcmFwcGVyW3RoaXMucHJvcHMuaXNWaXNpYmxlID8gJ2ZvY3VzJyA6ICdibHVyJ10oKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNvbnRlbnRDbGFzc05hbWUsXG4gICAgICBvdmVybGF5Q2xhc3NOYW1lLFxuICAgICAgaXNWaXNpYmxlLFxuICAgICAgbW9kYWxUeXBlLFxuICAgICAgbW9kYWxQcm9wcyxcbiAgICAgIHNldHRpbmdzUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHtcbiAgICAgIHNob3VsZEhpZGVPbk92ZXJsYXlDbGljayA9IHRydWUsXG4gICAgICBzaG91bGRIaWRlT25Fc2NhcGVLZXlEb3duID0gdHJ1ZSxcbiAgICAgIC4uLm90aGVyU2V0dGluZ3NQcm9wc1xuICAgIH0gPSBzZXR0aW5nc1Byb3BzO1xuXG4gICAgY29uc3Qgcm9vdFByb3BzID0ge1xuICAgICAgY29tcG9uZW50OiAnZGl2JyxcbiAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ6IDUwMCxcbiAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ6IDUwMCxcbiAgICAgIHRyYW5zaXRpb25OYW1lOiB7XG4gICAgICAgIGVudGVyOiAnZW50ZXInLFxuICAgICAgICBlbnRlckFjdGl2ZTogJ2VudGVyQWN0aXZlJyxcbiAgICAgICAgbGVhdmU6ICdsZWF2ZScsXG4gICAgICAgIGxlYXZlQWN0aXZlOiAnbGVhdmVBY3RpdmUnXG4gICAgICB9LFxuICAgICAgLi4ub3RoZXJTZXR0aW5nc1Byb3BzXG4gICAgfTtcblxuICAgIGNvbnN0IG92ZXJsYXlQcm9wcyA9IHtcbiAgICAgIGNsYXNzTmFtZTogb3ZlcmxheUNsYXNzTmFtZSxcbiAgICAgIHN0eWxlXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyUHJvcHMgPSB7XG4gICAgICBvbkNsaWNrOiBzaG91bGRIaWRlT25PdmVybGF5Q2xpY2sgJiYgdGhpcy5oaWRlT25PdmVybGF5Q2xpY2ssXG4gICAgICBvbktleURvd246IHNob3VsZEhpZGVPbkVzY2FwZUtleURvd24gJiYgdGhpcy5oaWRlT25Fc2NhcGVLZXlEb3duLFxuICAgICAgcmVmOiAnY29udGVudFdyYXBwZXInLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgIG92ZXJmbG93OiAnYXV0bydcbiAgICAgIH0sXG4gICAgICB0YWJJbmRleDogMVxuICAgIH07XG5cbiAgICBjb25zdCBtb2RhbCA9IGNoaWxkcmVuW21vZGFsVHlwZV07XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cCB7Li4ucm9vdFByb3BzfT5cbiAgICAgICAge2lzVmlzaWJsZSAmJiBtb2RhbCAmJlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IHsuLi5vdmVybGF5UHJvcHN9IC8+XG4gICAgICAgICAgICA8ZGl2IHsuLi5jb250ZW50V3JhcHBlclByb3BzfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRlbnRDbGFzc05hbWV9PntjcmVhdGVFbGVtZW50KG1vZGFsLCBtb2RhbFByb3BzKX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2Pn1cbiAgICAgIDwvUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXA+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHN0YXRlLm1vZGFsO1xufTtcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgaGlkZU1vZGFsLFxuICBzaG93TW9kYWxcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNb2RhbCk7XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vcmVkdXgnO1xuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iLCJleHBvcnQgY29uc3QgSElERV9NT0RBTCA9ICdtb2RhbC9ISURFX01PREFMJztcbmV4cG9ydCBjb25zdCBTSE9XX01PREFMID0gJ21vZGFsL1NIT1dfTU9EQUwnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc1Zpc2libGU6IGZhbHNlLFxuICBtb2RhbFR5cGU6IHVuZGVmaW5lZCxcbiAgbW9kYWxQcm9wczoge30sXG4gIHNldHRpbmdzUHJvcHM6IHt9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbW9kYWwoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEhJREVfTU9EQUw6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNWaXNpYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICBjYXNlIFNIT1dfTU9EQUw6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgaXNWaXNpYmxlOiB0cnVlXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVNb2RhbCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBISURFX01PREFMXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93TW9kYWwobW9kYWxUeXBlLCBtb2RhbFByb3BzID0ge30sIHNldHRpbmdzUHJvcHMgPSB7fSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNIT1dfTU9EQUwsXG4gICAgcGF5bG9hZDoge1xuICAgICAgbW9kYWxUeXBlLFxuICAgICAgbW9kYWxQcm9wcyxcbiAgICAgIHNldHRpbmdzUHJvcHNcbiAgICB9XG4gIH07XG59XG4iXX0=
