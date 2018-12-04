import merge from "lodash/merge";

import {
  RECEIVE_ATTENDANCE,
  RECEIVE_ATTENDANCE_ERRORS,
  REMOVE_ATTENDANCE,
} from "../actions/attendance_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ATTENDANCE:
      return merge({}, state, {
        [action.attendance.id]: action.attendance,
      });
    case RECEIVE_ATTENDANCE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};


