import React from 'react';

import { Link, withRouter } from 'react-router-dom';


class Splash extends React.Component {

  render() {
    return <div>
        {/*<a href="#cats">Link to cats</a> */}
        <div className="splash-container">
          <div className="background-film">
            <div className="background-text-group">
              <link href="https://fonts.googleapis.com/css?family=Nunito+Sans" rel="stylesheet" />
              <h1 className="header-text">Everyone is interesting</h1>
              <h2 className="header-2-text">
                ...but you don't discover that when you're staring a screen
              </h2>
              <Link className="tea-time-button" to="/coffee-times">
                LET'S GET COFFEE
              </Link>/
            </div>
          </div>
        </div>
        <div className="description-container">
          <div className="description-main">
            <h2 className="description-header">Show up for coffee</h2>
            <h3 className="description-message">
              You and a few others join a host at a cafe.
            </h3>
          </div>
          <div className="description-main">
            <h2 className="description-header">Have a real conversation</h2>
            <h3 className="description-message">
              You talk for two hours about anything.
            </h3>
          </div>
          <div className="description-main">
            <h2 className="description-header">
              See what happens
            </h2>
            <h3 className="description-message">
              That's it. No strings attached.
            </h3>
          </div>
      </div>
    </div>
  }

}


export default withRouter(Splash);
