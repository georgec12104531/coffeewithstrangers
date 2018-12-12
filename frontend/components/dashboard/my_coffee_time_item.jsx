import React from 'react';
import moment from 'moment';
import ProgressBar from "../coffee_times/progress_bar";

const myCoffeeTimeItem = (props) => {
  return <div className="my-coffee-time-item-container">
    <div className="my-ct-date">
      <div className="my-ct-weekday">
        {moment(props.coffeeTime.date).format("dddd")}
      </div>
      <div className="my-ct-month-day">
        {moment(props.coffeeTime.date).format("MMM D")}
      </div>
      <div className="my-ct-time">
        {props.coffeeTime.start_time} - {props.coffeeTime.end_time}
      </div>
      <h4 className="my-ct-address">
        {props.coffeeTime.address},{" "} 
        {props.coffeeTime.address2}
      </h4>
    </div>
    <div className="my-coffeeTimes-cancel-button">
      CANCEL MY SPOT
    </div>
  </div>;
}

  
  



export default myCoffeeTimeItem;