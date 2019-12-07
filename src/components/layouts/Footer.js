import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => {
  return (
    <div class='footer mt-auto py-3'>
      <div class='container row ml-4'>
        <div className='col-sm-4'>
          <h4>Dogs-care</h4>
          <span className='text-white-50 message mb-2'>
            <p style={{ fontSize: '18px' }}>
              Our mission is to provide you with certified sitters which enables
              your pet to receive quality services when your life gets busy.
            </p>{' '}
          </span>
        </div>
        <div className='col-sm-4'>
          <span>
            {' '}
            <h4 class='ml-4'>Links</h4>
          </span>
          <ul class='links' style={{ fontSize: '20px' }}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/petsitters'>Find petsitters</Link>
            </li>
            <li>
              <Link to='/petsitters'>Book Sitters</Link>
            </li>
            <li class='list-inline-item'>
              <Link to='/privacy-policy'>Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className='col-sm-4'>
          <h4 class='location '>Location</h4>
          <p>
            <i class='fas fa-map-pin' /> Imittou 64, Kolonaki, Athens
          </p>
          <p class='mb-0 mr-3 mb-3'>
            <i class='fa fa-phone mr-1' /> (210) 754-3010
          </p>
          <p>
            <i class='far fa-envelope mr-1' /> info@dogs-care.com
          </p>
        </div>
        <div class='copyright'>
          <div class=''>
            <p class=''>
              <small class='text-white-50'>© 2019. All Rights Reserved. </small>
              <small class='text-white-50'>Made by Christos Malamas</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
