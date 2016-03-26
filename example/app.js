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
          'button',
          { onClick: function onClick() {
              showModal(_modals.CONFIRMATION_MODAL, {
                title: 'foo',
                description: 'bar'
              });
            } },
          'Show modal'
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

},{"../src":6,"./modals":2,"react":"react","react-dom":"react-dom","react-redux":"react-redux","redux":"redux"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONFIRMATION_MODAL = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CONFIRMATION_MODAL = exports.CONFIRMATION_MODAL = 'modal/CONFIRMATION_MODAL';

var ConfirmationModal = function ConfirmationModal(_ref) {
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

// Maps `modalType` to the corresponding modal component.
exports.default = _defineProperty({}, CONFIRMATION_MODAL, ConfirmationModal);

},{"react":"react"}],3:[function(require,module,exports){
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
      if (event.target === _this.refs.overlay) {
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
      this.refs.root[this.props.isVisible ? 'focus' : 'blur']();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var isVisible = _props.isVisible;
      var hideModal = _props.hideModal;
      var contentClassName = _props.contentClassName;
      var overlayClassName = _props.overlayClassName;
      var rootClassName = _props.rootClassName;

      var rest = _objectWithoutProperties(_props, ['children', 'isVisible', 'hideModal', 'contentClassName', 'overlayClassName', 'rootClassName']);

      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        _extends({
          component: 'div'
        }, cssTransitionGroupOptions, rest),
        isVisible && _react2.default.createElement(
          'div',
          {
            className: rootClassName,
            onClick: this.hideOnOverlayClick,
            onKeyDown: this.hideOnEscapeKeyDown,
            ref: 'root',
            tabIndex: 1 },
          _react2.default.createElement('div', { className: overlayClassName, ref: 'overlay' }),
          _react2.default.createElement(
            'div',
            { className: contentClassName },
            children
          )
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  children: _react.PropTypes.node.isRequired,
  isVisible: _react.PropTypes.bool.isRequired,
  hideModal: _react.PropTypes.func.isRequired,
  rootClassName: _react.PropTypes.string,
  contentClassName: _react.PropTypes.string,
  overlayClassName: _react.PropTypes.string
};
Modal.defaultProps = {
  rootClassName: 'root',
  contentClassName: 'content',
  overlayClassName: 'overlay'
};
exports.default = Modal;

},{"react":"react","react-addons-css-transition-group":"react-addons-css-transition-group"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalPortal = function ModalPortal(_ref) {
  var hideModal = _ref.hideModal;
  var showModal = _ref.showModal;
  var isVisible = _ref.isVisible;
  var modals = _ref.modals;
  var modalProps = _ref.modalProps;
  var modalType = _ref.modalType;

  var props = {
    hideModal: hideModal,
    isVisible: isVisible
  };
  var SpecificModal = modals[modalType];
  return _react2.default.createElement(
    _.Modal,
    props,
    SpecificModal ? _react2.default.createElement(SpecificModal, modalProps) : _react2.default.createElement('span', null)
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

},{"../":6,"react":"react","react-redux":"react-redux"}],5:[function(require,module,exports){
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

},{"./Modal":3,"./ModalPortal":4}],6:[function(require,module,exports){
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

},{"./components":5,"./redux":7}],7:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL2luZGV4LmpzIiwiZXhhbXBsZS9tb2RhbHMuanMiLCJzcmMvY29tcG9uZW50cy9Nb2RhbC5qcyIsInNyYy9jb21wb25lbnRzL01vZGFsUG9ydGFsLmpzIiwic3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJzcmMvaW5kZXguanMiLCJzcmMvcmVkdXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxVQUFVLDRCQUFnQjtBQUM5QixtQkFEOEI7Q0FBaEIsQ0FBVjtBQUdOLElBQU0sUUFBUSx3QkFBWSxPQUFaLENBQVI7O0lBRUE7Ozs7Ozs7Ozs7OzZCQUNLO1VBQ0EsWUFBYSxLQUFLLEtBQUwsQ0FBYixVQURBOztBQUVQLGFBQ0U7OztRQUNFOztZQUFRLFNBQVMsbUJBQU07QUFDckIsb0RBQThCO0FBQzVCLHVCQUFPLEtBQVA7QUFDQSw2QkFBYSxLQUFiO2VBRkYsRUFEcUI7YUFBTixFQUFqQjs7U0FERjtRQU9FLGtEQUFhLDBCQUFiLENBUEY7T0FERixDQUZPOzs7O1NBREw7OztBQWlCTixJQUFNLGtCQUFrQixTQUFsQixlQUFrQixHQUFNO0FBQzVCLFNBQU8sRUFBUCxDQUQ0QjtDQUFOO0FBR3hCLElBQU0scUJBQXFCO0FBQ3pCLDJCQUR5QjtDQUFyQjtBQUdOLElBQU0sTUFBTSx5QkFBUSxlQUFSLEVBQXlCLGtCQUF6QixFQUE2QyxJQUE3QyxDQUFOOztBQUVOLHNCQUNFOztJQUFVLE9BQU8sS0FBUCxFQUFWO0VBQ0UsOEJBQUMsR0FBRCxPQURGO0NBREYsRUFJRyxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FKSDs7Ozs7Ozs7OztBQ3RDQTs7Ozs7Ozs7QUFFTyxJQUFNLGtEQUFxQiwwQkFBckI7O0FBRWIs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RkwsQ0FOd0Y7Q0FBdEU7O0FBZXBCLElBQU0sa0JBQWtCLFNBQWxCLGVBQWtCLENBQUMsS0FBRCxFQUFXO0FBQ2pDLFNBQU8sTUFBTSxLQUFOLENBRDBCO0NBQVg7QUFHeEIsSUFBTSxxQkFBcUI7QUFDekIsd0JBRHlCO0FBRXpCLHdCQUZ5QjtDQUFyQjtrQkFJUyx5QkFBUSxlQUFSLEVBQXlCLGtCQUF6QixFQUE2QyxXQUE3Qzs7Ozs7Ozs7OztBQzFCZjs7OztBQUNBOzs7Ozs7UUFHRTtRQUNBOzs7Ozs7Ozs7OztBQ0xGOzs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQ01nQjtRQWlCQTtRQU1BO0FBOUJULElBQU0sa0NBQWEsa0JBQWI7QUFDTixJQUFNLGtDQUFhLGtCQUFiOztBQUVOLElBQU0sc0NBQWU7QUFDMUIsYUFBVyxLQUFYO0NBRFc7O0FBSU4sU0FBUyxLQUFULEdBQWtEO01BQW5DLDhEQUFRLDRCQUEyQjtNQUFiLCtEQUFTLGtCQUFJOztBQUN2RCxVQUFRLE9BQU8sSUFBUDtBQUNOLFNBQUssVUFBTDtBQUNFLDBCQUNLO0FBQ0gsbUJBQVcsS0FBWDtRQUZGLENBREY7QUFERixTQU1PLFVBQUw7QUFDRSwwQkFDSyxPQUFPLE9BQVA7QUFDSCxtQkFBVyxJQUFYO1FBRkYsQ0FERjtBQU5GO0FBWUksYUFBTyxLQUFQLENBREY7QUFYRixHQUR1RDtDQUFsRDs7QUFpQkEsU0FBUyxTQUFULEdBQXFCO0FBQzFCLFNBQU87QUFDTCxVQUFNLFVBQU47R0FERixDQUQwQjtDQUFyQjs7QUFNQSxTQUFTLFNBQVQsQ0FBbUIsU0FBbkIsRUFBOEIsVUFBOUIsRUFBMEM7QUFDL0MsU0FBTztBQUNMLFVBQU0sVUFBTjtBQUNBLGFBQVM7QUFDUCwwQkFETztBQUVQLDRCQUZPO0tBQVQ7R0FGRixDQUQrQztDQUExQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtQcm92aWRlciwgY29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCB7TW9kYWxQb3J0YWwsIG1vZGFsLCBzaG93TW9kYWx9IGZyb20gJy4uL3NyYyc7XG5pbXBvcnQgbW9kYWxzLCB7Q09ORklSTUFUSU9OX01PREFMfSBmcm9tICcuL21vZGFscyc7XG5cbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBtb2RhbFxufSk7XG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtzaG93TW9kYWx9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2hvd01vZGFsKENPTkZJUk1BVElPTl9NT0RBTCwge1xuICAgICAgICAgICAgdGl0bGU6ICdmb28nLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdiYXInXG4gICAgICAgICAgfSlcbiAgICAgICAgfX0+U2hvdyBtb2RhbDwvYnV0dG9uPlxuICAgICAgICA8TW9kYWxQb3J0YWwgbW9kYWxzPXttb2RhbHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICgpID0+IHtcbiAgcmV0dXJuIHt9O1xufVxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBzaG93TW9kYWxcbn07XG5jb25zdCBBcHAgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYWluKTtcblxucmVuZGVyKChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPEFwcCAvPlxuICA8L1Byb3ZpZGVyPlxuKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcCcpKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBDT05GSVJNQVRJT05fTU9EQUwgPSAnbW9kYWwvQ09ORklSTUFUSU9OX01PREFMJztcblxuY29uc3QgQ29uZmlybWF0aW9uTW9kYWwgPSAoe3RpdGxlLCBkZXNjcmlwdGlvbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgPGRpdj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyBNYXBzIGBtb2RhbFR5cGVgIHRvIHRoZSBjb3JyZXNwb25kaW5nIG1vZGFsIGNvbXBvbmVudC5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW0NPTkZJUk1BVElPTl9NT0RBTF06IENvbmZpcm1hdGlvbk1vZGFsXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnO1xuXG5jb25zdCBFU0NBUEVfS0VZQ09ERSA9IDI3O1xuXG5jb25zdCBjc3NUcmFuc2l0aW9uR3JvdXBPcHRpb25zID0ge1xuICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0OiA1MDAsXG4gIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ6IDUwMCxcbiAgdHJhbnNpdGlvbk5hbWU6IHtcbiAgICBlbnRlcjogJ2VudGVyJyxcbiAgICBlbnRlckFjdGl2ZTogJ2VudGVyQWN0aXZlJyxcbiAgICBsZWF2ZTogJ2xlYXZlJyxcbiAgICBsZWF2ZUFjdGl2ZTogJ2xlYXZlQWN0aXZlJ1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgaXNWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGhpZGVNb2RhbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICByb290Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbnRlbnRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb3ZlcmxheUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHJvb3RDbGFzc05hbWU6ICdyb290JyxcbiAgICBjb250ZW50Q2xhc3NOYW1lOiAnY29udGVudCcsXG4gICAgb3ZlcmxheUNsYXNzTmFtZTogJ292ZXJsYXknXG4gIH07XG5cbiAgaGlkZU9uT3ZlcmxheUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5yZWZzLm92ZXJsYXkpIHtcbiAgICAgIHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XG4gICAgfVxuICB9O1xuXG4gIGhpZGVPbkVzY2FwZUtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgIHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgY29uc3Qge2lzVmlzaWJsZX0gPSBuZXh0UHJvcHM7XG4gICAgaWYgKGlzVmlzaWJsZSAhPT0gdGhpcy5wcm9wcy5pc1Zpc2libGUpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBpc1Zpc2libGUgPyAnaGlkZGVuJyA6IG51bGw7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMucmVmcy5yb290W3RoaXMucHJvcHMuaXNWaXNpYmxlID8gJ2ZvY3VzJyA6ICdibHVyJ10oKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGlzVmlzaWJsZSxcbiAgICAgIGhpZGVNb2RhbCxcbiAgICAgIGNvbnRlbnRDbGFzc05hbWUsXG4gICAgICBvdmVybGF5Q2xhc3NOYW1lLFxuICAgICAgcm9vdENsYXNzTmFtZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwXG4gICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgIHsuLi5jc3NUcmFuc2l0aW9uR3JvdXBPcHRpb25zfVxuICAgICAgICB7Li4ucmVzdH0+XG4gICAgICAgIHtpc1Zpc2libGUgJiZcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e3Jvb3RDbGFzc05hbWV9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhpZGVPbk92ZXJsYXlDbGlja31cbiAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oaWRlT25Fc2NhcGVLZXlEb3dufVxuICAgICAgICAgICAgcmVmPVwicm9vdFwiXG4gICAgICAgICAgICB0YWJJbmRleD17MX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b3ZlcmxheUNsYXNzTmFtZX0gcmVmPVwib3ZlcmxheVwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGVudENsYXNzTmFtZX0+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgIDwvZGl2Pn1cbiAgICAgIDwvUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXA+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtNb2RhbCwgaGlkZU1vZGFsLCBzaG93TW9kYWx9IGZyb20gJy4uLyc7XG5cbmNvbnN0IE1vZGFsUG9ydGFsID0gKHtoaWRlTW9kYWwsIHNob3dNb2RhbCwgaXNWaXNpYmxlLCBtb2RhbHMsIG1vZGFsUHJvcHMsIG1vZGFsVHlwZX0pID0+IHtcbiAgY29uc3QgcHJvcHMgPSB7XG4gICAgaGlkZU1vZGFsLFxuICAgIGlzVmlzaWJsZVxuICB9O1xuICBjb25zdCBTcGVjaWZpY01vZGFsID0gbW9kYWxzW21vZGFsVHlwZV07XG4gIHJldHVybiAoXG4gICAgPE1vZGFsIHsuLi5wcm9wc30+XG4gICAgICB7U3BlY2lmaWNNb2RhbFxuICAgICAgICA/IDxTcGVjaWZpY01vZGFsIHsuLi5tb2RhbFByb3BzfSAvPlxuICAgICAgICA6IDxzcGFuIC8+fVxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHN0YXRlLm1vZGFsO1xufTtcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgaGlkZU1vZGFsLFxuICBzaG93TW9kYWxcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNb2RhbFBvcnRhbCk7XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCc7XG5pbXBvcnQgTW9kYWxQb3J0YWwgZnJvbSAnLi9Nb2RhbFBvcnRhbCc7XG5cbmV4cG9ydCB7XG4gIE1vZGFsLFxuICBNb2RhbFBvcnRhbFxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vcmVkdXgnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzJztcbiIsImV4cG9ydCBjb25zdCBISURFX01PREFMID0gJ21vZGFsL0hJREVfTU9EQUwnO1xuZXhwb3J0IGNvbnN0IFNIT1dfTU9EQUwgPSAnbW9kYWwvU0hPV19NT0RBTCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzVmlzaWJsZTogZmFsc2Vcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtb2RhbChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSElERV9NT0RBTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1Zpc2libGU6IGZhbHNlXG4gICAgICB9O1xuICAgIGNhc2UgU0hPV19NT0RBTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgICBpc1Zpc2libGU6IHRydWVcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZU1vZGFsKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEhJREVfTU9EQUxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNb2RhbChtb2RhbFR5cGUsIG1vZGFsUHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTSE9XX01PREFMLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIG1vZGFsVHlwZSxcbiAgICAgIG1vZGFsUHJvcHNcbiAgICB9XG4gIH07XG59XG4iXX0=
