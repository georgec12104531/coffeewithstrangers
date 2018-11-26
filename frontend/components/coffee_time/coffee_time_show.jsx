import React from 'react';

class CoffeeTime extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCoffeeTime(this.props.id);
  }
  
  render() {
    return(
      <div>
        "Welcome to the coffee time show page"
      </div>
    )
  } 
}

export default(CoffeeTime);