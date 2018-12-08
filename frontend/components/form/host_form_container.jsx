import { connect } from 'react-redux';
import HostForm from './host_form';
import { fetchUser, updateUser } from '../../actions/user_actions';
import { createCoffeeTime } from '../../actions/coffee_time_actions';

export const msp = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  currentUserId: state.session.id,
  locationId: ownProps.match.params.locationIdhost,
});

export const mdp = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  updateUser: user => dispatch(updateUser(user)),
  createCoffeeTime: coffeeTime => dispatch(createCoffeeTime(coffeeTime)),
});

export default connect(
  msp, 
  mdp,
)(HostForm);
