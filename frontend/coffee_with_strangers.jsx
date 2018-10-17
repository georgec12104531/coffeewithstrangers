import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './actions/session_actions';

import { receiveCoffeeTime, fetchCoffeeTimes, fetchCoffeeTime, createCoffeeTime, updateCoffeeTime, deleteCoffeeTime } from './actions/coffee_time_actions';

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

  window.updateCoffeeTime = updateCoffeeTime;
  window.deleteCoffeeTime = deleteCoffeeTime;
  window.receiveCoffeeTime = receiveCoffeeTime;


  const root = document.getElementById("root");
  ReactDOM.render(<Root store={ store }/>, root);
});
