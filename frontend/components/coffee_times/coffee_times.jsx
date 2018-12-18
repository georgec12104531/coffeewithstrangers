import React from 'react';
import { withRouter } from 'react-router-dom';
import { HashLink as Link} from 'react-router-hash-link';
import CoffeeTimeItem from "./coffee_time_item";


class CoffeeTimes extends React.Component {

  constructor(props) {
    super(props)

    this.handleHost = this.handleHost.bind(this);
  }

  componentDidMount() {
    this.props.fetchLocations();
    this.props.fetchCoffeeTimes();
    this.props.fetchAttendances();
  }

  handleHost(location) {
    return e => {
      e.preventDefault();
      this.props.history.push(`/locations/${location.id}/host`)
    }
  }

  render (){
    const locations = () => this.props.locations.map((location, i) => (
      <Link key={i} className="location-nav" to={`/coffee-times#${location.id}`}>
        {location.name}      
      </Link>
      ));
      
    const locationCoffeeTimes = this.props.locations.map((location, idx) => {
      return <div key={idx} className="location" id={location.id}>
          <h2 className="city">{location.name}</h2>
          {location.coffee_times.map((coffeeTime, i) => (
            <CoffeeTimeItem key={i} coffeeTime={coffeeTime} />
          ))}
          <div className="add-coffee-time-button-container" onClick={this.handleHost(location)}>
            <div className="add-coffee-time-button">+</div>
          </div>
        </div>;
    })
    
    return <div>
        <div className="index-container">
          <div className="ct-background-film">
            <div className="ct-background-text-group">
              <link href="https://fonts.googleapis.com/css?family=Nunito+Sans" rel="stylesheet" />
              <h1 className="ct-header-text">GOOD CONVERSATIONS</h1>
              <a name="top">top</a>
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
            <div className="city-item-container">
              <div>{locationCoffeeTimes}</div>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default withRouter(CoffeeTimes);
