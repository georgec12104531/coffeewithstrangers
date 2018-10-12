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
    formType: 'login',
    navLink: <Link to="/signup">sign up instead</Link>
  };
};

const mDP = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mSP, mDP)(SessionForm);
