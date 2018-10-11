import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Welcome from './welcome';



const mSP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};


const mDP = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mSP, mDP)(Welcome);
