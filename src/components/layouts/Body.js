import React, { Fragment } from 'react';
import Details from './Details';
import Landing from './Landing';
import Services from './Services';
import '../Sitter/sitter-card.styles.scss';
import Testimonial from './Testimonials';
import Footer from './Footer';

const Body = () => {
  return (
    <Fragment>
      <div
        style={{
          width: '100%',
          margin: '0px',
          padding: '0px',
          overflowX: 'hidden'
        }}
      >
        <Landing />
        <Details />
        <hr className='featurette-divider mb-5' />
        <Services />
        <Testimonial />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Body;
