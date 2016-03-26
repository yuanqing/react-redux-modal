import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {combineReducers, createStore} from 'redux';

import {ModalPortal, modal, showModal} from '../src';
import modals, {CONFIRMATION_MODAL} from './modals';

const reducer = combineReducers({
  modal
});
const store = createStore(reducer);

class Main extends Component {
  render() {
    const {showModal} = this.props;
    return (
      <div>
        <button onClick={() => {
          showModal(CONFIRMATION_MODAL, {
            title: 'foo',
            description: 'bar'
          })
        }}>Show modal</button>
        <ModalPortal modals={modals} />
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
