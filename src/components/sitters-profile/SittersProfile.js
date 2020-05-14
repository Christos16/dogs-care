import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSitters } from '../../actions/SittersAction';
import SitterItem from './SitterItem';
import Spinner from '../common/Spinner';
import './sitter-profile.styles.scss';
import PropTypes from 'prop-types';

class SittersProfile extends Component {
  componentDidMount() {
    this.props.getSitters();
  }

  render() {
    const { sitters, loading } = this.props.sitters;
    let sitterItem;
    if (sitters.length === 0 || loading) {
      sitterItem = <Spinner />;
    } else {
      sitterItem = sitters.map(sitter => <SitterItem sitter={sitter} />);
    }

    return (
      <div data-test='Sitters'>
        <div className='jumbotron' style={{ padding: '20px' }}>
          <a href='/'>
            {' '}
            <span className='reference'>Home</span>
          </a>{' '}
          >{' '}
          <a href='/petsitters'>
            <span className='reference'>Pet Sitters</span>
          </a>
        </div>
        <div className='container'>
          <div
            className='mt-4 text-muted'
            style={{ fontFamily: 'Open Sans Serif', fontSize: '20px' }}
          >
            There are currently:{' '}
            <strong style={{ color: 'black', fontSize: '35px' }}>
              {sitters.length}
            </strong>{' '}
            sitters available
          </div>

          <div className='grid'>{sitterItem}</div>
        </div>
      </div>
    );
  }
}
SittersProfile.propTypes = {
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
)(SittersProfile);
