import React from 'react';
import moment from "moment";
import ProgressBar from '../coffee_times/progress_bar';
import calendarLogo from './calendar.png';
import clock from './clock.png';


class CoffeeTimeBox extends React.Component {


  componentDidMount() {
    this.props.fetchCoffeeTime(this.props.id);
  }

  componentWillMount() {
    this.props.fetchCoffeeTime(this.props.id);
  }

  render() {
    if (this.props.coffeeTime.host_name === undefined) {
      return <div>
        LOADING...
      </div>
    }

    return <div className="coffee-time-box-container">
        <div className="host-name-container">
          <h2 className="host-name">Join {this.props.coffeeTime.host_name} for Coffee Time!</h2>
        </div>
        <div className="ct-box-line"></div>
        <div className="ct-box-date-container">
          <img src={calendarLogo} alt="Logo" className="calendar-logo" />
          <h3 className="ct-box-date">
           {moment(this.props.coffeeTime.date).format("dddd")}, {moment(this.props.coffeeTime.date).format("MMM D")}
          </h3>
          
        </div>
        <div className="ct-time-container">
          <img src={clock}/>
          <div className="ct-time">
            {this.props.coffeeTime.start_time} - {this.props.coffeeTime.end_time}
          </div>
        </div>
        <div>
          <h4 className="ct-address">
            {this.props.coffeeTime.address}
            <br />
            {this.props.coffeeTime.address2}
          </h4>
        </div>
        <br />
        {/* <ProgressBar coffeeTime={this.props.coffeeTime} />  */}
      </div>;
  }
}

export default(CoffeeTimeBox);