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

  handleCoffeeTimesButton(e) {
    e.preventDefault();
    this.props.history.push(`/coffee-times`);
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
        {this.state.coffeeTimes ? <div>
            Hi
          </div> : <div className="my-coffeeTimes-main-container">
            <div className="my-coffeeTimes-sidebar-container">
              <h2 className="my-coffeeTimes-welcome-message">
                Welcome Home, Stranger!{" "}
              </h2>
              <h2>What are you grateful today?</h2>
              <button className="my-coffeeTimes-button">
                Sign Up For A Coffee Time!
              </button>
            </div>
            <div className="my-coffeeTimes-container">
              <h2 className="my-coffeeTimes-title">Coffee Times You Have Coming up...</h2>
              {coffeeTimes}
            </div>
          </div>}
      </div>;
  }
}

export default Dashboard;