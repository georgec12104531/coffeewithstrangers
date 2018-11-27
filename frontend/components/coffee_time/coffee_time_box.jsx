import React from 'react';
import moment from "moment";
import ProgressBar from '../coffee_times/progress_bar';
import calendarLogo from './calendar.png';


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

    return (
      <div className="coffee-time-box-container">
          <div className="host-name-container">
          <img src={calendarLogo} alt="Logo"/>
            <div>Join {this.props.coffeeTime.host_name}'s Coffee Time!</div>
          </div>
          <div className="ct-line">__________________________</div>
          <div className="ct-box-date-container">
            {/* date logo */}
            <h3 className="ct-box-date">
              {moment(this.props.coffeeTime.date).format("dddd")}, {" "}
              {moment(this.props.coffeeTime.date).format("MMM D")}
            </h3>
          </div>
          <div className="ct-time-container">
            {/* time logo */}
            <div className="ct-time">
              {this.props.coffeeTime.start_time} -{" "}
              {this.props.coffeeTime.end_time}  
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
      </div>
    );
  }
}

export default(CoffeeTimeBox);