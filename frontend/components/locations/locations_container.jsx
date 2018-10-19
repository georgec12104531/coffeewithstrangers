import React from 'react';
import { connect } from 'react-redux';


import {
  fetchLocations,
  fetchLocation
} from '../../actions/location_actions';

export const msp = (state) => ({

});

export const mdp = (dispatch) => ({
  fetchLocations: () => dispatch(fetchLocations()),
});
