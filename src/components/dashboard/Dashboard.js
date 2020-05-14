import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../../actions/authAction';
import './dashboard.styles.scss';
import { getBooking } from '../../actions/bookingAction';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import styles from './table.module.scss';
class Dashboard extends Component {
  componentDidMount() {
    this.props.getUserData();
    this.props.getBooking(this.props.credentials.handle);
  }
  render() {
    let dashboardContent;

    const { credentials } = this.props.credentials;
    const { booking } = this.props.booking;

    if (credentials.location) {
      dashboardContent = (
        <div>
          <p className='lead text-muted p' style={{ color: 'purple' }}>
            <div>
              <img
                className='mb-2'
                src={credentials.imageUrl}
                style={{
                  width: '200px',
                  borderRadius: '100px',
                  marginRight: '10px'
                }}
                alt=''
              />
            </div>
            Welcome{' '}
            <span className='display-5' style={{ color: 'purple' }}>
              {credentials.handle}
            </span>
          </p>
          <p>
            <a href={`/edit-profile/${credentials.userId}`}>
              <button
                href='#'
                className={`btn btn-group-sm btn-lg touch under ${styles.button}`}
              >
                <i className='fa fa-user mr-2' /> Edit Profile
              </button>
            </a>
            {'     '}
            <a href='/petsitters'>
              <button
                href='#'
                className={`btn btn-group-sm btn-lg touch under ${styles.button}`}
              >
                <i className='fa fa-dog mr-2' /> Book a sitter
              </button>
            </a>
          </p>
        </div>
      );
    } else {
      dashboardContent = (
        <div>
          <p className='lead text-muted '>Welcome </p>
          <p className>
            You have not yet setup a profile, please add some info
          </p>
          <a href='/create-profile'>
            <button
              className=' btn btn-lg'
              style={{ backgroundColor: 'purple', color: 'white' }}
            >
              Create Profile
            </button>
          </a>
        </div>
      );
    }

    let bookingCount = 1;

    const bookings = booking.map(booked => (
      <tr key={booked.userId}>
        <th scope='row'>{bookingCount++}</th>
        <td>{booked.sitterHandle}</td>
        <td>
          {booked.comment ? (
            booked.comment
          ) : (
            <p className='text-muted'>You did not mention a comment</p>
          )}
        </td>
        <Moment format='DD/MM/YYYY'>{booked.createAt}</Moment>
        <td>{booked.pricing}</td>
        <td>
          <i class='fas fa-calendar-alt' style={{ color: 'orange' }} /> In
          progress...
        </td>
      </tr>
    ));

    return (
      <div className='container' data-test='Dashboard'>
        <body className=''>
          <div className='row text-center mt-5'>
            <div className='col-md-12'>
              <h1 className='display-4 '>Dashboard</h1>

              {dashboardContent}
            </div>
          </div>

          <div className={styles.table}>
            <h3 className='text-muted'>Booking History</h3>
            <table class='table table-sm table-hover table-light table-responsive'>
              <thead>
                <tr className='text-white bg-dark'>
                  <th scope='col'>#Booking</th>
                  <th scope='col'>Sitter Name</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Date</th>
                  <th scope='col'>Sitter Fee</th>
                  <th>Status</th>
                  <th />
                </tr>

                {bookings.length > 0 ? (
                  bookings
                ) : (
                  <h5 className='ml-5 text-muted zero'>
                    You have not yet made a booking...
                  </h5>
                )}
              </thead>
            </table>
          </div>
        </body>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getUserData: PropTypes.func.isRequired,
  getBooking: PropTypes.func.isRequired,
  credentials: PropTypes.object.isRequired,
  booking: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  credentials: state.user,
  booking: state.booking
});

export default connect(
  mapStateToProps,
  { getUserData, getBooking }
)(Dashboard);
