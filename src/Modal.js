import classnames from 'classnames';
import React, {Component, createElement, PropTypes} from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {hideModal, showModal} from './redux';

const ESCAPE_KEYCODE = 27;

const cssTransitionGroupDefaultProps = {
  component: 'div',
  transitionEnterTimeout: 500,
  transitionLeaveTimeout: 500,
  transitionName: {
    enter: 'enter',
    enterActive: 'enterActive',
    leave: 'leave',
    leaveActive: 'leaveActive'
  }
}

export default class Modal extends Component {

  static propTypes = {

    // 1. ATTRIBUTE PROPS
    // An object that maps each `modalType` to the corresponding modal component.
    children: PropTypes.objectOf(PropTypes.func),
    // Classes for the subcomponents.
    contentClassName: PropTypes.string,
    contentWrapperClassName: PropTypes.string,
    overlayClassName: PropTypes.string,
    middleAlignedClassName: PropTypes.string,
    // A function that returns the `Close` button component.
    renderCloseButton: PropTypes.func,

    // 2. INJECTED PROPS
    // Whether the modal is visible.
    isVisible: PropTypes.bool.isRequired,
    // The modal type. Will be `null` if no modal is being rendered.
    modalType: PropTypes.string,
    // Props spread over the current modal component (ie. one of the components
    // in `children`).
    modalProps: PropTypes.object.isRequired,
    // Whether to render a close button (using `renderCloseButton`).
    hasCloseButton: PropTypes.bool,
    // Whether to middle-align the modal.
    isMiddleAligned: PropTypes.bool,
    // Whether to hide the modal when the overlay is clicked.
    shouldHideOnOverlayClick: PropTypes.bool,
    // Whether to hide the modal when the `Esc` key is pressed.
    shouldHideOnEscapeKeyDown: PropTypes.bool,
    // Dispatch an action to hide the modal.
    hideModal: PropTypes.func.isRequired,
    // Dispatch an action to show the modal.
    showModal: PropTypes.func.isRequired

  };

  static defaultProps = {
    children: [],
    contentClassName: 'content',
    contentWrapperClassName: 'contentWrapper',
    overlayClassName: 'overlay',
    middleAlignedClassName: 'middleAligned',
    renderCloseButton: (hideModal) => {
      return <button className="closeButton" onClick={hideModal}>Close</button>;
    }
  };

  // Hide the modal if the `Esc` key was pressed.
  hideOnEscapeKeyDown = (event) => {
    if (event.keyCode === ESCAPE_KEYCODE) {
      this.props.hideModal();
    }
  };

  // Hide the modal if the overlay was clicked.
  hideOnOverlayClick = (event) => {
    if (event.target === this.refs.contentWrapper) {
      this.props.hideModal();
    }
  };

  // Update `overflow` of `document.body` if modal visibility has changed.
  componentWillUpdate(nextProps) {
    const {isVisible} = nextProps;
    if (isVisible !== this.props.isVisible) {
      document.body.style.overflow = isVisible ? 'hidden' : null;
    }
  }

  // If modal is now visible, `focus` it, else `blur` it.
  componentDidUpdate() {
    this.refs.contentWrapper[this.props.isVisible ? 'focus' : 'blur']();
  }

  render() {
    const {
      children,
      contentClassName,
      contentWrapperClassName,
      overlayClassName,
      middleAlignedClassName,
      renderCloseButton,
      isVisible,
      modalType,
      modalProps,
      hasCloseButton,
      isMiddleAligned,
      shouldHideOnOverlayClick,
      shouldHideOnEscapeKeyDown,
      hideModal,
      showModal,
      ...other
    } = this.props;

    const cssTransitionGroupProps = {
      ...cssTransitionGroupDefaultProps,
      ...other
    };

    const contentWrapperProps = {
      className: classnames(
        contentWrapperClassName,
        isMiddleAligned && middleAlignedClassName
      ),
      onClick: shouldHideOnOverlayClick && this.hideOnOverlayClick,
      onKeyDown: shouldHideOnEscapeKeyDown && this.hideOnEscapeKeyDown,
      ref: 'contentWrapper',
      tabIndex: 1
    };

    const modal = children[modalType];
    const props = {
      ...modalProps,
      hideModal,
      showModal
    };

    return (
      <ReactCSSTransitionGroup {...cssTransitionGroupProps}>
        {isVisible && modal &&
          <div>
            <div className={overlayClassName} />
            <div {...contentWrapperProps}>
              <div className={contentClassName}>
                {createElement(modal, props)}
                {hasCloseButton && renderCloseButton(hideModal)}
              </div>
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
