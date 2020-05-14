import React, { Component } from 'react';
import ProfileHalf from './ProfileHalf';
import './sitter-profile.styles.scss';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';

class ProfileHeader extends Component {
  render() {
    const { sitter } = this.props;
    let ShowSitter;

    if (sitter === undefined) {
      ShowSitter = <Spinner />;
    } else {
      ShowSitter = (
        <div className='col-12 col-md-8'>
          <div className='text-center'>
            <div className='card-block my-5'>
              <img
                className='img-top-round mb-3'
                src={sitter.imgUrl}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  width: '50%',
                  borderRadius: '500px'
                }}
                alt=''
              />
              <h1 className='.sitterprofile'>{sitter.sitterHandle}</h1>{' '}
              <span>
                <i className='fa fa-map-pin' /> {sitter.location}
              </span>
              <div
                // eslint-disable-next-line
                className='jumbotron my-3'
                style={{
                  paddingTop: '10px',
                  paddingBottom: '12px',
                  paddingLeft: '60px',
                  paddingRight: '60px'
                }}
              >
                <p style={{ marginTop: '10px' }}>
                  {' '}
                  <i className='fa fa-money-bill text-muted' /> :{' '}
                  {sitter.pricing}
                </p>
              </div>
              <h4 className='reference'>Bio:</h4>
              {sitter.bio}
              <hr className='featurrete-divider' />
            </div>
            <h4 style={{ color: 'purple' }}>Qualifications:</h4>
            {sitter.Competence}
            <hr className='featurrete-divider' />
            <h4 class='reference'>Responsibilties:</h4>
            <i class='fas fa-paw'></i> {sitter.responsibility}
            <hr className='featurrete-divider' />
            <div className='row ml-5'></div>
          </div>
        </div>
      );
    }
    return (
      <div className='container'>
        <div className='row'>
          {ShowSitter}
          <ProfileHalf sitter={sitter} />
        </div>
      </div>
    );
  }
}
ProfileHeader.propTypes = {
  sitter: PropTypes.object.isRequired
};

export default ProfileHeader;
