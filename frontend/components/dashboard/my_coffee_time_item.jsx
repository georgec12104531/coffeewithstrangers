import React from 'react';
import moment from 'moment';

const myCoffeeTimeItem = (props) => {

  if (props.myAttendances === undefined) {
    return <div>Loading My Attendances...</div>;
  }
 
  const myAttendance = props.myAttendances.filter(attendance => attendance.coffee_time_id === props.coffeeTime.id)
  console.log(myAttendance)

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
    <div className="my-coffeeTimes-cancel-button" >
      {/* onClick={() => props.deleteAttendance()}   */}
      CANCEL MY SPOT
    </div>
  </div>;
}

export default myCoffeeTimeItem;