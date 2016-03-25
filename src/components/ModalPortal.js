import React from 'react';
import {connect} from 'react-redux';
import {Modal, hideModal} from '../';

const ModalPortal = ({hideModal, showModal, isVisible, modalProps, modalType}) => {
  const props = {
    transitionEnterTimeout: 500,
    transitionLeaveTimeout: 500,
    transitionName: {
      enter: 'enter',
      enterActive: 'enterActive',
      leave: 'leave',
      leaveActive: 'leaveActive'
    },
    ...modalProps,
    hideModal,
    showModal,
    isVisible
  };
  return (
    <Modal {...props}>
      {modalType && isVisible
        ? <div>Modal</div>
        : <span />}
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return state.modal;
};
const mapDispatchToProps = {
  hideModal
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalPortal);
