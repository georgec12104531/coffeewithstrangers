import React from 'react';
import { withRouter } from 'react-router-dom';


class Splash extends React.Component {



  render() {
    return (
      <div>
        <div className="splash-container">
          <div className="background-text-group">
            <h1 className="header-text">Everyone is Interesting</h1>
            <h2 className="header-2-text">...but you don't discover that when you're staring a screen</h2>
          </div>
        </div>
        
        <div className="background-film"></div>

        <div className="description-background">
          <div className="description-main">
            <h2>Show up for coffee</h2>
            <h2>Have a real conversation</h2>
            <h2>See what happens</h2>
          </div>
          <div className="description">
            <h3>You and a few others join a host at a cafe.</h3>
            <h3>You talk for two hours about anything.</h3>
            <h3>That's it. No strings attached.</h3>
          </div>
        </div>
      </div>




    );
  }

}


export default withRouter(Splash);
