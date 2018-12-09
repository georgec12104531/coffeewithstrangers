import React from 'react';
import WelcomeContainer from './welcome/welcome_container';
import CoffeeNav from './nav/coffee_nav';
import Splash from './splash/splash';
import {
  Route,
  Link,
  HashRouter,
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
      {/* //at the exact path of '/'*/}
      {/* //will have to replace render with */}

        {/* auth routes only seen when not logged in*/}
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path='/dashboard' component={DashboardContainer} />
        <Route exact path="/splash" component={Splash} />
        {/* protected routes only seen when logged in*/}
        {/* <Redirect to="/splash"/>  */}
        <Route exact path="/coffee-times" component={CoffeeTimesContainer}/>
        <Route exact path="/coffee-times/:coffeeTimeId" component={CoffeeTimeShowContainer}/>
        <Route exact path="/locations/:locationIdhost/host" component={HostFormContainer}/>
        {/* <Redirect to="/splash"/> */}
    </Switch>
  </div>
);

export default App;
