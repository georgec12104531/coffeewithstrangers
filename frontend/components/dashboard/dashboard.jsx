import React from 'react';
import MyCoffeeTimeItem from './my_coffee_time_item';
import MyHostCoffeeTimeItem from './my_host_coffee_time_item';
import AccountForm from './account_form';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      coffeeTimes: true,
      profile: false 
    }

    this.handleCoffeeTimes = this.handleCoffeeTimes.bind(this);
    this.handleToggleCoffeeTimes = this.handleToggleCoffeeTimes.bind(this);
    this.handleToggleProfile = this.handleToggleProfile.bind(this)
  }

  componentDidMount() {
    this.props.fetchCoffeeTimes();
    this.props.fetchAttendances();
    window.scrollTo(0, 0);
  }

  handleCoffeeTimes(e) {
    e.preventDefault();
    this.props.history.push(`/coffee-times`);
  }

  handleToggleCoffeeTimes() {
    this.setState({
      coffeeTimes: true,
      profile: false
    });
  }

  handleToggleProfile() {
    this.setState({ 
      coffeeTimes: false, 
      profile: true 
    });
  }

  render() {  

    const coffeeTimes = this.props.myCoffeeTimes.map((coffeeTime, idx) => {
      return (
        <div key={idx}>
          <MyCoffeeTimeItem coffeeTime={coffeeTime} deleteAttendance={this.props.deleteAttendance} myAttendances={this.props.myAttendances} />  
        </div>
      )
    })

    const hostedCoffeeTimes = this.props.myHostedCoffeeTimes.map((coffeeTime, idx) => {
      return <div key={idx}>
          <MyHostCoffeeTimeItem coffeeTime={coffeeTime} deleteCoffeeTime={this.props.deleteCoffeeTime} />
        </div>;
    })
    
    if (this.props.coffeeTimes === undefined) {
      return <div>Loading Coffee Times...</div>
    }

    return <div className="dashboard-main-container">
        <div className="dashboard-nav-main-container">
          <div className="dashboard-nav-container">
            <div className="dashboard-nav">
              <div className="dashboard-nav-bar" onClick={this.handleToggleCoffeeTimes}>Your Coffee Times</div>
              <div className="dashboard-nav-bar" onClick={this.handleToggleProfile}>Profile</div>
            </div>
          </div>
        </div>
      {this.state.profile ? <div className="my-profile-main-container">
        <div className="my-profile-sidebar-container">
          <h2 className="my-coffeeTimes-welcome-message">
            Welcome Home, {this.props.currentUser.name}!{" "}
          </h2>
          <h2>What are you grateful for today?</h2>
        </div>
          <AccountForm currentUser={this.props.currentUser} updateUser={this.props.updateUser} />
          </div> : <div className="my-coffeeTimes-super-main-container">
            <div className="my-coffeeTimes-main-container">
              <div className="my-coffeeTimes-sidebar-container">
                  <h2 className="my-coffeeTimes-welcome-message">
                    Welcome Home, Stranger!{" "}
                  </h2>
                  <h2>What are you grateful for today?</h2>
                  <button className="my-coffeeTimes-button" onClick={this.handleCoffeeTimes}>
                    Sign Up For A Coffee Time!
                  </button>
                </div>
                <div className="my-coffeeTimes-container">
                  <h2 className="my-coffeeTimes-title">Coffee Times You Have Coming Up...</h2>
                  {coffeeTimes}
                </div>
                <div className="my-coffeeTimes-container">
                  <h2 className="my-coffeeTimes-title">Coffee Times You're Hosting...</h2>
                  {hostedCoffeeTimes}
                </div>
            </div>
          </div>}
      </div>;
  }
}

export default Dashboard;