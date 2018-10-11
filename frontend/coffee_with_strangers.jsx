import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>Hey, welcome to triple-grande-hotpumpkin-spicelatte-extra-hot-extra-whip-no-fome-stirred-two-pump-doublecup-with-three-ice-cubesWithStrangers!</h1>, root);
});
