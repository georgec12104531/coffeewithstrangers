import React from 'react';
import {  withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    
  }

  componentDidMount() {
    this.props.clearSessionErrors();
  }

  updateUsername(e) {
    this.setState({username: e.target.value});
  }

  updatePassword(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = Object.assign({}, this.state);
    this.props.processForm( user ).then(() => (
      this.props.history.push('/coffee-times')
    ));
  }

  handleDemoLogin(e) {
    const demoUser = {username: "Stranger", password: "password"};
    this.props.login(demoUser).then(() => (
      this.props.history.push('/coffee-times')
    ));
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map( (error, i) => (
          <li className="session-list" key={`error-${i}`}>
            <div className="session-errors">{error}</div>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="form-page-container">
        <form onSubmit={this.handleSubmit}>
          <br/>
          {this.renderErrors()}
          <h2 className="welcome-intro">{this.props.welcomeIntro}</h2>
          <br />
          <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
          <div className="welcome-message">{this.props.welcomeMessage}</div>  
          <br/>
          <label>
            <input
              type="text"
              className="username-form"
              onChange={this.updateUsername}
              value={this.state.username}
              placeholder="Username"
              />
          </label>
          <br/>
          <br/>
          <label>
            <input
              className="password-form"
              type="password"
              onChange={this.updatePassword}
              value={this.state.password}
              placeholder="Password"
              />
          </label>
          <br/>
          <br/>
          <input className="form-submit" type="submit" value={this.props.formType}/>
          <br/>
          <button onClick={this.handleDemoLogin} className="form-submit">DEMO LOGIN</button>
          <br/>
          <div className="session-form-alt-signup-main">{this.props.navLink}</div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
