import React from 'react';
import withRouter from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class CoffeeTimes extends React.Component {
  constructor(props) {
    super(props);
  }

  render (){
    const locations = this.props.locations.map((location) => (
      <Link to={`/coffee-times/${location.name}`}>{location.name}</Link>
    ));


  }
}

export default withRouter(CoffeeTimes);
