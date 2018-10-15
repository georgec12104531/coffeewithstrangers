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
        <AuthRoute exact path="/splash" component={Splash} />
        {/* protected routes only seen when logged in*/}
        {/* <Redirect to="/splash"/>  */}
        <Redirect to="/splash"/> 
    </Switch>
  </div>
);

export default App;
