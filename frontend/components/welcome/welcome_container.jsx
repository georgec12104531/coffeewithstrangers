import { connect } from 'react-redux';

import { logout, login } from '../../actions/session_actions';
import Welcome from './welcome';



const mSP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};


const mDP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    login: (user, callback) => dispatch(login(user, callback))
  };
};

export default connect(mSP, mDP)(Welcome);
