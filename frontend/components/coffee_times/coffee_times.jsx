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

    const locations = () => this.props.locations.map((location, i) => (
        <Link key={i} to={`/coffee-times/${location.name}`}>
          <div className="location-nav">{location.name}</div>
        </Link>
      ));


    // Add city
    // Add coffee times in that specific city
    
    // const locationItems = () => this.props.locations

    return <div>
        <div className="index-container">
          <div className="ct-background-film">
            <div className="ct-background-text-group">
              <link href="https://fonts.googleapis.com/css?family=Nunito+Sans" rel="stylesheet" />
              <h1 className="ct-header-text">GOOD CONVERSATIONS</h1>
              <h2 className="ct-header-2-text">THEY ARE HARD TO FIND.</h2>
            </div>
          </div>
        </div>

        <div className="ct-page-container">
          <div className="ct-page-intro">
            <div className="ct-page-header">
              Coffee With Strangers is coffee, with strangers
            </div>
            <div className="ct-page-intro-message">
              For two hours, five-ish strangers sit at a cafe (or some other
              public place) with a host to talk. Not about anything in
              particular. The circumstances are unusual, but that's the
              point.
            </div>
          </div>

          <div className="locations-container">
            <div className="locations-nav-container">
              <div className="locations-message">
                JUMP TO YOUR CITY'S COFFEE TIMES
              </div>
              <div className="locations">{locations()}</div>
            </div>
          </div>

          <div className="city-container">
            {this.props.coffeeTimesSF.map(coffeeTime => (
              <div className="coffeeTime">
              <div className="ct-date">
                {coffeeTime.date}
              </div>
                <br />
                <div>
                  {coffeeTime.start_time}-
                  {coffeeTime.end_time}  
                </div>
                <br />
                <div>
                  {coffeeTime.host_name}
                </div>
                <br />
                <div className="ct">
                  {coffeeTime.address}
                  {coffeeTime.address2}
                </div>
                <div />
                <br />
                {coffeeTime.capacity}
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>;
  }
}

export default withRouter(CoffeeTimes);
