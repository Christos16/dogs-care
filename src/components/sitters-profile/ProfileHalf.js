import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSitters } from '../../actions/SittersAction';
import SitterCard from '../Sitter/SitterCard';
import { Link } from 'react-router-dom';
import './sitter-profile.styles.scss';
import PropTypes from 'prop-types';

class ProfileHalf extends Component {
  render() {
    const { sitter } = this.props.sitters;

    return (
      <div className='col-6 col-md-4'>
        <div
          className='card mb-3 mob'
          style={{
            backgroundColor: 'purple',
            color: 'white',
            margin: '10px',
            padding: '10px'
          }}
        >
          <h3 className='mob'>{`Want to connect with ${sitter.sitterHandle} ?`}</h3>
          <div>
            <Link to={`/sitter/${sitter.sitterId}/booking`}>
              <button
                className='btn btn-block'
                style={{ backgroundColor: 'white', color: 'purple' }}
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>
        <h2 className='principal'>Similar Profiles Nearby</h2>
        <div className='row'>
          <SitterCard />
        </div>
      </div>
    );
  }
}

ProfileHalf.propTypes = {
  getSitters: PropTypes.func.isRequired,
  sitters: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  sitters: state.sitters,
  user: state.user
});

export default connect(
  mapStateToProps,
  { getSitters }
)(ProfileHalf);
