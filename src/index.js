import React, {Component, PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {render} from 'react-dom';
import {connect} from 'react-redux';

export const HIDE_MODAL = 'modal/HIDE_MODAL';
export const SHOW_MODAL = 'modal/SHOW_MODAL';
export const TOGGLE_MODAL = 'modal/TOGGLE_MODAL';

export const initialState = {
  isVisible: false
};

export function modal(state = initialState, action = {}) {
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

export function hideModal() {
  return {
    type: HIDE_MODAL
  };
}

export function showModal() {
  return {
    type: SHOW_MODAL
  };
}

export function toggleModal() {
  return {
    type: TOGGLE_MODAL
  };
}

class ModalContent extends Component {

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

let isModalPortalInDom = false;

const ESCAPE_KEYCODE = 27;

class Modal extends Component {

  componentDidMount() {
    if (!isModalPortalInDom) {
      isModalPortalInDom = true;
      this.node = document.createElement('div');
      document.body.appendChild(this.node);
    }
    this.renderModal();
  }

  componentDidUpdate() {
    this.renderModal();
  }

  renderModal = () => {
    render(<ModalContent {...this.props} />, this.node);
  };

  render() {
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    isVisible: state.modal.isVisible
  };
};
const mapDispatchToProps = {
  hideModal
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
