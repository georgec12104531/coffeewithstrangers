import React from 'react';


class Dashboard extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return <div className="dashboard-main-container">
        <div className="dashboard-nav-main-container">
          <div className="dashboard-nav">
            <div className="dashboard-nav-bar">Your Coffee Times</div>
            <div className="dashboard-nav-bar">Profile</div>
          </div>
        </div>
      </div>;
  }
}

export default Dashboard;