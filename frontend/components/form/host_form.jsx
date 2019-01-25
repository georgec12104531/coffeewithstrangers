import React from 'react';
import profile from './profile.png';

class HostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      start_time: "",
      end_time: "",
      address: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      topics: "",
      introduction: this.props.currentUser.introduction,
      story: this.props.currentUser.story
    }

    this.handUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate(field) {
    return (e) => {
      this.setState({
      [field]: e.currentTarget.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createCoffeeTime({
      host_id: this.props.currentUserId,
      location_id: this.props.locationId,
      date: this.state.date,
      start_time: this.state.start_time,
      end_time: this.state.end_time, 
      address: this.state.address,
      address2: this.state.address2,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      topics: this.state.topics
    })

    this.props.updateUser({
      id: this.props.currentUserId,
      introduction: this.state.introduction,
      story: this.state.story
    })

    this.props.history.push('/dashboard');
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUserId);
    window.scrollTo(0, 0);
  }

  render() {
    if (this.props.currentUser === undefined) {
      return <div>loading...</div>;
    }

    const fromTimes = [
      "8:00AM",
      "8:15AM",
      "8:30AM",
      "8:45AM",
      "9:00AM",
      "9:15AM",
      "9:30AM",
      "9:45AM",
      "10:00AM",
      "10:15AM",
      "10:30AM",
      "10:45AM",
      "11:00AM",
      "11:15AM",
      "11:30AM",
      "11:45AM",
      "12:00PM",
      "12:15PM",
      "12:30PM",
      "12:45PM",
      "1:00PM",
      "1:15PM",
      "1:30PM",
      "1:45PM",
      "2:00PM",
      "2:15PM",
      "2:30PM",
      "2:45PM",
      "3:00PM",
      "3:15PM",
      "3:30PM",
      "3:45PM",
      "4:00PM",
      "4:15PM",
      "4:30PM",
      "4:45PM",
      "5:00PM",
      "5:15PM",
      "5:30PM",
      "5:45PM",
      "6:00PM",
      "6:15PM",
      "6:30PM",
      "6:45PM",
      "7:00PM",
      "7:15PM",
      "7:30PM",
      "7:45PM",
      "8:00PM"
    ];

    const toTimes = [
      "8:15AM",
      "8:30AM",
      "8:45AM",
      "9:00AM",
      "9:15AM",
      "9:30AM",
      "9:45AM",
      "10:00AM",
      "10:15AM",
      "10:30AM",
      "10:45AM",
      "11:00AM",
      "11:15AM",
      "11:30AM",
      "11:45AM",
      "12:00PM",
      "12:15PM",
      "12:30PM",
      "12:45PM",
      "1:00PM",
      "1:15PM",
      "1:30PM",
      "1:45PM",
      "2:00PM",
      "2:15PM",
      "2:30PM",
      "2:45PM",
      "3:00PM",
      "3:15PM",
      "3:30PM",
      "3:45PM",
      "4:00PM",
      "4:15PM",
      "4:30PM",
      "4:45PM",
      "5:00PM",
      "5:15PM",
      "5:30PM",
      "5:45PM",
      "6:00PM",
      "6:15PM",
      "6:30PM",
      "6:45PM",
      "7:00PM",
      "7:15PM",
      "7:30PM",
      "7:45PM",
      "8:00PM",
      "8:15PM",
      "8:30PM",
      "8:45PM",
      "9:00PM",
      "9:15PM",
      "9:30PM",
      "9:45PM",
      "10:00PM"
    ];

    return <div className="coffee-time-hosting-form-super-main-container">
        <div className="coffee-time-hosting-form-main-container">
          <div className="coffee-time-hosting-form-container">
            <h2 className="coffee-time-hosting-form-intro">
              Plan Your Coffee Time
            </h2>
            <form className="hosting-form-container">
              <div>
                Date
                <br />
                <input type="date" className="host-form-date" onChange={this.handleUpdate("date")} value={this.state.date} />
              </div>
              <div>
                <div className="coffee-time-hosting-form-time-container">
                  <select size="1" className="coffee-time-hosting-form-time" onChange={this.handleUpdate("start_time")} value={this.state.start_time}>
                    <option value="disabled">Select Start Time</option>
                    {fromTimes.map((time, idx) => (
                      <option key={idx}>{time}</option>
                    ))}
                  </select>
                  to
                  <select size="1" className="coffee-time-hosting-form-time" onChange={this.handleUpdate("end_time")} value={this.state.end_time}>
                    <option value="disabled">Select End Time</option>
                    {toTimes.map((time, idx) => (
                      <option key={idx}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="coffee-time-hosting-form-item-container">
                Address 1
                <br />
                <input type="text" onChange={this.handleUpdate("address")} value={this.state.address} />
              </div>
              <div className="coffee-time-hosting-form-item-container">
                Address 2
                <br />
                <input type="text" onChange={this.handleUpdate("address2")} value={this.state.address2} />
              </div>
              <div className="coffee-time-hosting-form-item-container">
                City
                <br />
                <input type="text" onChange={this.handleUpdate("city")} value={this.state.city} />
              </div>
              <div className="coffee-time-hosting-form-item-container">
                State
                <br />
                <input type="text" onChange={this.handleUpdate("state")} value={this.state.state} />
              </div>
              <div className="coffee-time-hosting-form-item-container">
                Zip
                <br />
                <input type="text" onChange={this.handleUpdate("zip")} value={this.state.zip} />
              </div>
              <div className="coffee-time-hosting-form-item-container">
                What might we talk about?
                <br />
                <textarea type="text" className="coffee-time-hosting-form-topics" onChange={this.handleUpdate("topics")} value={this.state.topics} />
              </div>
            </form>
          </div>
          <div className="coffee-time-host-profile-container">
            <h2 className="coffee-time-hosting-form-intro">
              A Little About You...
            </h2>
            <h3 className="coffee-time-host-profile-name">
              {this.props.currentUser.name}
            </h3>
            <img src={profile} alt="Logo" className="host-profile-pic" />
            <div className="coffee-time-host-profile-sub-container">
              <div>
                A Brief Introduction
                <br />
                <textarea className="coffee-time-host-profile-intro" onChange={this.handleUpdate("introduction")} value={this.state.introduction} />
              </div>
              <div>
                Your Story
                <br />
                <textarea className="coffee-time-host-profile-intro" onChange={this.handleUpdate("story")} value={this.state.story} />
              </div>
            </div>
          </div>
        </div>
        <button className="coffee-time-host-submit" onClick={this.handleSubmit}>
          LET'S BOOGIE
        </button>
      </div>;
  }
}


export default HostForm;


