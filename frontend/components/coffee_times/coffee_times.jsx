import React from 'react';
import { withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

class CoffeeTimes extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchLocations();
    this.props.fetchCoffeeTimes();
  }

  render (){

    const locations = () => (this.props.locations.map((location, i) => (
      <Link key={i} to={`/coffee-times/${location.name}`}>{location.name}</Link>
      )));

    return (
      <div>
        <div className="locations">
        {locations()}
        </div>

        <div className="test">
          {this.props.coffeeTimesSF.map((coffeeTime) => (
              <div>
                {coffeeTime.date}
              <br/>
                {coffeeTime.address}
              </div>
            ))}
        </div>

      </div>
    );
  }
}

export default withRouter(CoffeeTimes);
