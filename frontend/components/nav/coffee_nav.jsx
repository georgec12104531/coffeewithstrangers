import React from 'react';
import { Link } from 'react-router-dom';


class CoffeeNav extends React.Component {

  render() {
    return (
      <header>
        
        <Link to="/splash">
          <h1 className ="main-header">coffeewithstrangers</h1>
        </Link>
      </header>

    );
  }

}

export default CoffeeNav;
