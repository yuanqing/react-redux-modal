import React from 'react';
import {connect} from 'react-redux';
import {Modal, hideModal, showModal} from '../';

const ModalPortal = ({hideModal, showModal, isVisible, modals, modalProps, modalType}) => {
  const props = {
    hideModal,
    showModal,
    isVisible
  };
  const SpecificModal = modals[modalType];
  return (
    <Modal {...props}>
      {SpecificModal
        ? <SpecificModal {...modalProps} />
        : <span />}
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
