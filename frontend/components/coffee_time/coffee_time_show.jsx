import React from 'react';
import CoffeeTimeBox from './coffee_time_box';

class CoffeeTime extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCoffeeTime(this.props.id);
  }

  render() {
    if (this.props.coffeeTime === undefined) {
      return <div>
        LOADING...
      </div>
    }
    return (
      <div className="show-page-container">
        <div className="coffee-time-side-bar-container">
          <CoffeeTimeBox coffeeTime={this.props.coffeeTime} />
        </div>
      </div>
    );
  }
}



export default(CoffeeTime);