import React from 'react';
import WelcomeContainer from './welcome/welcome_container';
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
    {/* fddfdfdf*/  }
    <header>
        <Link to="/">
          <h1>coffeewithstrangers</h1>
        </Link>
        <WelcomeContainer/>
    </header>

    <Switch>
      {/* //at the exact path of '/'*/}
      {/* //will have to replace render with */}
      <Route exact path='/' render={() => null}/>
        {/* auth routes only seen when not logged in*/}
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        {/* protected routes only seen when logged in*/}
        <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
