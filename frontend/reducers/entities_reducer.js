import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import coffeeTimesReducer from './coffee_times_reducer';
import attendancesReducer from './attendance_reducer';
import locationsReducer from './locations_reducer';

export default combineReducers({
  attendances: attendancesReducer,
  coffeeTimes: coffeeTimesReducer,
  users: usersReducer,
  locations: locationsReducer
});
