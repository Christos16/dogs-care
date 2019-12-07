import React from 'react';
import './navbar.styles.scss';
import { withRouter } from 'react-router-dom';
import './layout.styles.scss';

const Details = ({ history }) => {
  return (
    <div className='container'>
      <h1
        className='text-center'
        style={{ marginBottom: '50px', marginTop: '40px' }}
      >
        How It Works ? It's simple
      </h1>
      <div className='row'>
        <div className='col-lg-4'>
          <img class='rounded-circle img' src='/images/icon1.png' alt='' />
          <h6 style={{ color: 'purple' }}>Step 1</h6>
          <h2 style={{ fontFamily: 'Bitter' }}>
            Search and Match With Trusted Sitters
          </h2>
          <p>
            Whatever the skills or services that you require for your pet, we
            will help you match with the right one.
          </p>
        </div>
        <div className='col-lg-4'>
          <img
            className='rounded-circle img'
            src='/images/icon2.png'
            alt=''
            width=''
            height=''
          />
          <h6 className='couleur'>Step 2</h6>
          <h2 className='famille'>Connect With The Right Matches</h2>
          <p>
            Find certified pet sitters and reach through them via our secure
            platform{' '}
          </p>
        </div>
        <div class='col-lg-4'>
          <img
            class='rounded-circle img me'
            src='/images/icon3.png'
            alt=''
            width=''
            height=''
          />
          <h6 className='couleur'>Step 3</h6>
          <h2 className='famille'>Select and Hire for premium services</h2>
          <p>
            Hire the one that will stand out for you and let your pet receive
            quality services. That Easy{' '}
          </p>
        </div>
      </div>
      <div className='text-center'>
        <button
          type='button'
          className='btn btn-lg my-3 custom-button'
          data-toggle='button'
          aria-pressed='true'
          autocomplete='on'
          onClick={() => {
            history.push('/petsitters');
          }}
        >
          Begin Your Search
        </button>
      </div>
    </div>
  );
};

export default withRouter(Details);
