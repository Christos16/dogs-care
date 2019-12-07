import React from 'react';

export const Carrousel = () => {
  return (
    <div id='myCarousel' class='carousel slide' data-ride='carousel'>
      <ol class='carousel-indicators'>
        <li data-target='#myCarousel' data-slide-to='0' class='active'></li>
        <li data-target='#myCarousel' data-slide-to='1'></li>
        <li data-target='#myCarousel' data-slide-to='2'></li>
      </ol>

      <div className='carousel-inner'>
        <div className='item active'>
          <img src='la.jpg' alt='Los Angeles' />
        </div>

        <div className='item'>
          <img src='chicago.jpg' alt='Chicago' />
        </div>

        <div className='item'>
          <img src='ny.jpg' alt='New York' />
        </div>
      </div>

      <a className='left carousel-control' href='#myCarousel' data-slide='prev'>
        <span className='glyphicon glyphicon-chevron-left'></span>
        <span className='sr-only'>Previous</span>
      </a>
      <a className='right carousel-control' href='#myCarousel' data-slide='next'>
        <span className='glyphicon glyphicon-chevron-right'></span>
        <span className='sr-only'>Next</span>
      </a>
    </div>
  );
};

export default Carrousel
