import React from 'react';

class ProgressBar extends React.Component {

  componentDidMount() {
  
  }

  render() {
    
    if (this.props.coffeeTime.coffee_time_attendees === undefined) {
      return null;
    }

    const closed_seats = () => {
      let closed = [];
      this.props.coffeeTime.coffee_time_attendees.forEach((attendee, i) => {
        closed.push(<div key={i} className="closed-bar"></div>)
      });
      return closed;
    }
    
    let open_seats_count = 5 - this.props.coffeeTime.coffee_time_attendees.length;

    const open_seats = () => {
      let open = [];
      for (let i = 0; i < open_seats_count; i++) {
        open.push(<div key={i} className="open-bar"></div>)
      }
      return open;
    }

    const message = () => {
      if (open_seats_count === 0) {
        return <div>Packed!</div>
      } else {
        return <div>{open_seats_count} seats left!</div>
      }
    }

    return <div className="progress-bar-container">
        <div className="bar-message upcase">{message()}</div>
        <div className="progress-bar">
          <div className="bar-container">{closed_seats()}</div>
          <div className="bar-container">{open_seats()}</div>
        </div>
      </div>;
  }
}

export default(ProgressBar);