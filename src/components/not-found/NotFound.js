import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div id='error'>
        <h1 className='display-2' style={{ color: 'purple' }}>
          Oops! That page can’t be found.
        </h1>
        <p className='lead'>
          It looks like nothing was found at this location. Maybe try one of the
          links in the menu or press back to go to the previous page.
        </p>
      </div>
    );
  }
}
export default NotFound;
