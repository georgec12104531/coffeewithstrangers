import React from 'react';
import { Link } from 'react-router-dom';

const Welcome  = ( { currentUser, logout } ) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to='/signup'>Sign Up</Link>
    </nav>
  );

  const personalWelcome = () => (
    <nav className="header">
      <h2 className="header-1">Hi, {currentUser.username}!</h2>
      <button onClick={logout}>Logout</button>
    </nav>
  );

  return currentUser ? personalWelcome() : sessionLinks();

};

export default Welcome;
