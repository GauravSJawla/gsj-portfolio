import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'assets/scss/material-kit-react.scss?v=1.8.0';

// pages for this product
import LandingPage from 'views/LandingPage/LandingPage.js';
import ProfilePage from 'views/ProfilePage/ProfilePage.js';
import LoginPage from 'views/LoginPage/LoginPage.js';
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';

//Redux
import { Provider } from 'react-redux';
import store from './store';

const dashboardRoutes = [];

const App = props => {
  const { ...rest } = props;
  return (
    <Provider store={store}>
      <Router>
        <Header
          absolute
          color='transparent'
          routes={dashboardRoutes}
          brand='Material Kit React'
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: 'white'
          }}
          {...rest}
        />
        <Fragment>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/profile-page' component={ProfilePage} />
            <Route exact path='/login-page' component={LoginPage} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
