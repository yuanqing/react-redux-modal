import React from 'react';
import {connect} from 'react-redux';
import {Modal, hideModal, showModal} from '../';

export const ModalPortal = ({hideModal, showModal, isVisible, modals, modalProps, modalType, ...rest}) => {
  const props = {
    hideModal,
    showModal,
    isVisible,
    ...rest
  };
  const SpecificModal = modals[modalType];
  return (
    <Modal {...props}>
      <SpecificModal {...props} {...modalProps} />
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return state.modal;
};
const mapDispatchToProps = {
  hideModal,
  showModal
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalPortal);
