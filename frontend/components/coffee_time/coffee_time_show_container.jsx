import { connect } from 'react-redux';
import CoffeeTime from './coffee_time_show';
import { fetchCoffeeTime, fetchCoffeeTimes } from '../../actions/coffee_time_actions';
import { createAttendance, deleteAttendance, fetchAttendances } from '../../actions/attendance_actions';

export const msp = (state, ownProps) => ({
  id: ownProps.match.params.coffeeTimeId,
  coffeeTime: state.entities.coffeeTimes[ownProps.match.params.coffeeTimeId],
  currentUser: state.entities.users[state.session.id],
  currentUserId: state.session.id,
});

export const mdp = dispatch => ({
  fetchCoffeeTime: id => dispatch(fetchCoffeeTime(id)),
  fetchCoffeeTimes: () => dispatch(fetchCoffeeTimes()),
  fetchAttendances: () => dispatch(fetchAttendances()),
  createAttendance: attendance => dispatch(createAttendance(attendance)),
});

export default connect(
  msp,
  mdp,
)(CoffeeTime);

