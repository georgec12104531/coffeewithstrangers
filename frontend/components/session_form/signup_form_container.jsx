import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { clearSessionErrors} from '../../actions/session_actions';

const mSP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'SIGN UP',
    navLink: <Link className="session-form-alt-login" to="/login">If you already signed up before, click here to log in</Link>,
    welcomeIntro: "Join for coffee and conversation",
    welcomeMessage: "1000s of strangers across the world have sat together for conversations. Create an account and you'll be on your way to join the community."
  };
};

const mDP = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mSP, mDP)(SessionForm);
