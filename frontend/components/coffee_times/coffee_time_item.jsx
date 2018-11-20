import React from 'react';
import { withRouter, Link } from "react-router-dom";
import moment from "moment";
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

    return(
      <div className="coffee-time-container onClick={this.handleJoin}" onClick={this.handleJoin}>

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
          <button to='/coffee-times/`${this.props.coffeeTime.id}`' className="join-coffeetime-button">COUNT ME IN</button>
        </div>
    ) 
  }
}


export default withRouter(CoffeeTimeItem)