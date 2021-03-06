import * as APIUtil from '../api_util/attendance_api_util';
import { fetchCoffeeTime } from '../actions/coffee_time_actions';

export const RECEIVE_ATTENDANCE = 'RECEIVE_ATTENDANCE';
export const RECEIVE_ATTENDANCES = 'RECEIVE_ATTENDANCES';
export const REMOVE_ATTENDANCE = 'REMOVE_ATTENDANCE';
export const RECEIVE_ATTENDANCE_ERRORS = 'RECEIVE_ATTENDANCE_ERRORS';

export const receiveAttendance = attendance => ({
  type: RECEIVE_ATTENDANCE,
  attendance,
});

export const removeAttendance = id => ({
  type: REMOVE_ATTENDANCE,
  attendanceId: id,
});

export const receiveAttendanceErrors = errors => ({
  type: RECEIVE_ATTENDANCE_ERRORS,
  errors,
});

export const receiveAttendances = attendances => ({
  type: RECEIVE_ATTENDANCES,
  attendances,
});

export const fetchAttendances = () => dispatch => (
  APIUtil.fetchAttendances().then(attendancesBack => (
    dispatch(receiveAttendances(attendancesBack))
  ))
);

export const createAttendance = attendance => dispatch => (
  APIUtil.createAttendance(attendance).then(attendanceBack => (
    dispatch(fetchCoffeeTime(attendanceBack.coffee_time_id))
    // dispatch(receiveAttendance(attendanceBack));
  ), error => (
    dispatch(receiveAttendanceErrors(error.responseJSON))
  ))
);

export const updateAttendance = attendance => dispatch => (
  APIUtil.updateAttendance(attendance).then(attendanceBack => (
    dispatch(receiveAttendance(attendanceBack))
  ), error => (
    dispatch(receiveAttendanceErrors(error.responseJSON))
  ))
);

export const deleteAttendance = (id, coffeeTimeId) => dispatch => (
  APIUtil.deleteAttendance(id).then(() => dispatch(fetchCoffeeTime(coffeeTimeId))).then(() => (
    dispatch(removeAttendance(id))
  ), error => (
    dispatch(receiveAttendanceErrors(error.responseJSON))
  ))
);