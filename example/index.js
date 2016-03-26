import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {combineReducers, createStore} from 'redux';

import {ModalPortal, modal, showModal} from '../src';
import modals from './modals';
import {CONFIRMATION_MODAL} from './modals/confirmationModal';

const reducer = combineReducers({
  modal
});
const store = createStore(reducer);

class Main extends Component {
  render() {
    const {showModal} = this.props;
    return (
      <div>
        <div className="main">
          <button onClick={() => {
            showModal(CONFIRMATION_MODAL, {
              title: 'foo',
              description: 'bar'
            })
          }}>Show modal</button>
        </div>
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
