import React from 'react';
import WelcomeContainer from './welcome/welcome_container';
import {
  Route,
  Link,
  HashRouter,
  Switch
} from 'react-router-dom';

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => (
  <div>
    <header>
        <Link to="/">
          <h1>coffeewithstrangers</h1>
        </Link>
        <WelcomeContainer/>
    </header>

    <Switch>
      <Route exact path="/login" component={LoginFormContainer}/>
      <Route exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
