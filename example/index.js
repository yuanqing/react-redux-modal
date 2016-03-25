import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {combineReducers, createStore} from 'redux';

import Modal, {modal, hideModal, showModal, toggleModal} from '../src';

const reducer = combineReducers({
  modal
});
const store = createStore(reducer);

class Main extends Component {
  render() {
    const {toggleModal} = this.props;
    return (
      <div>
        <button onClick={toggleModal}>Toggle modal</button>
        <Modal
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionName={{
            enter: 'enter',
            enterActive: 'enterActive',
            leave: 'leave',
            leaveActive: 'leaveActive'
          }}>
          <div>Modal</div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  hideModal,
  showModal,
  toggleModal
};
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.querySelector('.app'));
