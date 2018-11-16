import React from 'react';
import { connect } from 'react-redux';


import {
  fetchLocations,
} from '../../actions/location_actions';

export const msp = (state) => {
  return {

  }
};

export const mdp = (dispatch) => {
  return { fetchLocations: () => dispatch(fetchLocations()) };
};


