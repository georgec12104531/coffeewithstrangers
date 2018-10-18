import React from 'react';
import withRouter from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class CoffeeTimes extends React.Component {
  constructor(props) {
    super(props);
  }

  render (){

    const coffeeTimesSF = this.props.coffee_times.filter( (coffeeTime) => (
      coffeeTime.location_id === 19
    ));

    const coffeeTimesNY = this.props.coffee_times.filter( (coffeeTime) => (
      coffeeTime.location_id === 20
    ));

    const coffeeTimesBoston = this.props.coffee_times.filter( (coffeeTime) => (
      coffeeTime.location_id === 21
    ));

    const coffeeTimesLondon = this.props.coffee_times.filter( (coffeeTime) => (
      coffeeTime.location_id === 22
    ));

    const coffeeTimesChicago = this.props.coffee_times.filter( (coffeeTime) => (
      coffeeTime.location_id === 23
    ));

    const coffeeTimesSeattle = this.props.coffee_times.filter( (coffeeTime) => (
      coffeeTime.location_id === 24
    ));

    const coffeeTimesLosAngeles = this.props.coffee_times.filter( (coffeeTime) => (
      coffeeTime.location_id === 25
    ));


    <div>
      
    </div>


  }
}

export default withRouter(CoffeeTimes);
