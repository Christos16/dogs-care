import React from 'react';
import Proptypes from 'prop-types';
import './dashboard.styles.scss';

const History = ({ booked: sitterHandle, createAt, pricing, comment }) => {
  return (
    <div className='ml-4 mr-4 colone'>
      <h3 className='text-muted'>Booking History</h3>
      <table class='table table-sm table-hover table-light history'>
        <thead>
          <tr className='text-white bg-dark'>
            <th scope='col'>#Booking</th>
            <th scope='col'>Sitter Name</th>
            <th scope='col'>Description</th>
            <th scope='col'>Date</th>
            <th scope='col'>Quote of Sitter</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>{sitterHandle}</td>
            <td>{comment}</td>
            <td>{createAt}</td>
            <td>{pricing}</td>
            <td>
              <i class='fas fa-calendar-alt' style={{ color: 'orange' }} /> In
              progress...
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default History;
