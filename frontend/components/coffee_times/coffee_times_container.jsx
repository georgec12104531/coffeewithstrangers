import React from 'react';
import { connect } from 'react-redux';
import coffee_times from './coffee_times';



export const msp = (state) => ({
  coffee_times: Object.values(state.entities.coffeeTimes),
  attendances: state.entities.attendances
});

export const mdp = dispatch => ({

});


export default connect(msp, null)(coffee_times);
