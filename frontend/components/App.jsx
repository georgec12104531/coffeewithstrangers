import React from 'react';
import WelcomeContainer from './welcome/welcome_container';
import CoffeeNav from './nav/coffee_nav';
import Splash from './splash/splash';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { AuthRoute } from '../api_util/route_util';

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import CoffeeTimesContainer from './coffee_times/coffee_times_container';
import CoffeeTimeShowContainer from './coffee_time/coffee_time_show_container';
import HostFormContainer from './form/host_form_container';
import DashboardContainer from './dashboard/dashboard_container';

const App = () => (
  <div>
    <nav className="nav">
        <CoffeeNav/>
        <WelcomeContainer/>
    </nav>

    <Switch>
      {/* //will have to replace render with */}
      {/* auth routes only seen when not logged in*/}
      {/* protected routes only seen when logged in*/}
      <AuthRoute exact path="/login" component={LoginFormContainer}/>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path='/dashboard' component={DashboardContainer} />
      <Route exact path="/splash" component={Splash} />
      <Route exact path="/coffee-times" component={CoffeeTimesContainer}/>
      <Route exact path="/coffee-times/:coffeeTimeId" component={CoffeeTimeShowContainer}/>
      <Route exact path="/locations/:locationIdhost/host" component={HostFormContainer}/>
      <Redirect to="/splash" />
    </Switch>

    <footer className="footer-container">
      <div className="footer-icons-container">
        <a href="https://georgecharleschang.com" target="_blank" className="footer-icon">Portfolio</a>
        <br/>
        <a href="https://www.linkedin.com/in/george-chang-b76ab8ab/" target="_blank" className="footer-icon">Linkedin</a>
        <br/>
        <a href="https://github.com/georgec12104531" target="_blank" className="footer-icon">Github</a>
      </div>
      <div className="footer-paragraph-container">
        <p className="footer-paragraph">
          Coffee With Strangers is all about making our cities feel more like neighborhoods. We're more "connected" than ever before, but we're also more alone. And all we want to do is bring people together because, well, the world is better that way.
        </p>
        <p className="footer-paragraph">
          We're not doing anything groundbreaking. We're creating something that would've been incredibly unnecessary 20 years ago. But while we get busier, it's easy to forget the value of a conversation for no reason. A conversation that's intentionally unintentional.
        </p>  
      </div>
      
      
    </footer>
  </div>
);

export default App;
