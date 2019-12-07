import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.scss';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authAction';

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { authenticated, credentials } = this.props.user;

    const LoggedIn = (
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'></li>
        <li className='nav-item'>
          <Link className='nav-link' to={`/dashboard/${credentials.handle}`}>
            Dashboard
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            href='#'
            className='nav-link'
            onClick={this.onLogoutClick.bind(this)}
          >
            Logout
          </Link>
        </li>
      </ul>
    );

    const Guest = (
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <Link className='nav-link' to={'/register'}>
            Register
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to={'/login'}>
            Log In
          </Link>
        </li>
      </ul>
    );

    return (
      <nav
        className='navbar navbar-expand-sm navbar-dark'
        style={{ backgroundColor: 'purple' }}
      >
        <div className='container'>
          <Link to='/' className='navbar-brand' href='#'>
            Dogs-care
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#mobile-nav'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='mobile-nav'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item '>
                <Link to='/petsitters' className='nav-link' href=''>
                  Find PetSitters
                </Link>
              </li>
            </ul>
            {authenticated ? LoggedIn : Guest}
          </div>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
