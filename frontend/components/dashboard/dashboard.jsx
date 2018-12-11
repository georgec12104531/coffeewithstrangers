import React from 'react';


class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      coffeeTimes: false,
      profile: true 
    }
  }

  componentDidMount() {
    this.props.fetchCoffeeTimes();
    this.props.fetchAttendances();
  }

  render() {
    
   

    const coffeeTimes = () => {
      return(
        <div>"This will be all the coffeeTimes you you are attending</div>
      )
    }

    return <div className="dashboard-main-container">
        <div className="dashboard-nav-main-container">
          <div className="dashboard-nav">
            <div className="dashboard-nav-bar">Your Coffee Times</div>
            <div className="dashboard-nav-bar">Profile</div>
          </div>
          
        </div>
        <div>
          {this.state.coffeeTimes ?
          <div>Hi</div> :
          <div> The other one</div>}
        </div>
       

        
      </div>;
  }
}

export default Dashboard;