import React from 'react';
import { withRouter } from "react-router-dom";
import moment from "moment";

class CoffeeTimeItem extends React.Component {
  
  render() {

    return <div className="coffeeTime">
        <div className="ct-date">
          <h6 className="ct-weekday">
            {moment(this.props.coffeeTime.date).format("dddd")}
          </h6>
          <h3 className="ct-month-day">
            {moment(this.props.coffeeTime.date).format("MMM D")}
          </h3>
          <div className="ct-time">
            {this.props.coffeeTime.start_time} - {this.props.coffeeTime.end_time}
          </div>
        </div>
        <div className="ct-host-container">
          <div className="ct-host">
            Hosted By: {this.props.coffeeTime.host_name}
          </div>
        </div>
        <div className="ct-address"> 
        
          {this.props.coffeeTime.address}
          <br />
          {this.props.coffeeTime.address2}
        </div>
        <div className="ct-line">__________________________</div> 
        <br />
        <div>{this.props.coffeeTime.seats_left}</div>
        
      </div>;
  }
}


export default withRouter(CoffeeTimeItem)