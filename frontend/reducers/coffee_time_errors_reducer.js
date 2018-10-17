import {
  RECEIVE_COFFEE_TIME_ERRORS
} from '../actions/coffee_time' ;

export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COFFEE_TIME_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
