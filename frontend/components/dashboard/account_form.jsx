import React from 'react';
import { withRouter } from 'react-router'

class AccountForm extends React.Component {
  
  constructor(props) {
    super(props);
    const { currentUser } = this.props;
    this.state = {
      name: currentUser.name,
      email: currentUser.email,
      introduction: currentUser.introduction,
      story: currentUser.story
    }

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleUpdate(field) {
    return e => {
      e.preventDefault();
      this.setState({
        [field]: e.currentTarget.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser({
      id: this.props.currentUser.id,
      name: this.state.name,
      email: this.state.email,
      introduction: this.state.introduction,
      story: this.state.story
    });
  }

  render() {
    
    return <div className="my-account-details-main-container">
        <h2 className="my-account-details-edit-header">Edit Your Profile</h2>
        <form className="my-account-details-form-main-container">
          <h3 className="my-account-form-header">Personal Information</h3>
          <div className="my-account-form-row-main-container">
            <div className="my-account-form-row-container">
              <div className="my-account-form-section">
                <h4 className="my-account-form-section-sub-header">Name</h4>
                <input className="my-account-form-row-input" onChange={this.handleUpdate("name")} value={this.state.name} />
              </div>
              <div className="my-account-form-section">
                <h4 className="my-account-form-section-sub-header">Email</h4>
                <input className="my-account-form-row-input" onChange={this.handleUpdate("email")} value={this.state.email} />
              </div>
            </div>
            <div className="my-account-form-section">
              <h4 className="my-account-form-section-sub-header">A Brief Introduction</h4>
              <textarea className="my-account-form-row-large-input" onChange={this.handleUpdate("introduction")} value={this.state.introduction} />
            </div>
            <div className="my-account-form-section">
              <h4 className="my-account-form-section-sub-header">Your Story</h4>
              <textarea className="my-account-form-row-large-input" onChange={this.handleUpdate("story")} value={this.state.story} />
            </div>
            <button className="my-acccount-save-changes-button" onClick={this.handleSubmit}>SAVE CHANGES</button>
          </div>
        </form>
      </div>; 
  }
  
}

export default withRouter(AccountForm);