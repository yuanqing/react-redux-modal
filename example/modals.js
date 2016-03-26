import React from 'react';

export const CONFIRMATION_MODAL = 'modal/CONFIRMATION_MODAL';

const ConfirmationModal = ({title, description}) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{description}</div>
    </div>
  );
};

// Maps `modalType` to the corresponding modal component.
export default {
  [CONFIRMATION_MODAL]: ConfirmationModal
};
