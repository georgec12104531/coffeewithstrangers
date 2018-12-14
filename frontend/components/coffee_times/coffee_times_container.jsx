import { connect } from 'react-redux';
import CoffeeTimes from './coffee_times';
import { fetchLocations } from '../../actions/location_actions';
import { fetchCoffeeTimes } from '../../actions/coffee_time_actions';
import { fetchAttendances } from '../../actions/attendance_actions';

export const msp = state => ({
  coffeeTimes: Object.values(state.entities.coffeeTimes),
  attendances: state.entities.attendances,
  locations: Object.values(state.entities.locations),
});

export const mdp = dispatch => ({
  fetchLocations: () => dispatch(fetchLocations()),
  fetchCoffeeTimes: () => dispatch(fetchCoffeeTimes()),
  fetchAttendances: () => dispatch(fetchAttendances()),
});

export default connect(msp, mdp)(CoffeeTimes);