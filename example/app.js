(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _src = require('../src');

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

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'main' },
          _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                showModal(_confirmationModal.CONFIRMATION_MODAL, {
                  title: 'foo',
                  description: 'bar'
                });
              } },
            'Show modal'
          )
        ),
        _react2.default.createElement(_src.ModalPortal, { modals: _modals2.default })
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

},{"../src":7,"./modals":3,"./modals/confirmationModal":2,"react":"react","react-dom":"react-dom","react-redux":"react-redux","redux":"redux"}],2:[function(require,module,exports){
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

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ESCAPE_KEYCODE = 27;

var cssTransitionGroupOptions = {
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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Modal)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.hideOnOverlayClick = function (event) {
      if (event.target === _this.refs.contentWrapper) {
        _this.props.hideModal();
      }
    }, _this.hideOnEscapeKeyDown = function (event) {
      if (event.keyCode === ESCAPE_KEYCODE) {
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
      var isVisible = _props.isVisible;
      var hideModal = _props.hideModal;
      var contentClassName = _props.contentClassName;
      var contentWrapperClassName = _props.contentWrapperClassName;
      var overlayClassName = _props.overlayClassName;

      var rest = _objectWithoutProperties(_props, ['children', 'isVisible', 'hideModal', 'contentClassName', 'contentWrapperClassName', 'overlayClassName']);

      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        _extends({
          component: 'div'
        }, cssTransitionGroupOptions, rest),
        isVisible && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('div', { className: overlayClassName }),
          _react2.default.createElement(
            'div',
            {
              className: contentWrapperClassName,
              onClick: this.hideOnOverlayClick,
              onKeyDown: this.hideOnEscapeKeyDown,
              ref: 'contentWrapper',
              tabIndex: 1 },
            _react2.default.createElement(
              'div',
              { className: contentClassName },
              children
            )
          )
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  children: _react.PropTypes.node,
  isVisible: _react.PropTypes.bool.isRequired,
  hideModal: _react.PropTypes.func.isRequired,
  rootClassName: _react.PropTypes.string,
  contentClassName: _react.PropTypes.string,
  overlayClassName: _react.PropTypes.string
};
Modal.defaultProps = {
  contentClassName: 'content',
  contentWrapperClassName: 'contentWrapper',
  overlayClassName: 'overlay'
};
exports.default = Modal;

},{"react":"react","react-addons-css-transition-group":"react-addons-css-transition-group"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalPortal = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ModalPortal = exports.ModalPortal = function ModalPortal(_ref) {
  var hideModal = _ref.hideModal;
  var showModal = _ref.showModal;
  var isVisible = _ref.isVisible;
  var modals = _ref.modals;
  var modalProps = _ref.modalProps;
  var modalType = _ref.modalType;

  var rest = _objectWithoutProperties(_ref, ['hideModal', 'showModal', 'isVisible', 'modals', 'modalProps', 'modalType']);

  var props = _extends({
    hideModal: hideModal,
    showModal: showModal,
    isVisible: isVisible
  }, rest);
  var SpecificModal = modals[modalType];
  return _react2.default.createElement(
    _.Modal,
    props,
    _react2.default.createElement(SpecificModal, _extends({}, props, modalProps))
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return state.modal;
};
var mapDispatchToProps = {
  hideModal: _.hideModal,
  showModal: _.showModal
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ModalPortal);

},{"../":7,"react":"react","react-redux":"react-redux"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalPortal = exports.Modal = undefined;

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _ModalPortal = require('./ModalPortal');

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Modal = _Modal2.default;
exports.ModalPortal = _ModalPortal2.default;

},{"./Modal":4,"./ModalPortal":5}],7:[function(require,module,exports){
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

var _components = require('./components');

Object.keys(_components).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _components[key];
    }
  });
});

},{"./components":6,"./redux":8}],8:[function(require,module,exports){
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
  isVisible: false
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

function showModal(modalType, modalProps) {
  return {
    type: SHOW_MODAL,
    payload: {
      modalType: modalType,
      modalProps: modalProps
    }
  };
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL2luZGV4LmpzIiwiZXhhbXBsZS9tb2RhbHMvY29uZmlybWF0aW9uTW9kYWwuanMiLCJleGFtcGxlL21vZGFscy9pbmRleC5qcyIsInNyYy9jb21wb25lbnRzL01vZGFsLmpzIiwic3JjL2NvbXBvbmVudHMvTW9kYWxQb3J0YWwuanMiLCJzcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInNyYy9pbmRleC5qcyIsInNyYy9yZWR1eC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUNBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFVBQVUsNEJBQWdCO0FBQzlCLG1CQUQ4QjtDQUFoQixDQUFWO0FBR04sSUFBTSxRQUFRLHdCQUFZLE9BQVosQ0FBUjs7SUFFQTs7Ozs7Ozs7Ozs7NkJBQ0s7VUFDQSxZQUFhLEtBQUssS0FBTCxDQUFiLFVBREE7O0FBRVAsYUFDRTs7O1FBQ0U7O1lBQUssV0FBVSxNQUFWLEVBQUw7VUFDRTs7Y0FBUSxTQUFTLG1CQUFNO0FBQ3JCLGlFQUE4QjtBQUM1Qix5QkFBTyxLQUFQO0FBQ0EsK0JBQWEsS0FBYjtpQkFGRixFQURxQjtlQUFOLEVBQWpCOztXQURGO1NBREY7UUFTRSxrREFBYSwwQkFBYixDQVRGO09BREYsQ0FGTzs7OztTQURMOzs7QUFtQk4sSUFBTSxrQkFBa0IsU0FBbEIsZUFBa0IsR0FBTTtBQUM1QixTQUFPLEVBQVAsQ0FENEI7Q0FBTjtBQUd4QixJQUFNLHFCQUFxQjtBQUN6QiwyQkFEeUI7Q0FBckI7QUFHTixJQUFNLE1BQU0seUJBQVEsZUFBUixFQUF5QixrQkFBekIsRUFBNkMsSUFBN0MsQ0FBTjs7QUFFTixzQkFDRTs7SUFBVSxPQUFPLEtBQVAsRUFBVjtFQUNFLDhCQUFDLEdBQUQsT0FERjtDQURGLEVB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LGFBQUQsZUFBbUIsT0FBVyxXQUE5QixDQURGO0dBREYsQ0FSd0c7Q0FBL0U7O0FBZTNCLElBQU0sa0JBQWtCLFNBQWxCLGVBQWtCLENBQUMsS0FBRCxFQUFXO0FBQ2pDLFNBQU8sTUFBTSxLQUFOLENBRDBCO0NBQVg7QUFHeEIsSUFBTSxxQkFBcUI7QUFDekIsd0JBRHlCO0FBRXpCLHdCQUZ5QjtDQUFyQjtrQkFJUyx5QkFBUSxlQUFSLEVBQXlCLGtCQUF6QixFQUE2QyxXQUE3Qzs7Ozs7Ozs7OztBQzFCZjs7OztBQUNBOzs7Ozs7UUFHRTtRQUNBOzs7Ozs7Ozs7OztBQ0xGOzs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQ01nQjtRQWlCQTtRQU1BO0FBOUJULElBQU0sa0NBQWEsa0JBQWI7QUFDTixJQUFNLGtDQUFhLGtCQUFiOztBQUVOLElBQU0sc0NBQWU7QUFDMUIsYUFBVyxLQUFYO0NBRFc7O0FBSU4sU0FBUyxLQUFULEdBQWtEO01BQW5DLDhEQUFRLDRCQUEyQjtNQUFiLCtEQUFTLGtCQUFJOztBQUN2RCxVQUFRLE9BQU8sSUFBUDtBQUNOLFNBQUssVUFBTDtBQUNFLDBCQUNLO0FBQ0gsbUJBQVcsS0FBWDtRQUZGLENBREY7QUFERixTQU1PLFVBQUw7QUFDRSwwQkFDSyxPQUFPLE9BQVA7QUFDSCxtQkFBVyxJQUFYO1FBRkYsQ0FERjtBQU5GO0FBWUksYUFBTyxLQUFQLENBREY7QUFYRixHQUR1RDtDQUFsRDs7QUFpQkEsU0FBUyxTQUFULEdBQXFCO0FBQzFCLFNBQU87QUFDTCxVQUFNLFVBQU47R0FERixDQUQwQjtDQUFyQjs7QUFNQSxTQUFTLFNBQVQsQ0FBbUIsU0FBbkIsRUFBOEIsVUFBOUIsRUFBMEM7QUFDL0MsU0FBTztBQUNMLFVBQU0sVUFBTjtBQUNBLGFBQVM7QUFDUCwwQkFETztBQUVQLDRCQUZPO0tBQVQ7R0FGRixDQUQrQztDQUExQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtQcm92aWRlciwgY29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCB7TW9kYWxQb3J0YWwsIG1vZGFsLCBzaG93TW9kYWx9IGZyb20gJy4uL3NyYyc7XG5pbXBvcnQgbW9kYWxzIGZyb20gJy4vbW9kYWxzJztcbmltcG9ydCB7Q09ORklSTUFUSU9OX01PREFMfSBmcm9tICcuL21vZGFscy9jb25maXJtYXRpb25Nb2RhbCc7XG5cbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBtb2RhbFxufSk7XG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtzaG93TW9kYWx9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzaG93TW9kYWwoQ09ORklSTUFUSU9OX01PREFMLCB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnZm9vJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdiYXInXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH19PlNob3cgbW9kYWw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNb2RhbFBvcnRhbCBtb2RhbHM9e21vZGFsc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKCkgPT4ge1xuICByZXR1cm4ge307XG59XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIHNob3dNb2RhbFxufTtcbmNvbnN0IEFwcCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1haW4pO1xuXG5yZW5kZXIoKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8QXBwIC8+XG4gIDwvUHJvdmlkZXI+XG4pLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwJykpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHt0aXRsZSwgZGVzY3JpcHRpb259KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgIDxkaXY+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBDb25maXJtYXRpb25Nb2RhbCwge0NPTkZJUk1BVElPTl9NT0RBTH0gZnJvbSAnLi9jb25maXJtYXRpb25Nb2RhbCc7XG5cbi8vIE1hcHMgZWFjaCBgbW9kYWxUeXBlYCB0byB0aGUgY29ycmVzcG9uZGluZyBtb2RhbCBjb21wb25lbnQuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFtDT05GSVJNQVRJT05fTU9EQUxdOiBDb25maXJtYXRpb25Nb2RhbFxufTtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgUHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJztcblxuY29uc3QgRVNDQVBFX0tFWUNPREUgPSAyNztcblxuY29uc3QgY3NzVHJhbnNpdGlvbkdyb3VwT3B0aW9ucyA9IHtcbiAgdHJhbnNpdGlvbkVudGVyVGltZW91dDogNTAwLFxuICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0OiA1MDAsXG4gIHRyYW5zaXRpb25OYW1lOiB7XG4gICAgZW50ZXI6ICdlbnRlcicsXG4gICAgZW50ZXJBY3RpdmU6ICdlbnRlckFjdGl2ZScsXG4gICAgbGVhdmU6ICdsZWF2ZScsXG4gICAgbGVhdmVBY3RpdmU6ICdsZWF2ZUFjdGl2ZSdcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBpc1Zpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaGlkZU1vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHJvb3RDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29udGVudENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvdmVybGF5Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29udGVudENsYXNzTmFtZTogJ2NvbnRlbnQnLFxuICAgIGNvbnRlbnRXcmFwcGVyQ2xhc3NOYW1lOiAnY29udGVudFdyYXBwZXInLFxuICAgIG92ZXJsYXlDbGFzc05hbWU6ICdvdmVybGF5J1xuICB9O1xuXG4gIGhpZGVPbk92ZXJsYXlDbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMucmVmcy5jb250ZW50V3JhcHBlcikge1xuICAgICAgdGhpcy5wcm9wcy5oaWRlTW9kYWwoKTtcbiAgICB9XG4gIH07XG5cbiAgaGlkZU9uRXNjYXBlS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgdGhpcy5wcm9wcy5oaWRlTW9kYWwoKTtcbiAgICB9XG4gIH07XG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7aXNWaXNpYmxlfSA9IG5leHRQcm9wcztcbiAgICBpZiAoaXNWaXNpYmxlICE9PSB0aGlzLnByb3BzLmlzVmlzaWJsZSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGlzVmlzaWJsZSA/ICdoaWRkZW4nIDogbnVsbDtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5yZWZzLmNvbnRlbnRXcmFwcGVyW3RoaXMucHJvcHMuaXNWaXNpYmxlID8gJ2ZvY3VzJyA6ICdibHVyJ10oKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGlzVmlzaWJsZSxcbiAgICAgIGhpZGVNb2RhbCxcbiAgICAgIGNvbnRlbnRDbGFzc05hbWUsXG4gICAgICBjb250ZW50V3JhcHBlckNsYXNzTmFtZSxcbiAgICAgIG92ZXJsYXlDbGFzc05hbWUsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cFxuICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICB7Li4uY3NzVHJhbnNpdGlvbkdyb3VwT3B0aW9uc31cbiAgICAgICAgey4uLnJlc3R9PlxuICAgICAgICB7aXNWaXNpYmxlICYmXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtvdmVybGF5Q2xhc3NOYW1lfSAvPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbnRlbnRXcmFwcGVyQ2xhc3NOYW1lfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhpZGVPbk92ZXJsYXlDbGlja31cbiAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhpZGVPbkVzY2FwZUtleURvd259XG4gICAgICAgICAgICAgIHJlZj1cImNvbnRlbnRXcmFwcGVyXCJcbiAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGVudENsYXNzTmFtZX0+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+fVxuICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25Hcm91cD5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge01vZGFsLCBoaWRlTW9kYWwsIHNob3dNb2RhbH0gZnJvbSAnLi4vJztcblxuZXhwb3J0IGNvbnN0IE1vZGFsUG9ydGFsID0gKHtoaWRlTW9kYWwsIHNob3dNb2RhbCwgaXNWaXNpYmxlLCBtb2RhbHMsIG1vZGFsUHJvcHMsIG1vZGFsVHlwZSwgLi4ucmVzdH0pID0+IHtcbiAgY29uc3QgcHJvcHMgPSB7XG4gICAgaGlkZU1vZGFsLFxuICAgIHNob3dNb2RhbCxcbiAgICBpc1Zpc2libGUsXG4gICAgLi4ucmVzdFxuICB9O1xuICBjb25zdCBTcGVjaWZpY01vZGFsID0gbW9kYWxzW21vZGFsVHlwZV07XG4gIHJldHVybiAoXG4gICAgPE1vZGFsIHsuLi5wcm9wc30+XG4gICAgICA8U3BlY2lmaWNNb2RhbCB7Li4ucHJvcHN9IHsuLi5tb2RhbFByb3BzfSAvPlxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHN0YXRlLm1vZGFsO1xufTtcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgaGlkZU1vZGFsLFxuICBzaG93TW9kYWxcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNb2RhbFBvcnRhbCk7XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCc7XG5pbXBvcnQgTW9kYWxQb3J0YWwgZnJvbSAnLi9Nb2RhbFBvcnRhbCc7XG5cbmV4cG9ydCB7XG4gIE1vZGFsLFxuICBNb2RhbFBvcnRhbFxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vcmVkdXgnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzJztcbiIsImV4cG9ydCBjb25zdCBISURFX01PREFMID0gJ21vZGFsL0hJREVfTU9EQUwnO1xuZXhwb3J0IGNvbnN0IFNIT1dfTU9EQUwgPSAnbW9kYWwvU0hPV19NT0RBTCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzVmlzaWJsZTogZmFsc2Vcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtb2RhbChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSElERV9NT0RBTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1Zpc2libGU6IGZhbHNlXG4gICAgICB9O1xuICAgIGNhc2UgU0hPV19NT0RBTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgICBpc1Zpc2libGU6IHRydWVcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZU1vZGFsKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEhJREVfTU9EQUxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNb2RhbChtb2RhbFR5cGUsIG1vZGFsUHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTSE9XX01PREFMLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIG1vZGFsVHlwZSxcbiAgICAgIG1vZGFsUHJvcHNcbiAgICB9XG4gIH07XG59XG4iXX0=
