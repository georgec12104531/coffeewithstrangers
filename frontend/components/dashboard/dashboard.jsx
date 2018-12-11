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
    
    if (this.props.coffeeTimes === undefined) {
      return <div>Loading...</div>
    }

    console.log("this is attendances", this.props.myAttendances)

    console.log(this.props.myCoffeeTimesObjects);

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