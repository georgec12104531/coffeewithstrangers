import merge from 'lodash/merge';
import {
  RECEIVE_COFFEE_TIMES,
  RECEIVE_COFFEE_TIME,
  REMOVE_COFFEE_TIME,
  RECEIVE_COFFEE_TIME_ERRORS
} from '../actions/coffee_time_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COFFEE_TIMES:
      return merge({}, state, action.coffeeTimes);
    case RECEIVE_COFFEE_TIME:
      return {
        ...state,
        [action.coffeeTime.id]: action.coffeeTime,
      };
    case REMOVE_COFFEE_TIME:
      const newState = merge({}, state);
      delete newState[action.coffeeTimeId];
      return newState;
    default:
      return state;
  }
};
