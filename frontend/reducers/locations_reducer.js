import {
  RECEIVE_LOCATIONS,
  RECEIVE_LOCATION
} from '../actions/location_actions';

import merge from 'lodash/merge';


export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LOCATIONS:
      return merge({}, state, action.locations);
    case RECEIVE_LOCATION:
      return merge({}, state, {[action.location.id]: action.location});
    default:
      return state;
  }
};
