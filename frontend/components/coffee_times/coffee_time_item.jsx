import React from 'react';
import { withRouter } from "react-router-dom";
import moment from "moment";

class CoffeeTimeItem extends React.Component {
  
  render() {
    return <div className="coffeeTime">
        <div className="ct-date">
          <h6 className="ct-weekday">{moment(this.props.coffeeTimes.date).format("dddd")}</h6>
          <h3 className="ct-month-day">{moment(this.props.coffeeTimes.date).format("MMM D")}</h3>
        </div>
        <br />
        <div>
          {this.props.coffeeTimes.start_time}-{this.props.coffeeTimes.end_time}
        </div>
        <br />
        <div>{this.props.coffeeTimes.host_name}</div>
        <br />
        <div className="coffeeTimes">
          {this.props.coffeeTimes.address}
          {this.props.coffeeTimes.address2}
        </div>
        <div />
        <br />
        {this.props.coffeeTimes.seats_left}
        <br />
      </div>;
  }
}


export default withRouter(CoffeeTimeItem)