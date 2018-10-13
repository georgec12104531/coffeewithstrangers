import React from 'react';
import { Link } from 'react-router-dom';


class CoffeeNav extends React.Component {

  render() {
    return (
      <header>
        {/* font from google fonts */}
        <link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light" rel="stylesheet"/>

        <Link to="/splash">
          <h1 className ="main-header">coffee with strangers</h1>
        </Link>
        
      </header>

    );
  }

}

export default CoffeeNav;
