import React from 'react';
import moment from "moment";
import ProgressBar from '../coffee_times/progress_bar';


class CoffeeTimeBox extends React.Component {
  



  render() {
    return (
      // <div>{this.props.coffeeTime.id}</div>
      <div className="coffee-time-box-container">
          <div className="ct-date">

            <h3 className="ct-box-date">
              {moment(this.props.coffeeTime.date).format("dddd")}, &nbsp;
              {moment(this.props.coffeeTime.date).format("MMM D")}
            </h3>
            <div className="ct-time">
              {this.props.coffeeTime.start_time} -{" "}
              {this.props.coffeeTime.end_time}
            </div>
          </div>
          <div className="ct-host-container">
            <h4 className="ct-host">
              {/* HOSTED BY : {this.props.coffeeTime.host.name} */}
            </h4>
          </div>
          <h4 className="ct-address">
            {this.props.coffeeTime.address}
            <br />
            {this.props.coffeeTime.address2}
          </h4>
          <div className="ct-line">__________________________</div>
          <br />
          {/* <ProgressBar coffeeTime={this.props.coffeeTime} /> */}
      </div>
    );
  }
}

export default(CoffeeTimeBox);