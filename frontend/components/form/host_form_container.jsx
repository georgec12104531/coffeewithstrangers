import { connect } from 'react-redux';
import HostForm from './host_form';
import { fetchUser } from '../../actions/user_actions';

export const msp = state => ({
  currentUser: state.entities.users[state.session.id],
  currentUserId: state.session.id,
});

export const mdp = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
});

export default connect(
  msp, 
  mdp,
)(HostForm);
