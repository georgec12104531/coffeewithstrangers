import React from 'react';
import { Link } from 'react-router-dom';


class CoffeeNav extends React.Component {

  render() {
    return (
      <header>
        {/* font from google fonts */}
        <link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light" rel="stylesheet"/>

        <Link className="coffee-nav-link" to="/splash">
          <img className="coffee-bean-logo" src="https://static.thenounproject.com/png/4115-200.png"></img>
          <h1 className ="main-header">Coffee With Strangers</h1>

        </Link>
      </header>

    );
  }

}

export default CoffeeNav;
