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
      <Fragment>
        <Landing />
        <Details />
        <hr className='featurette-divider mb-5' />
        <Services />
        <Testimonial />
      </Fragment>
      <Footer />
    </Fragment>
  );
};

export default Body;
