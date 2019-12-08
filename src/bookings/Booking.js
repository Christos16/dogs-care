import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookNow } from '../actions/bookingAction';
import { getSitter } from '../actions/SittersAction';
import Modal from './Modal';
import { setTimeout } from 'timers';
import PropTypes from 'prop-types';

class Booking extends Component {
  state = {
    comment: '',
    from: '',
    to: '',
    top: -100
  };

  componentDidMount() {
    this.props.getSitter();
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newBooking = {
      from: this.state.from,
      to: this.state.to,
      comment: this.state.comment
    };
    this.props.bookNow(this.props.sitter.sitterId, newBooking);

    this.setState({ top: 46 }, () => {
      setTimeout(() => {
        this.setState({
          top: -100
        });
      }, 5000);
    });

    setTimeout(() => {
      this.redirect();
    }, 6000);
  };
  redirect = () => {
    return this.props.history.push('/');
  };
  render() {
    return (
      <body style={{ backgroundColor: 'white', paddingBottom: '100px' }}>
        <Modal top={this.state.top} />
        <div class='container'>
          <div class='py-1 text-center'>
            <h2
              className='mb-5 mt-5'
              style={{ color: 'purple', fontSize: '40px' }}
            >
              Booking
            </h2>
            <p class='lead mb-5' style={{ color: 'black', font: 'bold' }}>
              Only a few more steps and your pet will be cuddled by a certified
              pet sitter until your return
            </p>
          </div>

          <div class='row'>
            <div class='col-md-4 order-md-2 mb-4'>
              <img
                src={'/images/walky.jpg'}
                style={{ width: '350px', height: 'auto' }}
                alt='sitter'
              />
            </div>
            <div class='col-md-8 order-md-1'>
              <h4 class='mb-3' style={{ color: 'purple' }}>
                Details
              </h4>
              <form onSubmit={this.onSubmit}>
                <div class='needs-validation' novalidate>
                  <div className='row'>
                    <div class='mb-3 col-6'>
                      <label for='username'>Drop off</label>
                      <div class='input-group'>
                        <div class='input-group-prepend'>
                          <span class='input-group-text'>
                            <i
                              className='fa fa-calendar'
                              style={{ color: 'purple' }}
                            />
                          </span>
                        </div>
                        <input
                          type='date'
                          name='from'
                          id='datePickerId'
                          class='form-control'
                          value={this.state.from}
                          placeholder=''
                          required
                          onChange={this.onChange}
                          // onClick={this.onDate}
                        />
                      </div>
                    </div>
                    <div class='mb-3 col-6'>
                      <label for='username'>Pick up</label>
                      <div class='input-group'>
                        <div class='input-group-prepend'>
                          <span class='input-group-text'>
                            <i
                              className='fa fa-calendar-plus'
                              style={{ color: 'purple' }}
                            />
                          </span>
                        </div>
                        <input
                          name='to'
                          type='date'
                          value={this.state.to}
                          id='datePickerId'
                          class='form-control'
                          onChange={this.onChange}
                          required
                          // onClick={this.onDate}
                        />
                      </div>
                    </div>
                  </div>
                  <div class='mb-3'>
                    <label for='address'>
                      Specify additional requirements{' '}
                      <span class='text-muted'>(Optional)</span>
                    </label>
                    <textarea
                      type='text'
                      class='form-control'
                      id='address'
                      placeholder='e.g I will provide the dog food for the 3 days'
                      name='comment'
                      value={this.state.comment}
                      onChange={this.onChange}
                    ></textarea>
                    <div class='invalid-feedback'>
                      Please enter your shipping address.
                    </div>

                    <hr class='mb-4' />
                    <button
                      class='btn btn-info btn-block mt-4 toucher'
                      type='submit'
                    >
                      Book now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

Booking.propTypes = {
  booking: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  booking: state.booking,
  loading: state.loading,
  sitter: state.sitters.sitter
});

export default connect(
  mapStateToProps,
  { bookNow, getSitter }
)(Booking);
