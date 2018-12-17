import React from 'react';

class AccountForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
                <input className="my-account-form-row-input"></input>
              </div>
              <div className="my-account-form-section">
                <h4 className="my-account-form-section-sub-header">Email</h4>
                <input className="my-account-form-row-input"></input>
              </div>
            </div>
            <div className="my-account-form-section">
              <h4 className="my-account-form-section-sub-header">A Brief Introduction</h4>
              <textarea className="my-account-form-row-large-input"></textarea>
            </div>
            <div className="my-account-form-section">
              <h4 className="my-account-form-section-sub-header">Your Story</h4>
              <textarea className="my-account-form-row-large-input"></textarea>
            </div>
            <button className="my-acccount-save-changes-button">SAVE CHANGES</button>
          </div>
        </form>
      </div>; 
  }

  
}

export default AccountForm;