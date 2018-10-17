import {
  RECEIVE_ATTENDANCE_ERRORS
} from '../actions/coffee_time_attendance';

export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ATTENDANCE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
