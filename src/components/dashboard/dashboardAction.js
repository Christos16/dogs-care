import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const dashboardAction = credentials => {
  return (
    <p>
      <button href='#' className='btn btn-group-sm btn-lg touch under'>
        <Link to={`/edit-profile/${credentials.handle}`}>
          <i className='fa fa-user mr-2' /> Edit Profile
        </Link>
      </button>
      {'     '}

      <button href='#' className=' btn btn-group-sm btn-lg touch under'>
        <Link to='/petsitters'>
          <i className='fa fa-dog mr-2' /> Book a sitter
        </Link>
      </button>
    </p>
  );
};

dashboardAction.propTypes = {
  credentials: PropTypes.object.isRequired
};

export default dashboardAction;
