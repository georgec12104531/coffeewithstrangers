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
      <div class="form-page-container">

        <form onSubmit={this.handleSubmit}>
          {this.props.formType} or {this.props.navLink}
          <br/>
          {this.renderErrors()}
          <div>
            <h1 className="welcome-intro">{this.props.welcomeIntro}</h1>
            <br/>
            {this.props.welcomeMessage}
          </div>
          <label>Username:
            <input type="text"
              onChange={this.updateUsername}
              value={this.state.username}
              />
          </label>
          <br/>
          <label>Password:
            <input type="password"
              onChange={this.updatePassword}
              value={this.state.password}
              />
          </label>
          <br/>
          <input type="submit" value={this.props.formType}/>
        </form>

      </div>
    );
  }
}


export default withRouter(SessionForm);
