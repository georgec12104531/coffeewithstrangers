import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchCoffeeTimes } from '../../actions/coffee_time_actions';
import { fetchAttendances } from '../../actions/attendance_actions';


export const msp = state => ({ 
  myAttendances: Object.values(state.entities.attendances),
});


export const mdp = dispatch => ({
  fetchCoffeeTimes: () => dispatch(fetchCoffeeTimes()),
  fetchAttendances: () => dispatch(fetchAttendances()),
});


export default connect(msp, mdp)(Dashboard);