import React from 'react';




class ProgressBar extends React.Component {


  render() {
    
    // const closed_seats = this.props.coffeeTime.coffee_time_attendees.map((attendee, i) => {
    //   return(
    //     <div key={i} className="closed">"closed"</div>
    //   )
    // })

    const closed_seats = () => {
      let closed = [];
      this.props.coffeeTime.coffee_time_attendees.forEach((attendee) => {
        <div >{closed.push("c")}</div>
      });
      return closed;
    }

    
    let open_seats_count = 5 - (Object.keys(this.props.coffeeTime.coffee_time_attendees).length)

    const open_seats = () => {
      let open = [];
      for (let i = 0; i < open_seats_count; i++) {
        <div>{open.push("o")}</div>
      }
      return open;
    }

    return <div>
        <div>{closed_seats()}</div>
        <div>{open_seats()}</div>
      </div>;
    
    
  }
}

export default(ProgressBar);