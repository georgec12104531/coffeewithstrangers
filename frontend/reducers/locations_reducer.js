import merge from 'lodash/merge';
import {
  RECEIVE_LOCATIONS,
} from '../actions/location_actions';


export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LOCATIONS:
      return {
        ...state,
        ...action.locations,
      };
    default:
      return state;
  }
};
