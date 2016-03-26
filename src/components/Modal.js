import React, {Component, PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const ESCAPE_KEYCODE = 27;

const cssTransitionGroupOptions = {
  transitionEnterTimeout: 500,
  transitionLeaveTimeout: 500,
  transitionName: {
    enter: 'enter',
    enterActive: 'enterActive',
    leave: 'leave',
    leaveActive: 'leaveActive'
  }
};

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.node,
    isVisible: PropTypes.bool.isRequired,
    hideModal: PropTypes.func.isRequired,
    rootClassName: PropTypes.string,
    contentClassName: PropTypes.string,
    overlayClassName: PropTypes.string,
  };

  static defaultProps = {
    contentClassName: 'content',
    contentWrapperClassName: 'contentWrapper',
    overlayClassName: 'overlay'
  };

  hideOnOverlayClick = (event) => {
    if (event.target === this.refs.contentWrapper) {
      this.props.hideModal();
    }
  };

  hideOnEscapeKeyDown = (event) => {
    if (event.keyCode === ESCAPE_KEYCODE) {
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
      isVisible,
      hideModal,
      contentClassName,
      contentWrapperClassName,
      overlayClassName,
      ...rest
    } = this.props;
    return (
      <ReactCSSTransitionGroup
        component="div"
        {...cssTransitionGroupOptions}
        {...rest}>
        {isVisible &&
          <div>
            <div className={overlayClassName} />
            <div
              className={contentWrapperClassName}
              onClick={this.hideOnOverlayClick}
              onKeyDown={this.hideOnEscapeKeyDown}
              ref="contentWrapper"
              tabIndex={1}>
              <div className={contentClassName}>{children}</div>
            </div>
          </div>}
      </ReactCSSTransitionGroup>
    );
  }
}
