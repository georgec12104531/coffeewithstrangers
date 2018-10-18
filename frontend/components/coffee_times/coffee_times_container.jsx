import React from 'react';
import { connect } from 'react-redux';
import coffee_times from './coffee_times';
import fetchLocations from '../../actions/location_actions';

export const msp = (state) => ({
  coffee_times: Object.values(state.entities.coffeeTimes),
  attendances: state.entities.attendances,
  locations: Object.values(state.entities.locations)
});

export const mdp = (dispatch) => ({
  fetchLocations: () => dispatch(fetchLocations())
});

export default connect(msp, null)(coffee_times);
