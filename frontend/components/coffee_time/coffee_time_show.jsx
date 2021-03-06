import React from 'react';
import CoffeeTimeBox from './coffee_time_box';
import coffeeone from './coffeeone.png';
import profile from './profile.png';

class CoffeeTime extends React.Component {

  constructor(props) {
    super(props);
    this.handleCreateAttendance = this.handleCreateAttendance.bind(this);
  }

  componentDidMount() {
    this.props.fetchCoffeeTime(this.props.id);
    this.props.fetchAttendances();
    window.scrollTo(0, 0);
  }

  handleCreateAttendance(e) {
    e.preventDefault(); 

    this.props.currentUserId ? 
    this.props.createAttendance({ user_id: this.props.currentUserId, coffee_time_id: this.props.id}, setTimeout(() => this.props.history.push('/dashboard'), 1000))
    : this.props.history.push('/signup')
   }

  render() {

    if (this.props.coffeeTime === undefined) {
      return null
    }

    if (this.props.coffeeTime.host === undefined) {
      return null
    }

    const isAttending = () => {
      return this.props.coffeeTime.coffee_time_attendees.some(coffeeTime => coffeeTime.user_id === this.props.currentUserId)
    }

    const isHosting = () => {
      return this.props.coffeeTime.host.id === this.props.currentUserId;
    }

    const signUpButton = () => {
      if (isAttending()) {
        return <button className="coffee-time-side-bar-button">
          You're Going
        </button>
      } else if (isHosting()){
        return <button className="coffee-time-side-bar-button">
          You're Hosting  
        </button>
      } else if (this.props.coffeeTime.coffee_time_attendees.length === 5) {
        return <button className="coffee-time-side-bar-button">
          Full House
        </button>
      } else if (this.props.coffeeTime.coffee_time_attendees.length < 5) {
        return <button onClick={this.handleCreateAttendance} className="coffee-time-side-bar-button">
              Sign Me Up
        </button>
      } 
    }

    return <div className="show-page-main-container">
        <div className="show-page-container">
          <div className="coffee-time-side-bar-container">
            <CoffeeTimeBox coffeeTime={this.props.coffeeTime} fetchCoffeeTime={this.props.fetchCoffeeTime} id={this.props.id} />
            <div>{signUpButton()}</div>
            <div className="coffee-time-side-bar-info-container">
              <h5 className="coffee-time-side-bar-info-intro">
                WHAT IS COFFEE TIME EXACTLY?
              </h5>
              <img className="coffee-cup" src={coffeeone} />
              <div className="ct-side-bar-info-line" />
              <p>
                Coffee Time is where five-ish strangers sit at a cafe with a
                Host to have a two hour conversation. It's not about
                anything in particular.
              </p>
              <p>
                You're meant to know pretty much nothing about the people
                that come, aside from the fact that they all signed up for
                this — just like you. It's self-selecting in that sense.
              </p>
              <p>
                However, it may bring you comfort to know a little something
                about your Host. If so, just keep reading
              </p>
            </div>
          </div>
          <div className="meet-your-host-container">
            <div className="host-intro-container">
              <div className="host-intro">
                Meet Your Host, {this.props.coffeeTime.host_name}
              </div>
              <h5 className="host-intro-message">
                (It'll be helpful to know what they look like when you're
                looking for a group of confused strangers at the cafe.)
              </h5>
            </div>
            
            <img src={profile} alt="Logo" className="profile-pic" />
            <div className="host-box-info-container">
              <h3>A little about me...</h3>
              <p className="host-intro-paragraph">
                {this.props.coffeeTime.host.introduction}
              </p>
              <h3>What's my story?</h3>
              <p className="host-intro-paragraph">
                {this.props.coffeeTime.host.story}
              </p>
              <h3>What might we talk about?</h3>
              <p className="host-intro-paragraph">
                {this.props.coffeeTime.topics}
              </p>
            </div>
          </div>
        </div>;
      </div>;
  }
}



export default(CoffeeTime);