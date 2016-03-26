import React, {Component, createElement, PropTypes} from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {hideModal, showModal} from './redux';

const ESCAPE_KEYCODE = 27;

// Styles to make both `overlay` and `contentWrapper` fit the entire screen.
const style = {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

export default class Modal extends Component {

  static propTypes = {
    // 1. Attribute props
    // An object that maps each `modalType` to the corresponding modal component.
    children: PropTypes.objectOf(PropTypes.func),
    // Classes for the subcomponents.
    contentClassName: PropTypes.string,
    overlayClassName: PropTypes.string,
    // A function that returns the `Close` button component.
    renderCloseButton: PropTypes.func,

    // 2. Injected props
    // Whether the modal is visible.
    isVisible: PropTypes.bool.isRequired,
    // The modal type. Will be `null` if no modal is being rendered.
    modalType: PropTypes.string,
    // Props spread over the current modal component (ie. one of the components
    // in `children`).
    dataProps: PropTypes.object.isRequired,
    // For customising the component behaviour.
    settingsProps: PropTypes.shape({
      hasCloseButton: PropTypes.bool,
      shouldHideOnOverlayClick: PropTypes.bool,
      shouldHideOnEscapeKeyDown: PropTypes.bool
    }).isRequired,
    // For dispatching actions to show and hide the modal.
    hideModal: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired
  };

  static defaultProps = {
    children: [],
    contentClassName: 'content',
    overlayClassName: 'overlay',
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
      overlayClassName,
      renderCloseButton,
      isVisible,
      modalType,
      dataProps,
      settingsProps,
      hideModal,
      showModal
    } = this.props;
    const {
      hasCloseButton,
      shouldHideOnOverlayClick,
      shouldHideOnEscapeKeyDown,
      ...otherSettingsProps
    } = settingsProps;

    const cssTransitionGroup = {
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

    const contentProps = {
      className: contentClassName
    };

    const modalProps = {
      ...dataProps,
      hideModal,
      showModal
    };

    const modal = children[modalType];
    return (
      <ReactCSSTransitionGroup {...cssTransitionGroup}>
        {isVisible && modal &&
          <div>
            <div {...overlayProps} />
            <div {...contentWrapperProps}>
              <div {...contentProps}>
                {createElement(modal, modalProps)}
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
