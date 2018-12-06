import React from 'react';
import moment from 'moment';


class HostForm extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    const fromTimes = [ "8:00AM", "8:15AM", "8:30AM", "8:45AM",
                        "9:00AM", "9:15AM", "9:30AM", "9:45AM",
                        "10:00AM", "10:15AM", "10:30AM", "10:45AM",
                        "11:00AM", "11:15AM", "11:30AM", "11:45AM",
                        "12:00PM", "12:15PM", "12:30PM", "12:45PM",
                        "1:00PM", "1:15PM", "1:30PM", "1:45PM",
                        "2:00PM", "2:15PM", "2:30PM", "2:45PM",
                        "3:00PM", "3:15PM", "3:30PM", "3:45PM",
                        "4:00PM", "4:15PM", "4:30PM", "4:45PM",
                        "5:00PM", "5:15PM", "5:30PM", "5:45PM",
                        "6:00PM", "6:15PM", "6:30PM", "6:45PM",
                        "7:00PM", "7:15PM", "7:30PM", "7:45PM",
                        "8:00PM"]

    const toTimes = ["8:15AM", "8:30AM", "8:45AM",
                     "9:00AM", "9:15AM", "9:30AM", "9:45AM",
                     "10:00AM", "10:15AM", "10:30AM", "10:45AM",
                     "11:00AM", "11:15AM", "11:30AM", "11:45AM",
                     "12:00PM", "12:15PM", "12:30PM", "12:45PM",
                     "1:00PM", "1:15PM", "1:30PM", "1:45PM",
                     "2:00PM", "2:15PM", "2:30PM", "2:45PM",
                     "3:00PM", "3:15PM", "3:30PM", "3:45PM",
                     "4:00PM", "4:15PM", "4:30PM", "4:45PM",
                     "5:00PM", "5:15PM", "5:30PM", "5:45PM",
                     "6:00PM", "6:15PM", "6:30PM", "6:45PM",
                     "7:00PM", "7:15PM", "7:30PM", "7:45PM",
                     "8:00PM", "8:15PM", "8:30PM", "8:45PM",
                     "9:00PM", "9:15PM", "9:30PM", "9:45PM",
                     "10:00PM"]


    return <div className="coffee-time-hosting-form-main-container">
        <div className="coffee-time-hosting-form-container">
          <h2 className="coffee-time-hosting-form-intro">
            Plan Your Coffee Time
          </h2>
          <form className="hosting-form-container">
            <div>
              <div className="coffee-time-hosting-form-title">Date</div>
              <br />
              <input type="date" className="host-form-date" />
            </div>
            <div>
              <div className="coffee-time-hosting-form-time-container">
                <select size="1" className="coffee-time-hosting-form-time">
                  <option value="disabled">Select Start Time</option>
                  {fromTimes.map((time, idx) => (
                    <option key={idx}>{time}</option>
                  ))}
                </select>
                to
                <select size="1" className="coffee-time-hosting-form-time">
                  <option value="disabled">Select End Time</option>
                  {toTimes.map((time, idx) => (
                    <option key={idx}>{time}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              Address 1
              <br />
              <input type="text" />
            </div>
            <div>
              Address 2
              <br />
              <input type="text" />
            </div>
            <div>
              City
              <br />
              <input type="text" />
            </div>
            <div>
              State
              <br />
              <input type="text" />
            </div>
            <div>
              Zip
              <br />
              <input type="text" />
            </div>
            <div>
              What might you talk about?
              <br />
              <textarea type="text" className="coffee-time-hosting-form-topics" />
            </div>
          </form>
        </div>
        <div className="coffee-time-host-profile-container">
          <div>hi</div>
        </div>
      </div>;
  }
}


export default HostForm;


