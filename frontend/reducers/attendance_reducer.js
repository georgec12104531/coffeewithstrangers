import merge from "lodash/merge";

import {
  RECEIVE_ATTENDANCE,
  RECEIVE_ATTENDANCE_ERRORS,
  RECEIVE_ATTENDANCES,
  REMOVE_ATTENDANCE,
} from '../actions/attendance_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ATTENDANCES:
      return merge({}, state, action.attendances);
    case RECEIVE_ATTENDANCE:
      return merge({}, state, {
        [action.attendance.id]: action.attendance,
      });
    case REMOVE_ATTENDANCE:
      const newState = merge({}, state);
      delete newState[action.attendanceId];
      return newState;
    case RECEIVE_ATTENDANCE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};