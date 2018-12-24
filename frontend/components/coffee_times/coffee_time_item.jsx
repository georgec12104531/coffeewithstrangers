import React from 'react';
import { withRouter } from "react-router-dom";
import moment from 'moment';
import ProgressBar from './progress_bar';

class CoffeeTimeItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleJoin = this.handleJoin.bind(this)
  }

  handleJoin(e) {
    e.preventDefault();
    this.props.history.push(`/coffee-times/${this.props.coffeeTime.id}`)
  }

  render() {  

    const isAttending = () => {
      return this.props.coffeeTime.coffee_time_attendees.some(coffeeTime => coffeeTime.user_id === this.props.currentUserId)
    }

    const isHosting = () => {
      return this.props.coffeeTime.host_id === this.props.currentUserId
    }

    const status = () => {
      if (isAttending()) {
        return <button to='/coffee-times/`${this.props.coffeeTime.id}`' className="attending-coffeetime-button">YOU'RE GOING</button>
      } else if (isHosting()) {
        return <button to='/coffee-times/`${this.props.coffeeTime.id}`' className="attending-coffeetime-button">YOU'RE HOSTING</button>
      } else {
        return <button to='/coffee-times/`${this.props.coffeeTime.id}`' className="join-coffeetime-button">COUNT ME IN</button> 
      }
    }

    

    return(
      <div className="coffee-time-container" onClick={this.handleJoin}>
          <div className="coffeeTime">
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
              <h4 className="ct-host">
                HOSTED BY : {this.props.coffeeTime.host_name}
              </h4>
            </div>
            <h4 className="ct-address"> 
              {this.props.coffeeTime.address}
              <br />
              {this.props.coffeeTime.address2}
            </h4>
            <div className="ct-line">__________________________</div> 
            <br />
            <ProgressBar coffeeTime={this.props.coffeeTime} />    
          </div>
          <div>
            {status()}
          </div>
          
        </div>
    ) 
  }
}

export default withRouter(CoffeeTimeItem)