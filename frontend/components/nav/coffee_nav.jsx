import React from 'react';
import { withRouter } from 'react-router';
import CoffeeLogo from '../coffee_time/coffeeone.png'


class CoffeeNav extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push('/splash');
  }

  render() {
    return (
      <div className="coffee-main-logo-container" onClick={this.handleClick}>
        <link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light" rel="stylesheet"/>
        <img className="coffee-cup" src={CoffeeLogo} />
        <h1 className ="main-header">Coffee With Strangers</h1>
      </div>
    );
  }

}

export default withRouter(CoffeeNav);
