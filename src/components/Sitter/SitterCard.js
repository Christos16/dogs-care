import React, { Component } from 'react';
import { connect } from 'react-redux';
import './sitter-card.styles.scss';
import { getSitters } from '../../actions/SittersAction';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SitterCard extends Component {
  componentDidMount() {
    this.props.getSitters();
  }
  render() {
    const { sitters } = this.props.sitters;

    return (
      <div>
        {sitters.map(sitter => (
          <div
            className='row mb-4'
            style={{
              borderRadius: '10px',
              borderStyle: 'groove ',
              borderColor: '#ccc',
              minWidth: '30px',
              display: 'flex',
              marginBottom: '20',
              marginRight: '20px',
              boxShadow: '4px',
              marginLeft: '20px'
            }}
          >
            <div className='col-4'>
              <img
                className=''
                src={sitter.image}
                style={{
                  minWidth: '70px',
                  borderRadius: '50px',
                  marginRight: '10px'
                }}
                alt=''
              />
            </div>

            <div className='col-8 carte' style={{ padding: '25' }}>
              <h5 className='card-title lead' style={{ fontSize: '15px' }}>
                {sitter.sitterHandle}
              </h5>
              <p style={{ fontSize: '10px' }} className='card-text bold'>
                <i className='fa fa-map-pin' /> {sitter.location}
              </p>
              <p style={{ fontSize: '10px' }} className='card-text'>
                <i className='fa fa-dog' /> {sitter.services}
              </p>

              <div>
                <Link to={`/sitters/${sitter.sitterId}`}>
                  <button
                    style={{ backgroundColor: 'purple' }}
                    className='btn btn-sm tub'
                  >
                    {' '}
                    Visit Profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

SitterCard.propTypes = {
  getSitters: PropTypes.func.isRequired,
  sitters: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  sitters: state.sitters,
  loading: state.loading
});
export default connect(
  mapStateToProps,
  { getSitters }
)(SitterCard);
