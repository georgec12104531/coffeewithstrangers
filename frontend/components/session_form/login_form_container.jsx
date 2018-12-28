import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { clearSessionErrors } from '../../actions/session_actions';

// errors (array) - list of errors from the state
// formType (string): 'login' or 'signup', for each respective container

const mSP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'SIGN IN',
    navLink: <Link className="session-form-alt-signup" to="/signup">If you've never signed up before, click here to do that</Link>,
    welcomeIntro: "Hey stranger!",
    welcomeMessage: "It's good to have you back. Sign in here and sign up for your next coffee with strangers!"
  };
};

const mDP = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    login: (user, callback) => dispatch(login(user, callback))
  };
};

export default connect(mSP, mDP)(SessionForm);
