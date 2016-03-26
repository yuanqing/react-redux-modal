import React, {Component, createElement, PropTypes} from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {hideModal, showModal} from './redux';

const ESCAPE_KEYCODE = 27;

const style = {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

export default class Modal extends Component {
  static propTypes = {
    // Props.
    children: PropTypes.any,
    contentClassName: PropTypes.string,
    overlayClassName: PropTypes.string,
    // Injected via `mapStateToProps`.
    isVisible: PropTypes.bool.isRequired,
    modalProps: PropTypes.object,
    modalType: PropTypes.object,
    // Injected via `mapDispatchToProps`.
    hideModal: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired
  };

  static defaultProps = {
    contentClassName: 'content',
    overlayClassName: 'overlay'
  };

  hideOnEscapeKeyDown = (event) => {
    if (event.keyCode === ESCAPE_KEYCODE) {
      this.props.hideModal();
    }
  };

  hideOnOverlayClick = (event) => {
    if (event.target === this.refs.contentWrapper) {
      this.props.hideModal();
    }
  };

  componentWillUpdate(nextProps) {
    const {isVisible} = nextProps;
    if (isVisible !== this.props.isVisible) {
      document.body.style.overflow = isVisible ? 'hidden' : null;
    }
  }

  componentDidUpdate() {
    this.refs.contentWrapper[this.props.isVisible ? 'focus' : 'blur']();
  }

  render() {
    const {
      children,
      contentClassName,
      overlayClassName,
      isVisible,
      modalType,
      modalProps,
      settingsProps
    } = this.props;

    const {
      shouldHideOnOverlayClick = true,
      shouldHideOnEscapeKeyDown = true,
      ...otherSettingsProps
    } = settingsProps;

    const rootProps = {
      component: 'div',
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500,
      transitionName: {
        enter: 'enter',
        enterActive: 'enterActive',
        leave: 'leave',
        leaveActive: 'leaveActive'
      },
      ...otherSettingsProps
    };

    const overlayProps = {
      className: overlayClassName,
      style
    };

    const contentWrapperProps = {
      onClick: shouldHideOnOverlayClick && this.hideOnOverlayClick,
      onKeyDown: shouldHideOnEscapeKeyDown && this.hideOnEscapeKeyDown,
      ref: 'contentWrapper',
      style: {
        ...style,
        overflow: 'auto'
      },
      tabIndex: 1
    };

    const modal = children[modalType];
    return (
      <ReactCSSTransitionGroup {...rootProps}>
        {isVisible && modal &&
          <div>
            <div {...overlayProps} />
            <div {...contentWrapperProps}>
              <div className={contentClassName}>{createElement(modal, modalProps)}</div>
            </div>
          </div>}
      </ReactCSSTransitionGroup>
    );
  }
}

const mapStateToProps = (state) => {
  return state.modal;
};
const mapDispatchToProps = {
  hideModal,
  showModal
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
