import React, {Component, PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const ESCAPE_KEYCODE = 27;

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isVisible: PropTypes.bool.isRequired,
    hideModal: PropTypes.func.isRequired,
    rootClassName: PropTypes.string,
    contentClassName: PropTypes.string,
    overlayClassName: PropTypes.string,
  };

  static defaultProps = {
    rootClassName: 'root',
    contentClassName: 'content',
    overlayClassName: 'overlay'
  }

  hideOnOverlayClick = (event) => {
    if (event.target === this.refs.overlay) {
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

  componentDidUpdate(prevProps) {
    this.refs.root[this.props.isVisible ? 'focus' : 'blur']();
  }

  render() {
    const {
      children,
      isVisible,
      hideModal,
      contentClassName,
      overlayClassName,
      rootClassName,
      ...rest
    } = this.props;
    return (
      <ReactCSSTransitionGroup
        component="div"
        {...rest}>
        {isVisible &&
          <div
            className={rootClassName}
            onClick={this.hideOnOverlayClick}
            onKeyDown={this.hideOnEscapeKeyDown}
            ref="root"
            tabIndex={1}>
            <div className={overlayClassName} ref="overlay" />
            <div className={contentClassName}>{children}</div>
          </div>}
      </ReactCSSTransitionGroup>
    );
  }
}
