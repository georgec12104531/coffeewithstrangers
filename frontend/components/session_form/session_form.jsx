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
    this.props.processForm( user );
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map( (error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="form-page-container">

        <form onSubmit={this.handleSubmit}>
          {/* Sign In or Sign Up Button */}


          <br/>
          {this.renderErrors()}

          <div className="welcome-container">
            <h2 className="welcome-intro">{this.props.welcomeIntro}</h2>
            <br/>
            <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"/>
            <div className="welcome-message">{this.props.welcomeMessage}</div>
          </div>
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
          {/* {this.props.formType} */}
          <div className="session-form-alt-signup-main">{this.props.navLink}</div>
        </form>
      </div>
    );
  }
}


export default withRouter(SessionForm);
