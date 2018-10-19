import React from 'react';
import { withRouter } from 'react-router-dom';


class Splash extends React.Component {

  render() {
    return (
      <div>
        {/*<a href="#cats">Link to cats</a> */}
        <div className="splash-container">
          <div className="background-film">
            <div className="background-text-group">
              <link href="https://fonts.googleapis.com/css?family=Nunito+Sans" rel="stylesheet"/>
              <h1 className="header-text">Everyone is interesting</h1>
              <h2 className="header-2-text">...but you don't discover that when you're staring a screen</h2>
            </div>
          </div>
        </div>

        <div className="description-background">
          <div className="description-main">
            <h2 className="description-main-1">&ensp; &emsp; Show up for coffee</h2>
            <h2 className="descrition-main-2">&ensp; &nbsp; Have a real conversation</h2>
            <h2 className="descrition-main-3">See what happens</h2>
          </div>
          <div className="description">
            <link href="https://fonts.googleapis.com/css?family=Nunito+Sans" rel="stylesheet"/>
            <h3 className="description-1">You and a few others join a host at a cafe.</h3>
            <h3 className="description-2"> You talk for two hours about anything.</h3>
            <h3 className="descrition-3"> That's it. No strings attached.</h3>
          </div>
        </div>
      </div>
    );
  }

}


export default withRouter(Splash);
