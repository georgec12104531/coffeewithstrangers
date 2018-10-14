import React from 'react';
import { Link } from 'react-router-dom';

{/*
  const Welcome  = ( { currentUser, logout } ) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"/>
      <Link className = "signin-button" to="/login">SIGN IN</Link>
      &emsp;&emsp;
      <Link className= "signup-button" to='/signup'>SIGN UP</Link>
    </nav>
  );

  const personalWelcome = () => (
    <nav className="header">
      <h2 className="header-1">Hi, {currentUser.username}!</h2>
      <button onClick={logout}>Logout</button>
    </nav>
  );

  return currentUser ? personalWelcome() : sessionLinks();

}; */}


class Welcome extends React.Component {

  constructor(props) {
    super(props);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }


  handleDemoLogin(e) {
    const demoUser = {username: "password", password: "password"};
    this.props.login(demoUser, () => {
    this.props.history.push('/splash');
    });
  }

  render() {
    const sessionLinks = () => (
      <nav className="welcome-buttons">
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"/>
        <Link className = "signin-button" to="/login">SIGN IN</Link>
        &emsp;&emsp;
        <Link className= "signup-button" to='/signup'>SIGN UP</Link>
        {/* */}
        <button className= "demo-button" onClick={this.handleDemoLogin}>DEMO</button>
      </nav>
    );

    const personalWelcome = () => (
      <nav className="header">
        <h2 className="header-1">Hi, {this.props.currentUser.username}!</h2>
        <button onClick={this.props.logout}>Logout</button>
      </nav>
    );



    return this.props.currentUser ? personalWelcome() : sessionLinks();
  }

}

export default Welcome;
