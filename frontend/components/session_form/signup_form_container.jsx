import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">login instead</Link>
  };
};

const mDP = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user))
  };
};

export default connect(mSP, mDP)(SessionForm);
