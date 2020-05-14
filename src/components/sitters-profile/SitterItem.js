import React from 'react';
import './sitter-profile.styles.scss';
import PropTypes from 'prop-types';
import './sitter-profile.styles.scss';
import { Link } from 'react-router-dom';
const SitterItem = ({ sitter }) => {
  return (
    <div className='card'>
      <div className='card image'>
        <img className='image reduit' src={sitter.image} alt='reduit' />
        <div className='card-body'>
          <h5 className='card-title'>
            {sitter.sitterHandle}{' '}
            {sitter.certified && (
              <span>
                <i className='fa fa-check fa-check-circle'></i>
              </span>
            )}
          </h5>
          <h6 className='lead'>
            <i className='fa fa-map-pin' /> {sitter.location}
          </h6>
          <p className='card-text'>{sitter.bio}</p>

          <div className='text-center'>
            <Link to={`/sitters/${sitter.sitterId}`}>
              <button className='custom-button'>Visit Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
SitterItem.propTypes = {
  sitter: PropTypes.object.isRequired
};

export default SitterItem;
