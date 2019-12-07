import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <div className='center'>
      <img
        src={spinner}
        style={{
          width: '250px',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block',
          position: 'absolute'
        }}
        alt='Loading...'
      />
    </div>
  );
};

export default Spinner;
