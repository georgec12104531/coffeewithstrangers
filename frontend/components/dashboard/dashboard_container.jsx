import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchCoffeeTimes, deleteCoffeeTime } from '../../actions/coffee_time_actions';
import { fetchAttendances, deleteAttendance } from '../../actions/attendance_actions';
import { updateUser } from '../../actions/user_actions';
import { myCoffeeTimes, myHostedCoffeeTimes } from '../../reducers/selectors';

export const msp = state => ({
  coffeeTimes: Object.values(state.entities.coffeeTimes),
  myCoffeeTimes: myCoffeeTimes(state),
  myHostedCoffeeTimes: myHostedCoffeeTimes(state),
  myAttendances: Object.values(state.entities.attendances).filter(attendance => attendance.user_id === state.session.id),
  currentUser: state.entities.users[state.session.id],
  currentUserId: state.session.id,
});

export const mdp = dispatch => ({
  fetchCoffeeTimes: () => dispatch(fetchCoffeeTimes()),
  fetchAttendances: () => dispatch(fetchAttendances()),
  deleteAttendance: (id, coffeeTimeId) => dispatch(deleteAttendance(id, coffeeTimeId)),
  deleteCoffeeTime: id => dispatch(deleteCoffeeTime(id)),
  updateUser: user => dispatch(updateUser(user)),
});

export default connect(msp, mdp)(Dashboard);