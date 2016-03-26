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

var ModalPortal = exports.ModalPortal = function ModalPortal(_ref) {
  var hideModal = _ref.hideModal;
  var showModal = _ref.showModal;
  var isVisible = _ref.isVisible;
  var modals = _ref.modals;
  var modalProps = _ref.modalProps;
  var modalType = _ref.modalType;

  var props = {
    hideModal: hideModal,
    showModal: showModal,
    isVisible: isVisible
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL2luZGV4LmpzIiwiZXhhbXBsZS9tb2RhbHMvY29uZmlybWF0aW9uTW9kYWwuanMiLCJleGFtcGxlL21vZGFscy9pbmRleC5qcyIsInNyYy9jb21wb25lbnRzL01vZGFsLmpzIiwic3JjL2NvbXBvbmVudHMvTW9kYWxQb3J0YWwuanMiLCJzcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInNyYy9pbmRleC5qcyIsInNyYy9yZWR1eC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUNBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFVBQVUsNEJBQWdCO0FBQzlCLG1CQUQ4QjtDQUFoQixDQUFWO0FBR04sSUFBTSxRQUFRLHdCQUFZLE9BQVosQ0FBUjs7SUFFQTs7Ozs7Ozs7Ozs7NkJBQ0s7VUFDQSxZQUFhLEtBQUssS0FBTCxDQUFiLFVBREE7O0FBRVAsYUFDRTs7O1FBQ0U7O1lBQUssV0FBVSxNQUFWLEVBQUw7VUFDRTs7Y0FBUSxTQUFTLG1CQUFNO0FBQ3JCLGlFQUE4QjtBQUM1Qix5QkFBTyxLQUFQO0FBQ0EsK0JBQWEsS0FBYjtpQkFGRixFQURxQjtlQUFOLEVBQWpCOztXQURGO1NBREY7UUFTRSxrREFBYSwwQkFBYixDQVRGO09BREYsQ0FGTzs7OztTQURMOzs7QUFtQk4sSUFBTSxrQkFBa0IsU0FBbEIsZUFBa0IsR0FBTTtBQUM1QixTQUFPLEVBQVAsQ0FENEI7Q0FBTjtBQUd4QixJQUFNLHFCQUFxQjtBQUN6QiwyQkFEeUI7Q0FBckI7QUFHTixJQUFNLE1BQU0seUJBQVEsZUFBUixFQUF5QixrQkFBekIsRUFBNkMsSUFBN0MsQ0FBTjs7QUFFTixzQkFDRTs7SUFBVSxPQUFPLEtBQVAsRUFBVjtFQUNFLDhCQUFDLEdBQUQsT0FERjtDQURGLEVBSUcsU0FBUyxhQUFULENBQXVCLE1BQXZCLENBSkg7Ozs7Ozs7OztBQ3pDQTs7Ozs7O2tCQUVlLGdCQUEwQjtNQUF4QixtQkFBd0I7TUFBakIsK0JBQWlCOztBQUN2QyxTQUNFOzs7SUFDRTs7O01BQUssS0FBTDtLQURGO0lBRUU7OztNQUFNLFdBQU47S0FGRjtHQURGLENBRHVDO0NBQTFCOzs7Ozs7Ozs7QUNGZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxpQkFBaUIsRUFBakI7O0FBRU4sSUFBTSw0QkFBNEI7QUFDaEMsMEJBQXdCLEdBQXhCO0FBQ0EsMEJBQXdCLEdBQXhCO0FBQ0Esa0JBQWdCO0FBQ2QsV0FBTyxPQUFQO0FBQ0EsaUJBQWEsYUFBYjtBQUNBLFdBQU8sT0FBUDtBQUNBLGlCQUFhLGFBQWI7R0FKRjtDQUhJOztJQVdlOzs7Ozs7Ozs7Ozs7OzttTUFnQm5CLHFCQUFxQixVQUFDLEtBQUQsRUFBVztBQUM5QixVQUFJLE1BQU0sTUFBTixLQUFpQixNQUFLLElBQUwsQ0FBVSxjQUFWLEVBQTBCO0FBQzdDLGNBQUssS0FBTCxDQUFXLFNBQVgsR0FENkM7T0FBL0M7S0FEbUIsUUFNckIsc0JBQXNCLFVBQUMsS0FBRCxFQUFXO0FBQy9CLFVBQUksTUFBTSxPQUFOLEtBQWtCLGNBQWxCLEVBQWtDO0FBQ3BDLGNBQUssS0FBTCxDQUFXLFNBQVgsR0FEb0M7T0FBdEM7S0FEb0I7OztlQXRCSDs7d0NBNEJDLFdBQVc7VUFDdEIsWUFBYSxVQUFiLFVBRHNCOztBQUU3QixVQUFJLGNBQWMsS0FBSyxLQUFMLENBQVcsU0FBWCxFQUFzQjtBQUN0QyxpQkFBUyxJQUFULENBQWMsS0FBZCxDQUFvQixRQUFwQixHQUErQixZQUFZLFFBQVosR0FBdUIsSUFBdkIsQ0FETztPQUF4Qzs7Ozt5Q0FLbUI7QUFDbkIsV0FBSyxJQUFMLENBQVUsY0FBVixDQUF5QixLQUFLLEtBQUwsQ0FBVyxTQUFYLEdBQXVCLE9BQXZCLEdBQWlDLE1BQWpDLENBQXpCLEdBRG1COzs7OzZCQUlaO21CQVNILEtBQUssS0FBTCxDQVRHO1VBRUwsMkJBRks7VUFHTCw2QkFISztVQUlMLDZCQUpLO1VBS0wsMkNBTEs7VUFNTCx5REFOSztVQU9MLDJDQVBLOztVQVFGLG1KQVJFOztBQVVQLGFBQ0U7OztBQUNFLHFCQUFVLEtBQVY7V0FDSSwyQkFDQSxLQUhOO1FBSUcsYUFDQzs7O1VBQ0UsdUNBQUssV0FBVyxnQkFBWCxFQUFMLENBREY7VUFFRTs7O0FBQ0UseUJBQVcsdUJBQVg7QUFDQSx1QkFBUyxLQUFLLGtCQUFMO0FBQ1QseUJBQVcsS0FBSyxtQkFBTDtBQUNYLG1CQUFJLGdCQUFKO0FBQ0Esd0JBQVUsQ0FBVixFQUxGO1lBTUU7O2dCQUFLLFdBQVcsZ0JBQVgsRUFBTDtjQUFtQyxRQUFuQzthQU5GO1dBRkY7U0FERDtPQUxMLENBVk87Ozs7U0F2Q1U7OztNQUNaLFlBQVk7QUFDakIsWUFBVSxpQkFBVSxJQUFWO0FBQ1YsYUFBVyxpQkFBVSxJQUFWLENBQWUsVUFBZjtBQUNYLGFBQVcsaUJBQVUsSUFBVixDQUFlLFVBQWY7QUFDWCxpQkFBZSxpQkFBVSxNQUFWO0FBQ2Ysb0JBQWtCLGlCQUFVLE1BQVY7QUFDbEIsb0JBQWtCLGlCQUFVLE1BQVY7O0FBUEQsTUFVWixlQUFlO0FBQ3BCLG9CQUFrQixTQUFsQjtBQUNBLDJCQUF5QixnQkFBekI7QUFDQSxvQkFBa0IsU0FBbEI7O2tCQWJpQjs7Ozs7Ozs7Ozs7O0FDaEJyQjs7OztBQUNBOztBQUNBOzs7O0FBRU8sSUFBTSxvQ0FBYyxTQUFkLFdBQWMsT0FBc0U7TUFBcEUsMkJBQW9FO01BQXpELDJCQUF5RDtNQUE5QywyQkFBOEM7TUFBbkMscUJBQW1DO01BQTNCLDZCQUEyQjtNQUFmLDJCQUFlOztBQUMvRixNQUFNLFFBQVE7QUFDWix3QkFEWTtBQUVaLHdCQUZZO0FBR1osd0JBSFk7R0FBUixDQUR5RjtBQU0vRixNQUFNLGdCQUFnQixPQUFPLFNBQVAsQ0FBaEIsQ0FOeUY7QUFPL0YsU0FDRTs7SUFBVyxLQUFYO0lBQ0UsOEJBQUMsYUFBRCxlQUFtQixPQUFXLFdBQTlCLENBREY7R0FERixDQVArRjtDQUF0RTs7QUFjM0IsSUFBTSxrQkFBa0IsU0FBbEIsZUFBa0IsQ0FBQyxLQUFELEVBQVc7QUFDakMsU0FBTyxNQUFNLEtBQU4sQ0FEMEI7Q0FBWDtBQUd4QixJQUFNLHFCQUFxQjtBQUN6Qix3QkFEeUI7QUFFekIsd0JBRnlCO0NBQXJCO2tCQUlTLHlCQUFRLGVBQVIsRUFBeUIsa0JBQXpCLEVBQTZDLFdBQTdDOzs7Ozs7Ozs7O0FDekJmOzs7O0FBQ0E7Ozs7OztRQUdFO1FBQ0E7Ozs7Ozs7Ozs7O0FDTEY7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDTWdCO1FBaUJBO1FBTUE7QUE5QlQsSUFBTSxrQ0FBYSxrQkFBYjtBQUNOLElBQU0sa0NBQWEsa0JBQWI7O0FBRU4sSUFBTSxzQ0FBZTtBQUMxQixhQUFXLEtBQVg7Q0FEVzs7QUFJTixTQUFTLEtBQVQsR0FBa0Q7TUFBbkMsOERBQVEsNEJBQTJCO01BQWIsK0RBQVMsa0JBQUk7O0FBQ3ZELFVBQVEsT0FBTyxJQUFQO0FBQ04sU0FBSyxVQUFMO0FBQ0UsMEJBQ0s7QUFDSCxtQkFBVyxLQUFYO1FBRkYsQ0FERjtBQURGLFNBTU8sVUFBTDtBQUNFLDBCQUNLLE9BQU8sT0FBUDtBQUNILG1CQUFXLElBQVg7UUFGRixDQURGO0FBTkY7QUFZSSxhQUFPLEtBQVAsQ0FERjtBQVhGLEdBRHVEO0NBQWxEOztBQWlCQSxTQUFTLFNBQVQsR0FBcUI7QUFDMUIsU0FBTztBQUNMLFVBQU0sVUFBTjtHQURGLENBRDBCO0NBQXJCOztBQU1BLFNBQVMsU0FBVCxDQUFtQixTQUFuQixFQUE4QixVQUE5QixFQUEwQztBQUMvQyxTQUFPO0FBQ0wsVUFBTSxVQUFOO0FBQ0EsYUFBUztBQUNQLDBCQURPO0FBRVAsNEJBRk87S0FBVDtHQUZGLENBRCtDO0NBQTFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge1Byb3ZpZGVyLCBjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2NvbWJpbmVSZWR1Y2VycywgY3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IHtNb2RhbFBvcnRhbCwgbW9kYWwsIHNob3dNb2RhbH0gZnJvbSAnLi4vc3JjJztcbmltcG9ydCBtb2RhbHMgZnJvbSAnLi9tb2RhbHMnO1xuaW1wb3J0IHtDT05GSVJNQVRJT05fTU9EQUx9IGZyb20gJy4vbW9kYWxzL2NvbmZpcm1hdGlvbk1vZGFsJztcblxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIG1vZGFsXG59KTtcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcik7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3Nob3dNb2RhbH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNob3dNb2RhbChDT05GSVJNQVRJT05fTU9EQUwsIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdmb28nLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2JhcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfX0+U2hvdyBtb2RhbDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1vZGFsUG9ydGFsIG1vZGFscz17bW9kYWxzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoKSA9PiB7XG4gIHJldHVybiB7fTtcbn1cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgc2hvd01vZGFsXG59O1xuY29uc3QgQXBwID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWFpbik7XG5cbnJlbmRlcigoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxBcHAgLz5cbiAgPC9Qcm92aWRlcj5cbiksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAnKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoe3RpdGxlLCBkZXNjcmlwdGlvbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgPGRpdj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IENvbmZpcm1hdGlvbk1vZGFsLCB7Q09ORklSTUFUSU9OX01PREFMfSBmcm9tICcuL2NvbmZpcm1hdGlvbk1vZGFsJztcblxuLy8gTWFwcyBlYWNoIGBtb2RhbFR5cGVgIHRvIHRoZSBjb3JyZXNwb25kaW5nIG1vZGFsIGNvbXBvbmVudC5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW0NPTkZJUk1BVElPTl9NT0RBTF06IENvbmZpcm1hdGlvbk1vZGFsXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnO1xuXG5jb25zdCBFU0NBUEVfS0VZQ09ERSA9IDI3O1xuXG5jb25zdCBjc3NUcmFuc2l0aW9uR3JvdXBPcHRpb25zID0ge1xuICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0OiA1MDAsXG4gIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ6IDUwMCxcbiAgdHJhbnNpdGlvbk5hbWU6IHtcbiAgICBlbnRlcjogJ2VudGVyJyxcbiAgICBlbnRlckFjdGl2ZTogJ2VudGVyQWN0aXZlJyxcbiAgICBsZWF2ZTogJ2xlYXZlJyxcbiAgICBsZWF2ZUFjdGl2ZTogJ2xlYXZlQWN0aXZlJ1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGlzVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBoaWRlTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcm9vdENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb250ZW50Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG92ZXJsYXlDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb250ZW50Q2xhc3NOYW1lOiAnY29udGVudCcsXG4gICAgY29udGVudFdyYXBwZXJDbGFzc05hbWU6ICdjb250ZW50V3JhcHBlcicsXG4gICAgb3ZlcmxheUNsYXNzTmFtZTogJ292ZXJsYXknXG4gIH07XG5cbiAgaGlkZU9uT3ZlcmxheUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5yZWZzLmNvbnRlbnRXcmFwcGVyKSB7XG4gICAgICB0aGlzLnByb3BzLmhpZGVNb2RhbCgpO1xuICAgIH1cbiAgfTtcblxuICBoaWRlT25Fc2NhcGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICB0aGlzLnByb3BzLmhpZGVNb2RhbCgpO1xuICAgIH1cbiAgfTtcblxuICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHtpc1Zpc2libGV9ID0gbmV4dFByb3BzO1xuICAgIGlmIChpc1Zpc2libGUgIT09IHRoaXMucHJvcHMuaXNWaXNpYmxlKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gaXNWaXNpYmxlID8gJ2hpZGRlbicgOiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLnJlZnMuY29udGVudFdyYXBwZXJbdGhpcy5wcm9wcy5pc1Zpc2libGUgPyAnZm9jdXMnIDogJ2JsdXInXSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaXNWaXNpYmxlLFxuICAgICAgaGlkZU1vZGFsLFxuICAgICAgY29udGVudENsYXNzTmFtZSxcbiAgICAgIGNvbnRlbnRXcmFwcGVyQ2xhc3NOYW1lLFxuICAgICAgb3ZlcmxheUNsYXNzTmFtZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwXG4gICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgIHsuLi5jc3NUcmFuc2l0aW9uR3JvdXBPcHRpb25zfVxuICAgICAgICB7Li4ucmVzdH0+XG4gICAgICAgIHtpc1Zpc2libGUgJiZcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e292ZXJsYXlDbGFzc05hbWV9IC8+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29udGVudFdyYXBwZXJDbGFzc05hbWV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGlkZU9uT3ZlcmxheUNsaWNrfVxuICAgICAgICAgICAgICBvbktleURvd249e3RoaXMuaGlkZU9uRXNjYXBlS2V5RG93bn1cbiAgICAgICAgICAgICAgcmVmPVwiY29udGVudFdyYXBwZXJcIlxuICAgICAgICAgICAgICB0YWJJbmRleD17MX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250ZW50Q2xhc3NOYW1lfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj59XG4gICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7TW9kYWwsIGhpZGVNb2RhbCwgc2hvd01vZGFsfSBmcm9tICcuLi8nO1xuXG5leHBvcnQgY29uc3QgTW9kYWxQb3J0YWwgPSAoe2hpZGVNb2RhbCwgc2hvd01vZGFsLCBpc1Zpc2libGUsIG1vZGFscywgbW9kYWxQcm9wcywgbW9kYWxUeXBlfSkgPT4ge1xuICBjb25zdCBwcm9wcyA9IHtcbiAgICBoaWRlTW9kYWwsXG4gICAgc2hvd01vZGFsLFxuICAgIGlzVmlzaWJsZVxuICB9O1xuICBjb25zdCBTcGVjaWZpY01vZGFsID0gbW9kYWxzW21vZGFsVHlwZV07XG4gIHJldHVybiAoXG4gICAgPE1vZGFsIHsuLi5wcm9wc30+XG4gICAgICA8U3BlY2lmaWNNb2RhbCB7Li4ucHJvcHN9IHsuLi5tb2RhbFByb3BzfSAvPlxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHN0YXRlLm1vZGFsO1xufTtcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgaGlkZU1vZGFsLFxuICBzaG93TW9kYWxcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNb2RhbFBvcnRhbCk7XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCc7XG5pbXBvcnQgTW9kYWxQb3J0YWwgZnJvbSAnLi9Nb2RhbFBvcnRhbCc7XG5cbmV4cG9ydCB7XG4gIE1vZGFsLFxuICBNb2RhbFBvcnRhbFxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vcmVkdXgnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzJztcbiIsImV4cG9ydCBjb25zdCBISURFX01PREFMID0gJ21vZGFsL0hJREVfTU9EQUwnO1xuZXhwb3J0IGNvbnN0IFNIT1dfTU9EQUwgPSAnbW9kYWwvU0hPV19NT0RBTCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzVmlzaWJsZTogZmFsc2Vcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtb2RhbChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSElERV9NT0RBTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1Zpc2libGU6IGZhbHNlXG4gICAgICB9O1xuICAgIGNhc2UgU0hPV19NT0RBTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgICBpc1Zpc2libGU6IHRydWVcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZU1vZGFsKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEhJREVfTU9EQUxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNb2RhbChtb2RhbFR5cGUsIG1vZGFsUHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTSE9XX01PREFMLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIG1vZGFsVHlwZSxcbiAgICAgIG1vZGFsUHJvcHNcbiAgICB9XG4gIH07XG59XG4iXX0=
