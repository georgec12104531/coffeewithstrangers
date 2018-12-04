import { connect } from 'react-redux';
import CoffeeTime from './coffee_time_show';
import { fetchCoffeeTime } from '../../actions/coffee_time_actions';
import { createAttendance, deleteAttendance } from '../../actions/attendance_actions';

export const msp = (state, ownProps) => ({
  id: ownProps.match.params.coffeeTimeId,
  coffeeTime: state.entities.coffeeTimes[ownProps.match.params.coffeeTimeId],
  currentUser: state.entities.users[state.session.id],
  currentUserId: state.session.id,
});

export const mdp = dispatch => ({
  fetchCoffeeTime: id => dispatch(fetchCoffeeTime(id)),
  createAttendance: attendance => dispatch(createAttendance(attendance)),
  deleteAttendance: id => dispatch(deleteAttendance(id)),
});

export default connect(
  msp,
  mdp,
)(CoffeeTime);
