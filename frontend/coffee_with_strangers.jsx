import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './actions/session_actions';
import { fetchLocations, createLocation } from './api_util/location_api_util';

import configureStore from './store/store';
import Root from './components/root';



document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store;

  window.fetchLocations = fetchLocations();
  window.createLocation = createLocation();

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={ store }/>, root);
});
