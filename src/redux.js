export const HIDE_MODAL = 'modal/HIDE_MODAL';
export const SHOW_MODAL = 'modal/SHOW_MODAL';

export const initialState = {
  isVisible: false,
  modalType: null,
  dataProps: {},
  settingsProps: {}
};

export function modalReducer(state = initialState, action = {}) {
  switch (action.type) {
    case HIDE_MODAL:
      return {
        ...state,
        isVisible: false
      };
    case SHOW_MODAL:
      return {
        ...action.payload,
        isVisible: true
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

export function showModal(modalType, dataProps = {}, settingsProps = {}) {
  return {
    type: SHOW_MODAL,
    payload: {
      modalType,
      dataProps,
      settingsProps: {
        shouldHideOnOverlayClick: true,
        shouldHideOnEscapeKeyDown: true,
        hasCloseButton: true,
        ...settingsProps
      }
    }
  };
}
