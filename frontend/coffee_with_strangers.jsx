import React from 'react';
import ReactDOM from 'react-dom';
// import { login, logout, signup } from './actions/session_actions';

import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {

  //TEST//
  // window.login = login;
  // window.logout = logout;
  // window.signup = signup;
  //TEST

  const root = document.getElementById("root");
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={ store }/>, root);
});
