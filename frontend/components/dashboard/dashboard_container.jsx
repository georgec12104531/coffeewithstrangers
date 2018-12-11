import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchCoffeeTimes } from '../../actions/coffee_time_actions';
import { fetchAttendances } from '../../actions/attendance_actions';
import { myCoffeeTimes } from "../../reducers/selectors";


export const msp = state => ({ 
  coffeeTimes: Object.values(state.entities.coffeeTimes),
  myCoffeeTimes: myCoffeeTimes(state),
});

export const mdp = dispatch => ({
  fetchCoffeeTimes: () => dispatch(fetchCoffeeTimes()),
  fetchAttendances: () => dispatch(fetchAttendances()),
});


export default connect(msp, mdp)(Dashboard);