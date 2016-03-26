import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {combineReducers, createStore} from 'redux';

import Modal, {modalReducer, showModal} from '../src';
import modals from './modals';
import {CONFIRMATION_MODAL} from './modals/confirmationModal';

const reducer = combineReducers({
  modal: modalReducer
});
const store = createStore(reducer);

class Main extends Component {
  static propTypes = {
    showModal: PropTypes.func
  };

  render() {
    const {showModal} = this.props;
    const options = {
      modalType: CONFIRMATION_MODAL,
      modalProps: {
        title: 'foo',
        description: 'bar'
      },
      isMiddleAligned: true,
      shouldHideOnOverlayClick: true,
      shouldHideOnEscapeKeyDown: true
    };
    return (
      <div>
        <div className="main">
          <button onClick={showModal.bind(null, options)}>Show modal</button>
        </div>
        <Modal>{modals}</Modal>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
}
const mapDispatchToProps = {
  showModal
};
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.querySelector('.app'));
