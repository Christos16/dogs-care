import React from 'react';
import { Link } from 'react-router-dom';
import './service.styles.scss';

const Services = () => {
  return (
    <div className=''>
      <div
        className='jumbotron jumbotron-fluid display-4 text-center'
        style={{ color: 'purple', fontFamily: 'Bitter', fontWeight: 'bold' }}
      >
        OUR SERVICES FOR EVERY PET
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <h5 className="couleur">
              {' '}
              <i className='fa faf fa-chess-pawn' /> <span> Pet Boarding</span>
            </h5>
            <p className='lead'>
              Whenever you would like to travel, your pet will stay overnight as
              comfortable as it is with you
            </p>
            <h5 className="couleur">
              <i className='fa  fa-home' /> <span>Pet Stay</span>
            </h5>
            <p className='lead'>
              For everytime that you won't be home but still want your pet to
              get loved
            </p>
            <h5 className="couleur" >
              <i className='fa fa fa-walking' /> <span>Pet Walk</span>
            </h5>
            <p className='lead'>
              Whenever you just want someone to take your dog for a walk during
              your abscence, there is a service for you
            </p>
          </div>
          <div className='col-6'>
            <div className='card'>
              <div
                className='card-header text-center'
                style={{ padding: '50px' }}
              >
                <i className='fa fa-star' style={{ color: 'purple' }} /> Book
                with only <strong>certified</strong> pet sitters
              </div>
              <div className='card-body'>
                <p className='card-text'>
                  <i
                    className='fa fa fa-check-square'
                    style={{ color: 'purple' }}
                  />{' '}
                  All sitters are certified by us
                </p>
                <p className='card-text'>
                  <spam>
                    <i
                      className='fa fa fa-check-square'
                      style={{ color: 'purple' }}
                    />
                  </spam>
                  {''} All sitters provide details and authentic information
                </p>
                <p className='card-text'>
                  <i
                    className='fa fa fa-check-square'
                    style={{ color: 'purple' }}
                  />{' '}
                  All sitters gets provided with ongoing training to maintain
                  their certified badge
                </p>
                <Link to='/booking'>
                  <button className='btn btn-primary btn-lg btn-block touched'>
                    Book your certified sitter now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
