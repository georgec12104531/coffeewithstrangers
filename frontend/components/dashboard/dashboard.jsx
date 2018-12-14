import React from 'react';
import MyCoffeeTimeItem from './my_coffee_time_item';
import MyHostCoffeeTimeItem from './my_host_coffee_time_item';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      coffeeTimes: false,
      profile: true 
    }

    this.handleCoffeeTimes = this.handleCoffeeTimes.bind(this);
    this.handleShowCoffeeTime = this.handleShowCoffeeTime.bind(this);
  }

  componentDidMount() {
    this.props.fetchCoffeeTimes();
    this.props.fetchAttendances();
    window.scrollTo(0, 0);
  }

  handleCoffeeTimes() {
    e.preventDefault();
    this.props.history.push(`/coffee-times`);
  }

  handleShowCoffeeTime(coffeeTime) {
    return e => {
      e.preventDefault();
      this.props.history.push(`/coffee-times/${coffeeTime.id}`)
    }
  }

  render() {

    const coffeeTimes = this.props.myCoffeeTimes.map((coffeeTime, idx) => {
      return (
        <div key={idx} onClick={this.handleShowCoffeeTime(coffeeTime)}>
          <MyCoffeeTimeItem coffeeTime={coffeeTime} deleteAttendance={this.props.deleteAttendance} myAttendances={this.props.myAttendances} />  
        </div>
      )
    })

    const hostedCoffeeTimes = this.props.myHostedCoffeeTimes.map((coffeeTime, idx) => {
      return <div key={idx}>
          <MyHostCoffeeTimeItem coffeeTime={coffeeTime} deleteCoffeeTime={this.props.deleteCoffeeTime}/>
        </div>;
    })
    
    if (this.props.coffeeTimes === undefined) {
      return <div>Loading Coffee Times...</div>
    }

    return <div className="dashboard-main-container">
        <div className="dashboard-nav-main-container">
          <div className="dashboard-nav">
            <div className="dashboard-nav-bar">Your Coffee Times</div>
            <div className="dashboard-nav-bar">Profile</div>
          </div>
        </div>
        {this.state.coffeeTimes ? <div>
            Profile Page
          </div> : <div className="my-coffeeTimes-main-container">
            <div className="my-coffeeTimes-sidebar-container">
              <h2 className="my-coffeeTimes-welcome-message">
                Welcome Home, Stranger!{" "}
              </h2>
              <h2>What are you grateful today?</h2>
              <button className="my-coffeeTimes-button" onClick={this.handleCoffeeTimes}>
                Sign Up For A Coffee Time!
              </button>
            </div>
            <div className="my-coffeeTimes-container">
              <h2 className="my-coffeeTimes-title">Coffee Times You Have Coming up...</h2>
              {coffeeTimes}
            </div>
            <div className="my-coffeeTimes-container">
              <h2 className="my-coffeeTimes-title">Coffee Times You Are Hosting...</h2>
              {hostedCoffeeTimes}
            </div>
          </div>}
      </div>;
  }
}

export default Dashboard;