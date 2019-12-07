import React, { Component } from 'react';
import './layout.styles.scss';
import { connect } from 'react-redux';
import { getUserData } from '../../actions/authAction';
import { Link } from 'react-router-dom';

class Landing extends Component {
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    const { credentials } = this.props.credentials;
    const { authenticated } = this.props.authenticated;

    const LoggedIn = (
      <div className='welcome'>
        Welcome{' '}
        <strong className='username'>
          <u style={{ color: 'purple' }}>
            <Link to={`/dashboard/${credentials.handle}`}>
              {credentials.handle}{' '}
            </Link>
          </u>
        </strong>
      </div>
    );

    const guest = (
      <p>
        <Link to={'/register'}>
          <button href='#' className='btn btn-group-sm btn-lg touch under'>
            Register
          </button>
        </Link>
        {'     '}
        <Link to={'/login'}>
          <button href='#' className=' btn btn-group-sm btn-lg touch under'>
            Login
          </button>
        </Link>
      </p>
    );
    return (
      <div
        className='position-relative overflow-hidden p-3  background-image'
        style={{
          backgroundImage: 'url(./images/pet.jpg'
        }}
      >
        <div className='col-md-5 p-lg-5 float-left my-5 '>
          <h1 className='title' style={{ color: '#b41a89' }}>
            Dogs-care
          </h1>
          <p className='display-6 font-weight-normal subtitle'>
            Find certified pet sitters for services that your pet deserves
          </p>
          {authenticated ? LoggedIn : guest}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  credentials: state.user,
  authenticated: state.user
});
export default connect(
  mapStateToProps,
  { getUserData }
)(Landing);
