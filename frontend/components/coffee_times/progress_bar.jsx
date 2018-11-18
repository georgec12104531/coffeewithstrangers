import React from 'react';




class ProgressBar extends React.Component {


  render() {

    const closed_seats = () => {
      let closed = [];
      this.props.coffeeTime.coffee_time_attendees.forEach((attendee) => {
        closed.push(<div className="closed-bar"></div>)
      });
      return closed;
    }
    
    let open_seats_count = 5 - (Object.keys(this.props.coffeeTime.coffee_time_attendees).length)

    const open_seats = () => {
      let open = [];
      for (let i = 0; i < open_seats_count; i++) {
        open.push(<div className="open-bar"></div>)
      }
      return open;
    }

    return <div className="progress-bar">
        <div className="bar-container">{closed_seats()}</div>
        <div className="bar-container">{open_seats()}</div>
      </div>;
    
    
  }
}

export default(ProgressBar);