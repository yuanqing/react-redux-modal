import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {combineReducers, createStore} from 'redux';

import {ModalPortal, modal, hideModal, showModal} from '../src';

const reducer = combineReducers({
  modal
});
const store = createStore(reducer);

class Main extends Component {
  render() {
    const {showModal, modalProps} = this.props;
    return (
      <div>
        <button onClick={showModal}>Show modal</button>
        <ModalPortal {...modalProps} />
      </div>
    );
  }
}

const mapStateToProps = ({modal}) => {
  return {
    modal
  };
};
const mapDispatchToProps = {
  showModal
};
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.querySelector('.app'));
