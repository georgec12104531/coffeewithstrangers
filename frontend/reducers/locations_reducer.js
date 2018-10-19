import {
  RECEIVE_LOCATIONS
} from '../actions/location_actions';

import merge from 'lodash/merge';


export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LOCATIONS:
      return merge({}, state, action.locations);
    default:
      return state;
  }
};
