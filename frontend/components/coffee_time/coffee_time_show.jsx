import React from 'react';
import CoffeeTimeBox from './coffee_time_box';
import coffeeone from './coffeeone.png';

class CoffeeTime extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCoffeeTime(this.props.id);
  }

  render() {
    if (this.props.coffeeTime === undefined) {
      return <div>
        LOADING...
      </div>
    }
    return <div className="show-page-container">
        <div className="coffee-time-side-bar-container">
          <CoffeeTimeBox coffeeTime={this.props.coffeeTime} fetchCoffeeTime={this.props.fetchCoffeeTime} id={this.props.id} />
          <button className="coffee-time-side-bar-button">
            Sign me Up
          </button>
          <div className="coffee-time-side-bar-info-container">
            <h5>WHAT IS COFFEE TIME EXACTLY?</h5>
            <img src={coffeeone}/>
            <p>
              Tea Time is where five-ish strangers sit at a cafe with a Host
              to have a two hour conversation. It's not about anything in
              particular.
            </p>
            <p>
              You're meant to know pretty much nothing about the people that
              come, aside from the fact that they all signed up for this —
              just like you. It's self-selecting in that sense.
            </p>
            <p>However, it may bring you comfort to know a little something about your Host. If so, just keep reading</p>
          </div>
        </div>
      </div>;
  }
}



export default(CoffeeTime);