import React from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Body from './components/layouts/Body';
import { Route, Switch } from 'react-router-dom';

import store from './store';
import SittersProfile from './components/sitters-profile/SittersProfile';
import Sitter from './components/sitters-profile/Sitter';
import Login from './components/auth/Login';
import { connect } from 'react-redux';
import Register from './components/auth/Register';
import CreateProfile from './components/create-profile/CreateProfile';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/common/PrivateRoute';
import { SET_AUTHENTICATED } from '../src/actions/types';
import { getUserData, logoutUser } from './actions/authAction';
import jwtDecode from 'jwt-decode';

import Booking from './bookings/Booking';
import EditProfile from './components/Posts/EditProfile';
import PrivacyPolicy from './components/layouts/PrivacyPolicy';

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <Route exact path='/' component={Body} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/petsitters' component={SittersProfile} />
        <Route exact path='/sitters/:id' component={Sitter} />
        <Route exact path='/privacy-policy' component={PrivacyPolicy} />

        <Switch>
          <PrivateRoute exact path='/dashboard/:handle' component={Dashboard} />
        </Switch>
        <Switch>
          <PrivateRoute
            exact
            path='/edit-profile/:parentId'
            component={EditProfile}
          />
        </Switch>
        <Switch>
          <PrivateRoute
            exact
            path='/create-profile'
            component={CreateProfile}
          />
        </Switch>
        <Switch>
          <PrivateRoute
            exact
            path='/sitter/:sitterId/booking'
            component={Booking}
          />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  parent: state.parent
});

export default connect(
  mapStateToProps,
  { getUserData, logoutUser }
)(App);
