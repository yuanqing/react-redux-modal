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
      var toggleModal = this.props.toggleModal;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { onClick: toggleModal },
          'Toggle modal'
        ),
        _react2.default.createElement(
          _src2.default,
          {
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 500,
            transitionName: {
              enter: 'enter',
              enterActive: 'enterActive',
              leave: 'leave',
              leaveActive: 'leaveActive'
            } },
          _react2.default.createElement(
            'div',
            null,
            'Modal'
          )
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
  hideModal: _src.hideModal,
  showModal: _src.showModal,
  toggleModal: _src.toggleModal
};
var App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Main);

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(App, null)
), document.querySelector('.app'));

},{"../src":2,"react":"react","react-dom":"react-dom","react-redux":"react-redux","redux":"redux"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.TOGGLE_MODAL = exports.SHOW_MODAL = exports.HIDE_MODAL = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.modal = modal;
exports.hideModal = hideModal;
exports.showModal = showModal;
exports.toggleModal = toggleModal;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HIDE_MODAL = exports.HIDE_MODAL = 'modal/HIDE_MODAL';
var SHOW_MODAL = exports.SHOW_MODAL = 'modal/SHOW_MODAL';
var TOGGLE_MODAL = exports.TOGGLE_MODAL = 'modal/TOGGLE_MODAL';

var initialState = exports.initialState = {
  isVisible: false
};

function modal() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  switch (action.type) {
    case HIDE_MODAL:
      return {
        isVisible: false
      };
    case SHOW_MODAL:
      return {
        isVisible: true
      };
    case TOGGLE_MODAL:
      return {
        isVisible: !state.isVisible
      };
    default:
      return state;
  }
}

function hideModal() {
  return {
    type: HIDE_MODAL
  };
}

function showModal() {
  return {
    type: SHOW_MODAL
  };
}

function toggleModal() {
  return {
    type: TOGGLE_MODAL
  };
}

var ModalContent = function (_Component) {
  _inherits(ModalContent, _Component);

  function ModalContent() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, ModalContent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ModalContent)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.hideOnOverlayClick = function (event) {
      if (event.target === _this.refs.overlay) {
        _this.props.hideModal();
      }
    }, _this.hideOnEscapeKeyDown = function (event) {
      if (event.keyCode === ESCAPE_KEYCODE) {
        _this.props.hideModal();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ModalContent, [{
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

  return ModalContent;
}(_react.Component);

ModalContent.propTypes = {
  children: _react.PropTypes.node.isRequired,

  isVisible: _react.PropTypes.bool.isRequired,
  hideModal: _react.PropTypes.func.isRequired,

  rootClassName: _react.PropTypes.string,
  contentClassName: _react.PropTypes.string,
  overlayClassName: _react.PropTypes.string
};
ModalContent.defaultProps = {
  rootClassName: 'root',
  contentClassName: 'content',
  overlayClassName: 'overlay'
};


var isModalPortalInDom = false;

var ESCAPE_KEYCODE = 27;

var Modal = function (_Component2) {
  _inherits(Modal, _Component2);

  function Modal() {
    var _Object$getPrototypeO2;

    var _temp2, _this2, _ret2;

    _classCallCheck(this, Modal);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO2 = Object.getPrototypeOf(Modal)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this2), _this2.renderModal = function () {
      (0, _reactDom.render)(_react2.default.createElement(ModalContent, _this2.props), _this2.node);
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!isModalPortalInDom) {
        isModalPortalInDom = true;
        this.node = document.createElement('div');
        document.body.appendChild(this.node);
      }
      this.renderModal();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.renderModal();
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Modal;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    isVisible: state.modal.isVisible
  };
};
var mapDispatchToProps = {
  hideModal: hideModal
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Modal);

},{"react":"react","react-addons-css-transition-group":"react-addons-css-transition-group","react-dom":"react-dom","react-redux":"react-redux"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL2luZGV4LmpzIiwic3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0FBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sVUFBVSw0QkFBZ0I7QUFDOUIsbUJBRDhCO0NBQWhCLENBQVY7QUFHTixJQUFNLFFBQVEsd0JBQVksT0FBWixDQUFSOztJQUVBOzs7Ozs7Ozs7Ozs2QkFDSztVQUNBLGNBQWUsS0FBSyxLQUFMLENBQWYsWUFEQTs7QUFFUCxhQUNFOzs7UUFDRTs7WUFBUSxTQUFTLFdBQVQsRUFBUjs7U0FERjtRQUVFOzs7QUFDRSxvQ0FBd0IsR0FBeEI7QUFDQSxvQ0FBd0IsR0FBeEI7QUFDQSw0QkFBZ0I7QUFDZCxxQkFBTyxPQUFQO0FBQ0EsMkJBQWEsYUFBYjtBQUNBLHFCQUFPLE9BQVA7QUFDQSwyQkFBYSxhQUFiO2FBSkYsRUFIRjtVQVNFOzs7O1dBVEY7U0FGRjtPQURGLENBRk87Ozs7U0FETDs7O0FBc0JOLElBQU0sa0JBQWtCLFNBQWxCLGVBQWtCO1NBQU87Q0FBUDtBQUN4QixJQUFNLHFCQUFxQjtBQUN6QiwyQkFEeUI7QUFFekIsMkJBRnlCO0FBR3pCLCtCQUh5QjtDQUFyQjtBQUtOLElBQU0sTUFBTSx5QkFBUSxlQUFSLEVBQXlCLGtCQUF6QixFQUE2QyxJQUE3QyxDQUFOOztBQUVOLHNCQUNFOztJQUFVLE9BQU8sS0FBUCxFQUFWO0VBQ0UsOEJBQUMsR0FBRCxPQURGO0NBREYsRUFJRyxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FKSDs7Ozs7Ozs7Ozs7Ozs7UUM3QmdCO1FBbUJBO1FBTUE7UUFNQTs7QUE1Q2hCOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTSxrQ0FBYSxrQkFBYjtBQUNOLElBQU0sa0NBQWEsa0JBQWI7QUFDTixJQUFNLHNDQUFlLG9CQUFmOztBQUVOLElBQU0sc0NBQWU7QUFDMUIsYUFBVyxLQUFYO0NBRFc7O0FBSU4sU0FBUyxLQUFULEdBQWtEO01BQW5DLDhEQUFRLDRCQUEyQjtNQUFiLCtEQUFTLGtCQUFJOztBQUN2RCxVQUFRLE9BQU8sSUFBUDtBQUNOLFNBQUssVUFBTDtBQUNFLGFBQU87QUFDTCxtQkFBVyxLQUFYO09BREYsQ0FERjtBQURGLFNBS08sVUFBTDtBQUNFLGFBQU87QUFDTCxtQkFBVyxJQUFYO09BREYsQ0FERjtBQUxGLFNBU08sWUFBTDtBQUNFLGFBQU87QUFDTCxtQkFBVyxDQUFDLE1BQU0sU0FBTjtPQURkLENBREY7QUFURjtBQWNJLGFBQU8sS0FBUCxDQURGO0FBYkYsR0FEdUQ7Q0FBbEQ7O0FBbUJBLFNBQVMsU0FBVCxHQUFxQjtBQUMxQixTQUFPO0FBQ0wsVUFBTSxVQUFOO0dBREYsQ0FEMEI7Q0FBckI7O0FBTUEsU0FBUyxTQUFULEdBQXFCO0FBQzFCLFNBQU87QUFDTCxVQUFNLFVBQU47R0FERixDQUQwQjtDQUFyQjs7QUFNQSxTQUFTLFdBQVQsR0FBdUI7QUFDNUIsU0FBTztBQUNMLFVBQU0sWUFBTjtHQURGLENBRDRCO0NBQXZCOztJQU1EOzs7Ozs7Ozs7Ozs7OzswTUFtQkoscUJBQXFCLFVBQUMsS0FBRCxFQUFXO0FBQzlCLFVBQUksTUFBTSxNQUFOLEtBQWlCLE1BQUssSUFBTCxDQUFVLE9BQVYsRUFBbUI7QUFDdEMsY0FBSyxLQUFMLENBQVcsU0FBWCxHQURzQztPQUF4QztLQURtQixRQU1yQixzQkFBc0IsVUFBQyxLQUFELEVBQVc7QUFDL0IsVUFBSSxNQUFNLE9BQU4sS0FBa0IsY0FBbEIsRUFBa0M7QUFDcEMsY0FBSyxLQUFMLENBQVcsU0FBWCxHQURvQztPQUF0QztLQURvQjs7O2VBekJsQjs7d0NBK0JnQixXQUFXO1VBQ3RCLFlBQWEsVUFBYixVQURzQjs7QUFFN0IsVUFBSSxjQUFjLEtBQUssS0FBTCxDQUFXLFNBQVgsRUFBc0I7QUFDdEMsaUJBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsUUFBcEIsR0FBK0IsWUFBWSxRQUFaLEdBQXVCLElBQXZCLENBRE87T0FBeEM7Ozs7dUNBS2lCLFdBQVc7QUFDNUIsV0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLEtBQUssS0FBTCxDQUFXLFNBQVgsR0FBdUIsT0FBdkIsR0FBaUMsTUFBakMsQ0FBZixHQUQ0Qjs7Ozs2QkFJckI7bUJBU0gsS0FBSyxLQUFMLENBVEc7VUFFTCwyQkFGSztVQUdMLDZCQUhLO1VBSUwsNkJBSks7VUFLTCwyQ0FMSztVQU1MLDJDQU5LO1VBT0wscUNBUEs7O1VBUUYseUlBUkU7O0FBVVAsYUFDRTs7O0FBQ0UscUJBQVUsS0FBVjtXQUNJLEtBRk47UUFHRyxhQUNDOzs7QUFDRSx1QkFBVyxhQUFYO0FBQ0EscUJBQVMsS0FBSyxrQkFBTDtBQUNULHVCQUFXLEtBQUssbUJBQUw7QUFDWCxpQkFBSSxNQUFKO0FBQ0Esc0JBQVUsQ0FBVixFQUxGO1VBTUUsdUNBQUssV0FBVyxnQkFBWCxFQUE2QixLQUFJLFNBQUosRUFBbEMsQ0FORjtVQU9FOztjQUFLLFdBQVcsZ0JBQVgsRUFBTDtZQUFtQyxRQUFuQztXQVBGO1NBREQ7T0FKTCxDQVZPOzs7O1NBMUNMOzs7YUFFRyxZQUFZO0FBQ2pCLFlBQVUsaUJBQVUsSUFBVixDQUFlLFVBQWY7O0FBRVYsYUFBVyxpQkFBVSxJQUFWLENBQWUsVUFBZjtBQUNYLGFBQVcsaUJBQVUsSUFBVixDQUFlLFVBQWY7O0FBRVgsaUJBQWUsaUJBQVUsTUFBVjtBQUNmLG9CQUFrQixpQkFBVSxNQUFWO0FBQ2xCLG9CQUFrQixpQkFBVSxNQUFWOztBQVZoQixhQWFHLGVBQWU7QUFDcEIsaUJBQWUsTUFBZjtBQUNBLG9CQUFrQixTQUFsQjtBQUNBLG9CQUFrQixTQUFsQjs7OztBQXVESixJQUFJLHFCQUFxQixLQUFyQjs7QUFFSixJQUFNLGlCQUFpQixFQUFqQjs7SUFFQTs7Ozs7Ozs7Ozs7Ozs7ME1BZUosY0FBYyxZQUFNO0FBQ2xCLDRCQUFPLDhCQUFDLFlBQUQsRUFBa0IsT0FBSyxLQUFMLENBQXpCLEVBQXlDLE9BQUssSUFBTCxDQUF6QyxDQURrQjtLQUFOOzs7ZUFmVjs7d0NBRWdCO0FBQ2xCLFVBQUksQ0FBQyxrQkFBRCxFQUFxQjtBQUN2Qiw2QkFBcUIsSUFBckIsQ0FEdUI7QUFFdkIsYUFBSyxJQUFMLEdBQVksU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQVosQ0FGdUI7QUFHdkIsaUJBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsS0FBSyxJQUFMLENBQTFCLENBSHVCO09BQXpCO0FBS0EsV0FBSyxXQUFMLEdBTmtCOzs7O3lDQVNDO0FBQ25CLFdBQUssV0FBTCxHQURtQjs7Ozs2QkFRWjtBQUNQLGFBQU8sSUFBUCxDQURPOzs7O1NBbkJMOzs7QUF3Qk4sSUFBTSxrQkFBa0IsU0FBbEIsZUFBa0IsQ0FBQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMLGVBQVcsTUFBTSxLQUFOLENBQVksU0FBWjtHQURiLENBRGlDO0NBQVg7QUFLeEIsSUFBTSxxQkFBcUI7QUFDekIsc0JBRHlCO0NBQXJCO2tCQUdTLHlCQUFRLGVBQVIsRUFBeUIsa0JBQXpCLEVBQTZDLEtBQTdDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge1Byb3ZpZGVyLCBjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2NvbWJpbmVSZWR1Y2VycywgY3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IE1vZGFsLCB7bW9kYWwsIGhpZGVNb2RhbCwgc2hvd01vZGFsLCB0b2dnbGVNb2RhbH0gZnJvbSAnLi4vc3JjJztcblxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIG1vZGFsXG59KTtcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcik7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3RvZ2dsZU1vZGFsfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlTW9kYWx9PlRvZ2dsZSBtb2RhbDwvYnV0dG9uPlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXs1MDB9XG4gICAgICAgICAgdHJhbnNpdGlvbkxlYXZlVGltZW91dD17NTAwfVxuICAgICAgICAgIHRyYW5zaXRpb25OYW1lPXt7XG4gICAgICAgICAgICBlbnRlcjogJ2VudGVyJyxcbiAgICAgICAgICAgIGVudGVyQWN0aXZlOiAnZW50ZXJBY3RpdmUnLFxuICAgICAgICAgICAgbGVhdmU6ICdsZWF2ZScsXG4gICAgICAgICAgICBsZWF2ZUFjdGl2ZTogJ2xlYXZlQWN0aXZlJ1xuICAgICAgICAgIH19PlxuICAgICAgICAgIDxkaXY+TW9kYWw8L2Rpdj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKCkgPT4gKHt9KTtcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgaGlkZU1vZGFsLFxuICBzaG93TW9kYWwsXG4gIHRvZ2dsZU1vZGFsXG59O1xuY29uc3QgQXBwID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWFpbik7XG5cbnJlbmRlcigoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxBcHAgLz5cbiAgPC9Qcm92aWRlcj5cbiksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAnKSk7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFByb3BUeXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5leHBvcnQgY29uc3QgSElERV9NT0RBTCA9ICdtb2RhbC9ISURFX01PREFMJztcbmV4cG9ydCBjb25zdCBTSE9XX01PREFMID0gJ21vZGFsL1NIT1dfTU9EQUwnO1xuZXhwb3J0IGNvbnN0IFRPR0dMRV9NT0RBTCA9ICdtb2RhbC9UT0dHTEVfTU9EQUwnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc1Zpc2libGU6IGZhbHNlXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbW9kYWwoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEhJREVfTU9EQUw6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1Zpc2libGU6IGZhbHNlXG4gICAgICB9O1xuICAgIGNhc2UgU0hPV19NT0RBTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzVmlzaWJsZTogdHJ1ZVxuICAgICAgfTtcbiAgICBjYXNlIFRPR0dMRV9NT0RBTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzVmlzaWJsZTogIXN0YXRlLmlzVmlzaWJsZVxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlTW9kYWwoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogSElERV9NT0RBTFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd01vZGFsKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNIT1dfTU9EQUxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZU1vZGFsKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFRPR0dMRV9NT0RBTFxuICB9O1xufVxuXG5jbGFzcyBNb2RhbENvbnRlbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgICBpc1Zpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaGlkZU1vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgcm9vdENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb250ZW50Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG92ZXJsYXlDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICByb290Q2xhc3NOYW1lOiAncm9vdCcsXG4gICAgY29udGVudENsYXNzTmFtZTogJ2NvbnRlbnQnLFxuICAgIG92ZXJsYXlDbGFzc05hbWU6ICdvdmVybGF5J1xuICB9XG5cbiAgaGlkZU9uT3ZlcmxheUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5yZWZzLm92ZXJsYXkpIHtcbiAgICAgIHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XG4gICAgfVxuICB9O1xuXG4gIGhpZGVPbkVzY2FwZUtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgIHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgY29uc3Qge2lzVmlzaWJsZX0gPSBuZXh0UHJvcHM7XG4gICAgaWYgKGlzVmlzaWJsZSAhPT0gdGhpcy5wcm9wcy5pc1Zpc2libGUpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBpc1Zpc2libGUgPyAnaGlkZGVuJyA6IG51bGw7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHRoaXMucmVmcy5yb290W3RoaXMucHJvcHMuaXNWaXNpYmxlID8gJ2ZvY3VzJyA6ICdibHVyJ10oKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGlzVmlzaWJsZSxcbiAgICAgIGhpZGVNb2RhbCxcbiAgICAgIGNvbnRlbnRDbGFzc05hbWUsXG4gICAgICBvdmVybGF5Q2xhc3NOYW1lLFxuICAgICAgcm9vdENsYXNzTmFtZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwXG4gICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgIHsuLi5yZXN0fT5cbiAgICAgICAge2lzVmlzaWJsZSAmJlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17cm9vdENsYXNzTmFtZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGlkZU9uT3ZlcmxheUNsaWNrfVxuICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhpZGVPbkVzY2FwZUtleURvd259XG4gICAgICAgICAgICByZWY9XCJyb290XCJcbiAgICAgICAgICAgIHRhYkluZGV4PXsxfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtvdmVybGF5Q2xhc3NOYW1lfSByZWY9XCJvdmVybGF5XCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250ZW50Q2xhc3NOYW1lfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgPC9kaXY+fVxuICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25Hcm91cD5cbiAgICApO1xuICB9XG59XG5cbmxldCBpc01vZGFsUG9ydGFsSW5Eb20gPSBmYWxzZTtcblxuY29uc3QgRVNDQVBFX0tFWUNPREUgPSAyNztcblxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICghaXNNb2RhbFBvcnRhbEluRG9tKSB7XG4gICAgICBpc01vZGFsUG9ydGFsSW5Eb20gPSB0cnVlO1xuICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyTW9kYWwoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLnJlbmRlck1vZGFsKCk7XG4gIH1cblxuICByZW5kZXJNb2RhbCA9ICgpID0+IHtcbiAgICByZW5kZXIoPE1vZGFsQ29udGVudCB7Li4udGhpcy5wcm9wc30gLz4sIHRoaXMubm9kZSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGlzVmlzaWJsZTogc3RhdGUubW9kYWwuaXNWaXNpYmxlXG4gIH07XG59O1xuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBoaWRlTW9kYWxcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNb2RhbCk7XG4iXX0=
