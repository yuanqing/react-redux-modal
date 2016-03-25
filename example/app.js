(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _src = require('../src');

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
      var _props = this.props;
      var showModal = _props.showModal;
      var hideModal = _props.hideModal;
      var modalProps = _props.modalProps;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { onClick: showModal },
          'Show modal'
        ),
        _react2.default.createElement(_src.ModalPortal, modalProps)
      );
    }
  }]);

  return Main;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var modal = _ref.modal;

  return {
    modal: modal
  };
};
var mapDispatchToProps = {
  hideModal: _src.hideModal,
  showModal: _src.showModal
};
var App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Main);

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(App, null)
), document.querySelector('.app'));

},{"../src":5,"react":"react","react-dom":"react-dom","react-redux":"react-redux","redux":"redux"}],2:[function(require,module,exports){
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
    value: function componentDidUpdate(prevProps) {
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
        }, rest),
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

},{"react":"react","react-addons-css-transition-group":"react-addons-css-transition-group"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalPortal = function ModalPortal(_ref) {
  var hideModal = _ref.hideModal;
  var showModal = _ref.showModal;
  var isVisible = _ref.isVisible;
  var modalProps = _ref.modalProps;
  var modalType = _ref.modalType;

  var props = _extends({
    transitionEnterTimeout: 500,
    transitionLeaveTimeout: 500,
    transitionName: {
      enter: 'enter',
      enterActive: 'enterActive',
      leave: 'leave',
      leaveActive: 'leaveActive'
    }
  }, modalProps, {
    hideModal: hideModal,
    showModal: showModal,
    isVisible: isVisible
  });
  return _react2.default.createElement(
    _.Modal,
    props,
    modalType && isVisible ? _react2.default.createElement(
      'div',
      null,
      'Modal'
    ) : _react2.default.createElement('span', null)
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return state.modal;
};
var mapDispatchToProps = {
  hideModal: _.hideModal
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ModalPortal);

},{"../":5,"react":"react","react-redux":"react-redux"}],4:[function(require,module,exports){
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

},{"./Modal":2,"./ModalPortal":3}],5:[function(require,module,exports){
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

},{"./components":4,"./redux":6}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.modal = modal;
exports.hideModal = hideModal;
exports.showModal = showModal;
exports.toggleModal = toggleModal;
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

function toggleModal() {
  return {
    type: TOGGLE_MODAL
  };
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL2luZGV4LmpzIiwic3JjL2NvbXBvbmVudHMvTW9kYWwuanMiLCJzcmMvY29tcG9uZW50cy9Nb2RhbFBvcnRhbC5qcyIsInNyYy9jb21wb25lbnRzL2luZGV4LmpzIiwic3JjL2luZGV4LmpzIiwic3JjL3JlZHV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0FBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFVBQVUsNEJBQWdCO0FBQzlCLG1CQUQ4QjtDQUFoQixDQUFWO0FBR04sSUFBTSxRQUFRLHdCQUFZLE9BQVosQ0FBUjs7SUFFQTs7Ozs7Ozs7Ozs7NkJBQ0s7bUJBQ29DLEtBQUssS0FBTCxDQURwQztVQUNBLDZCQURBO1VBQ1csNkJBRFg7VUFDc0IsK0JBRHRCOztBQUVQLGFBQ0U7OztRQUNFOztZQUFRLFNBQVMsU0FBVCxFQUFSOztTQURGO1FBRUUsZ0RBQWlCLFVBQWpCLENBRkY7T0FERixDQUZPOzs7O1NBREw7OztBQVlOLElBQU0sa0JBQWtCLFNBQWxCLGVBQWtCLE9BQWE7TUFBWCxtQkFBVzs7QUFDbkMsU0FBTztBQUNMLGdCQURLO0dBQVAsQ0FEbUM7Q0FBYjtBQUt4QixJQUFNLHFCQUFxQjtBQUN6QiwyQkFEeUI7QUFFekIsMkJBRnlCO0NBQXJCO0FBSU4sSUFBTSxNQUFNLHlCQUFRLGVBQVIsRUFBeUIsa0JBQXpCLEVBQTZDLElBQTdDLENBQU47O0FBRU4sc0JBQ0U7O0lBQVUsT0FBTyxLQUFQLEVBQVY7RUFDRSw4QkFBQyxHQUFELE9BREY7Q0FERixFQUlHLFNBQVMsYUFBVCxDQUF1QixNQUF2QixDQUpIOzs7Ozs7Ozs7Ozs7O0FDbkNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxpQkFBaUIsRUFBakI7O0lBRWU7Ozs7Ozs7Ozs7Ozs7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QkFBYjs7QUFFTixJQUFNLHNDQUFlO0FBQzFCLGFBQVcsS0FBWDtDQURXOztBQUlOLFNBQVMsS0FBVCxHQUFrRDtNQUFuQyw4REFBUSw0QkFBMkI7TUFBYiwrREFBUyxrQkFBSTs7QUFDdkQsVUFBUSxPQUFPLElBQVA7QUFDTixTQUFLLFVBQUw7QUFDRSwwQkFDSztBQUNILG1CQUFXLEtBQVg7UUFGRixDQURGO0FBREYsU0FNTyxVQUFMO0FBQ0UsMEJBQ0ssT0FBTyxPQUFQO0FBQ0gsbUJBQVcsSUFBWDtRQUZGLENBREY7QUFORjtBQVlJLGFBQU8sS0FBUCxDQURGO0FBWEYsR0FEdUQ7Q0FBbEQ7O0FBaUJBLFNBQVMsU0FBVCxHQUFxQjtBQUMxQixTQUFPO0FBQ0wsVUFBTSxVQUFOO0dBREYsQ0FEMEI7Q0FBckI7O0FBTUEsU0FBUyxTQUFULENBQW1CLFNBQW5CLEVBQThCLFVBQTlCLEVBQTBDO0FBQy9DLFNBQU87QUFDTCxVQUFNLFVBQU47QUFDQSxhQUFTO0FBQ1AsMEJBRE87QUFFUCw0QkFGTztLQUFUO0dBRkYsQ0FEK0M7Q0FBMUM7O0FBVUEsU0FBUyxXQUFULEdBQXVCO0FBQzVCLFNBQU87QUFDTCxVQUFNLFlBQU47R0FERixDQUQ0QjtDQUF2QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtQcm92aWRlciwgY29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCB7TW9kYWxQb3J0YWwsIG1vZGFsLCBoaWRlTW9kYWwsIHNob3dNb2RhbH0gZnJvbSAnLi4vc3JjJztcblxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIG1vZGFsXG59KTtcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcik7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3Nob3dNb2RhbCwgaGlkZU1vZGFsLCBtb2RhbFByb3BzfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd01vZGFsfT5TaG93IG1vZGFsPC9idXR0b24+XG4gICAgICAgIDxNb2RhbFBvcnRhbCB7Li4ubW9kYWxQcm9wc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHttb2RhbH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtb2RhbFxuICB9O1xufTtcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgaGlkZU1vZGFsLFxuICBzaG93TW9kYWxcbn07XG5jb25zdCBBcHAgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYWluKTtcblxucmVuZGVyKChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPEFwcCAvPlxuICA8L1Byb3ZpZGVyPlxuKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcCcpKTtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgUHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJztcblxuY29uc3QgRVNDQVBFX0tFWUNPREUgPSAyNztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGlzVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBoaWRlTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcm9vdENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb250ZW50Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG92ZXJsYXlDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICByb290Q2xhc3NOYW1lOiAncm9vdCcsXG4gICAgY29udGVudENsYXNzTmFtZTogJ2NvbnRlbnQnLFxuICAgIG92ZXJsYXlDbGFzc05hbWU6ICdvdmVybGF5J1xuICB9XG5cbiAgaGlkZU9uT3ZlcmxheUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5yZWZzLm92ZXJsYXkpIHtcbiAgICAgIHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XG4gICAgfVxuICB9O1xuXG4gIGhpZGVPbkVzY2FwZUtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgIHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgY29uc3Qge2lzVmlzaWJsZX0gPSBuZXh0UHJvcHM7XG4gICAgaWYgKGlzVmlzaWJsZSAhPT0gdGhpcy5wcm9wcy5pc1Zpc2libGUpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBpc1Zpc2libGUgPyAnaGlkZGVuJyA6IG51bGw7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHRoaXMucmVmcy5yb290W3RoaXMucHJvcHMuaXNWaXNpYmxlID8gJ2ZvY3VzJyA6ICdibHVyJ10oKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGlzVmlzaWJsZSxcbiAgICAgIGhpZGVNb2RhbCxcbiAgICAgIGNvbnRlbnRDbGFzc05hbWUsXG4gICAgICBvdmVybGF5Q2xhc3NOYW1lLFxuICAgICAgcm9vdENsYXNzTmFtZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwXG4gICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgIHsuLi5yZXN0fT5cbiAgICAgICAge2lzVmlzaWJsZSAmJlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17cm9vdENsYXNzTmFtZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGlkZU9uT3ZlcmxheUNsaWNrfVxuICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhpZGVPbkVzY2FwZUtleURvd259XG4gICAgICAgICAgICByZWY9XCJyb290XCJcbiAgICAgICAgICAgIHRhYkluZGV4PXsxfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtvdmVybGF5Q2xhc3NOYW1lfSByZWY9XCJvdmVybGF5XCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250ZW50Q2xhc3NOYW1lfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgPC9kaXY+fVxuICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25Hcm91cD5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge01vZGFsLCBoaWRlTW9kYWx9IGZyb20gJy4uLyc7XG5cbmNvbnN0IE1vZGFsUG9ydGFsID0gKHtoaWRlTW9kYWwsIHNob3dNb2RhbCwgaXNWaXNpYmxlLCBtb2RhbFByb3BzLCBtb2RhbFR5cGV9KSA9PiB7XG4gIGNvbnN0IHByb3BzID0ge1xuICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ6IDUwMCxcbiAgICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0OiA1MDAsXG4gICAgdHJhbnNpdGlvbk5hbWU6IHtcbiAgICAgIGVudGVyOiAnZW50ZXInLFxuICAgICAgZW50ZXJBY3RpdmU6ICdlbnRlckFjdGl2ZScsXG4gICAgICBsZWF2ZTogJ2xlYXZlJyxcbiAgICAgIGxlYXZlQWN0aXZlOiAnbGVhdmVBY3RpdmUnXG4gICAgfSxcbiAgICAuLi5tb2RhbFByb3BzLFxuICAgIGhpZGVNb2RhbCxcbiAgICBzaG93TW9kYWwsXG4gICAgaXNWaXNpYmxlXG4gIH07XG4gIHJldHVybiAoXG4gICAgPE1vZGFsIHsuLi5wcm9wc30+XG4gICAgICB7bW9kYWxUeXBlICYmIGlzVmlzaWJsZVxuICAgICAgICA/IDxkaXY+TW9kYWw8L2Rpdj5cbiAgICAgICAgOiA8c3BhbiAvPn1cbiAgICA8L01vZGFsPlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiBzdGF0ZS5tb2RhbDtcbn07XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGhpZGVNb2RhbFxufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1vZGFsUG9ydGFsKTtcbiIsImltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJztcbmltcG9ydCBNb2RhbFBvcnRhbCBmcm9tICcuL01vZGFsUG9ydGFsJztcblxuZXhwb3J0IHtcbiAgTW9kYWwsXG4gIE1vZGFsUG9ydGFsXG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3JlZHV4JztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cyc7XG4iLCJleHBvcnQgY29uc3QgSElERV9NT0RBTCA9ICdtb2RhbC9ISURFX01PREFMJztcbmV4cG9ydCBjb25zdCBTSE9XX01PREFMID0gJ21vZGFsL1NIT1dfTU9EQUwnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc1Zpc2libGU6IGZhbHNlXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbW9kYWwoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEhJREVfTU9EQUw6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNWaXNpYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICBjYXNlIFNIT1dfTU9EQUw6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgaXNWaXNpYmxlOiB0cnVlXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVNb2RhbCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBISURFX01PREFMXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93TW9kYWwobW9kYWxUeXBlLCBtb2RhbFByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0hPV19NT0RBTCxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBtb2RhbFR5cGUsXG4gICAgICBtb2RhbFByb3BzXG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlTW9kYWwoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVE9HR0xFX01PREFMXG4gIH07XG59XG4iXX0=
