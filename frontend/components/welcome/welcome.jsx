import React from 'react';
import { Link } from 'react-router-dom';
import {  withRouter } from 'react-router-dom';

class Welcome extends React.Component {

  constructor(props) {
    super(props);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.handleCoffeeTimes = this.handleCoffeeTimes.bind(this);
    this.handleDashboard = this.handleDashboard.bind(this);
  }

  handleDemoLogin(e) {
    const demoUser = {username: "Stranger", password: "password"};
    this.props.login(demoUser).then(() => (
      this.props.history.push('/coffee-times')
    ));
  }

  handleCoffeeTimes(e) {
    e.preventDefault();
    this.props.history.push('/coffee-times');
  }

  handleDashboard(e) {
    e.preventDefault();
    this.props.history.push('/dashboard');
  }

  render() {
    const sessionLinks = () => <nav className="welcome-buttons">
      <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
      <Link className="coffee-times-nav-button" to="/coffee-times">
          COFFEE TIMES
        </Link>
        <Link className="signin-button" to="/login">
          SIGN IN
        </Link>
        <Link className="signup-button" to="/signup">
          SIGN UP
        </Link>
        <button type="button" className="demo-button" onClick={this.handleDemoLogin}>
          DEMO
        </button>
      </nav>;

    const personalWelcome = () => <nav className="personal-welcome">
        <button className="personal-welcome-button" onClick={this.handleCoffeeTimes}>
          COFFEE TIMES
        </button>
        <button type="button" className="personal-welcome-button" onClick={this.handleDashboard}>
          DASHBOARD
        </button>
        <button type="button" className="personal-welcome-button" onClick={this.props.logout}>
          SIGN OUT
        </button>
      </nav>;

    return this.props.currentUser ? personalWelcome() : sessionLinks();
  }
}

export default withRouter(Welcome);
