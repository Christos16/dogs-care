import React from 'react';
import styled from 'styled-components';

const Notif = styled.div`  
background-color: '#444';
border-style: groove;
color: white
border: 5px solid;
background: #71238b
padding: 5px;
position: absolute;
right: 16px;
top: ${props => props.top}px
z-index: 999;
transition: top 0.5s ease;
 > i{
  color: 'purple'
  margin-right: 40px
 } > h3{
  
 } `;

const Modal = ({ top }) => {
  return (
    <Notif top={top}>
      <div style={{ border: '10px' }}>
        <div>
          <i className='fas fa-check-circle' style={{ color: 'white' }}></i>Your
          booking has been confirmed. <br />
          Check your email for details.
        </div>
      </div>
    </Notif>
  );
};

export default Modal;
