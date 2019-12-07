import React, { useRef, useEffect } from 'react';
import { filterContacts } from '../../actions/SittersAction';
import { connect } from 'react-redux';

const SearchBar = ({ filtered }) => {
  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      console.log('Didnt work');
    }
  };
  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Contacts...'
        onChange={onChange}
      />
    </form>
  );
};

const mapStateToProps = state => ({
  filtered: state.filtered
});

export default connect(
  mapStateToProps,
  { filterContacts }
)(SearchBar);




