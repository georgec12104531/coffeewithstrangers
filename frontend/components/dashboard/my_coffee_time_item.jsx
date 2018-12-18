import React from 'react';
import moment from 'moment';
import { withRouter } from 'react-router';

class MyCoffeeTimeItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleShowCoffeeTime = this.handleShowCoffeeTime.bind(this);
  }

  handleShowCoffeeTime(coffeeTime) {
    return e => {
      e.preventDefault();
      this.props.history.push(`/coffee-times/${coffeeTime.id}`);
    };
  }

  render() {
    if (this.props.coffeeTime === undefined) {
      return "loading...";
    }

    const myAttendance = this.props.myAttendances.filter(
      attendance => attendance.coffee_time_id === this.props.coffeeTime.id
    )[0];

    return (
      <div className="my-coffee-time-item-container">
        <div className="my-ct-date" onClick={this.handleShowCoffeeTime(this.props.coffeeTime)}>
          <div className="my-ct-weekday">
            {moment(this.props.coffeeTime.date).format("dddd")}
          </div>
          <div className="my-ct-month-day">
            {moment(this.props.coffeeTime.date).format("MMM D")}
          </div>
          <div className="my-ct-time">
            {this.props.coffeeTime.start_time} -{" "}
            {this.props.coffeeTime.end_time}
          </div>
          <h4 className="my-ct-address">
            {this.props.coffeeTime.address}, {this.props.coffeeTime.address2}
          </h4>
        </div>
        <div
          className="my-coffeeTimes-cancel-button"
          onClick={() =>
            this.props.deleteAttendance(
              myAttendance.id,
              this.props.coffeeTime.id
            )
          }
        >
          CANCEL MY SPOT
        </div>
      </div>
    );
  }
};

export default withRouter(MyCoffeeTimeItem);