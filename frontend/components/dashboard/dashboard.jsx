import React from 'react';
import MyCoffeeTimeItem from './my_coffee_time_item';

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

    const coffeeTimes = this.props.myCoffeeTimes.map((coffeeTime, idx) => {
      return (
        <div key={idx}>
          <MyCoffeeTimeItem coffeeTime={coffeeTime} />  
        </div>
      )
    })
    
    if (this.props.coffeeTimes === undefined) {
      return <div>Loading...</div>
    }

    console.log(this.props.myCoffeeTimes);

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
          <div className="sup">{coffeeTimes}</div>}
        </div>
      </div>;
  }
}

export default Dashboard;